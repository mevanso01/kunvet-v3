/*
 * File server
 *
 * Before uploading, a File "slot" is already created
 * in the database, authorizing the upload.
 *
 * The user supplies a File ID along with the multipart/form-data
 * attachment to complete the uploading process. Several
 * interesting fields of the File schema include:
 *
 *  * owner:        ObjectId of the owner (uploader)
 *  * filename:     String of the actual filename.
 *  * uploadPath:   String of the location of the uploaded
 *                  file, relative to the server executable.
 *  * mimeType:     String indicating the MIME type the file
 *                  should be served in
 *  * readOnly:     Boolean indicating whether the file can
 *                  be (re-)uploaded.
 *  * uploadOnce:   Boolean indicating whether the file
 *                  can be uploaded only once. The readOnly
 *                  bit is automatically set when the file
 *                  is accepted. Use cases include employer
 *                  dropboxes and other scenarios requiring
 *                  file immutability.
 *  * employerOnly: Boolean indicating whether the file
 *                  is downloadable by employer accounts
 *                  only. The owner always has read access
 *                  to the file.
 *
 * Authentication is required to download any file.
 */

// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaMulter from 'koa-multer';
import KoaSend from 'koa-send';

// Mongoose
import Mongoose from 'mongoose';

// Utils
import Models from '@/mongodb/Models';
import uuidv1 from 'uuid/v1';

// Node
import path from 'path';
import fs from 'fs';

const app = new Koa();
const router = new KoaRouter();
const upload = KoaMulter({
  storage: KoaMulter.diskStorage({
    destination: function destination(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function filename(req, file, cb) {
      cb(null, `${uuidv1()}${path.extname(file.originalname)}`);
    },
  }),
});

/* function uploadFile(file, fileSlot) {
  if (!file) {
    const response = {
      success: false,
      message: 'File not supplied',
    };
    return response;
  }
  if (fileSlot.readOnly) {
    // Read only file :(
    fs.unlink(file.path);
    const response = {
      success: false,
      message: 'Read-only file',
    };
    return response;
  }
  const response = {
    success: true,
    message: fileSlot._id,
  };
  if (fileSlot.uploadPath) {
    response.updated = true;
    fs.unlink(fileSlot.uploadPath);
  } else {
    response.updated = false;
  }
  if (fileSlot.uploadOnce) {
    fileSlot.readOnly = true;
  }
  fileSlot.uploadPath = file.path;
  fileSlot.save();
  return response;
} */

router.post('/newfile', async (ctx) => {
  // const formData = ctx.req.body;
  // console.log('Request', ctx.req);
  if (!ctx.isAuthenticated()) {
    ctx.status = 403;
    ctx.body = 'You have to authenticate first!';
    return;
  }
  const fileSlot = new Models.File({
    owner: ctx.state.user._id,
    // TODO: How do I get the formData for the extention of the file?
    filename: `${uuidv1()}.pdf`, // ${path.extname(formData.originalname)}
  });

  try {
    await fileSlot.save();
  } catch (e) {
    ctx.status = 500;
    ctx.body = 'An error occured';
    return;
  }
  // const response = uploadFile(formData, fileSlot);
  // ctx.body = response;
  ctx.redirect(`upload/${fileSlot._id}`, ctx);
});

router.put('/upload/:id', upload.single('file'), async (ctx) => {
  const { file } = ctx.req;

  if (!file) {
    const response = {
      success: false,
      message: 'File not supplied',
    };
    ctx.status = 400;
    ctx.body = JSON.stringify(response);

    return;
  }

  if (!ctx.isAuthenticated()) {
    // Unauthenticated

    fs.unlink(file.path);
    const response = {
      success: false,
      message: 'Authentication required',
    };
    ctx.status = 401;
    ctx.body = JSON.stringify(response);

    return;
  }

  const fileId = ctx.params.id;
  let fileSlot = null;
  let granted = true;
  try {
    fileSlot = await Models.File.findOne({
      _id: fileId,
      owner: Mongoose.Types.ObjectId(ctx.state.user._id),
    });
  } catch (e) {
    // Invalid slot
    granted = false;
  }

  if (!fileSlot || !granted) {
    fs.unlink(file.path);

    const response = {
      success: false,
      message: 'Invalid file slot',
    };
    ctx.status = 404;
    ctx.body = JSON.stringify(response);

    return;
  }

  if (fileSlot.readOnly) {
    // Read only file :(

    fs.unlink(file.path);
    const response = {
      success: false,
      message: 'Read-only file',
    };
    ctx.status = 423;
    ctx.body = JSON.stringify(response);
    return;
  }

  // Accept the file
  const response = {
    success: true,
    message: 'File uploaded',
  };
  if (fileSlot.uploadPath) {
    response.updated = true;
    fs.unlink(fileSlot.uploadPath);
  } else {
    response.updated = false;
  }

  if (fileSlot.uploadOnce) {
    fileSlot.readOnly = true;
  }

  fileSlot.uploadPath = file.path;
  fileSlot.save();

  ctx.body = JSON.stringify(response);
});


router.get('/get/:id', async (ctx) => {
  let userId = -1;
  if (ctx.isAuthenticated()) {
    userId = Mongoose.Types.ObjectId(ctx.state.user._id);
  }

  const fileId = ctx.params.id;
  let fileSlot = null;
  try {
    fileSlot = await Models.File.findOne({
      _id: fileId,
    });
  } catch (e) {
    // Invalid slot

    const response = {
      success: false,
      message: 'Invalid file slot',
    };
    ctx.status = 404;
    ctx.body = JSON.stringify(response);

    return;
  }

  let granted = false;

  if (fileSlot.owner.equals(userId)) {
    granted = true;
  } else if (fileSlot.protected) {
    granted = fileSlot.accessList.includes(userId);
  } else {
    granted = !fileSlot.employerOnly || ctx.state.user.default_org;
  }

  if (!granted) {
    // Restricted file

    const response = {
      success: false,
      message: 'Invalid file slot',
    };
    ctx.status = 404;
    ctx.body = JSON.stringify(response);

    return;
  }

  await KoaSend(ctx, fileSlot.uploadPath);
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;

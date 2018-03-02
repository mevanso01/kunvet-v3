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
 *                  file, dependent of the storage backend.
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

// Storage backend
// import Backend from '@/storages/GoogleCloud';
import Backend from '@/storages/Local';

// Node
import path from 'path';
import fs from 'fs';

const app = new Koa();
const router = new KoaRouter();
const backend = new Backend();
const upload = KoaMulter({
  storage: KoaMulter.diskStorage({
    destination: function destination(req, file, cb) {
      cb(null, backend.getTempUploadPath());
    },
    filename: function filename(req, file, cb) {
      cb(null, `${uuidv1()}${path.extname(file.originalname)}`);
    },
  }),
});

async function uploadFile(ctx, file, fileSlot) {
  if (!fileSlot) {
    fs.unlink(file.path);

    const response = {
      success: false,
      message: 'Invalid file slot',
    };
    ctx.status = 404;
    ctx.body = JSON.stringify(response);

    return response;
  }

  if (fileSlot.readOnly) {
    // Read only file :(

    fs.unlink(file.path);
    const response = {
      success: false,
      message: 'Read-only file',
      id: fileSlot._id,
    };
    ctx.status = 423;
    ctx.body = JSON.stringify(response);

    return response;
  }

  const response = {
    success: true,
    message: 'File uploaded',
    id: fileSlot._id,
  };

  // Delete the original file
  if (fileSlot.uploadPath) {
    response.updated = true;
    try {
      await backend.deleteFile(fileSlot.uploadPath);
    } catch (e) {
      response.success = false;
      response.message = 'Could not delete original file';
      fs.unlinkSync(file.path);
    }
  }

  // Upload the new one to backend
  if (response.success) {
    try {
      const id = await backend.uploadFile(file.path, file.filename);
      fileSlot.uploadPath = id;
    } catch (e) {
      response.success = false;
      response.message = 'Could not upload new file';
      fs.unlinkSync(file.path);
    }
  }

  if (response.success && fileSlot.uploadOnce) {
    fileSlot.readOnly = true;
  }

  fileSlot.save();

  ctx.body = JSON.stringify(response);

  return response;
}

router.put('/new', upload.single('file'), async (ctx) => {
  // ctx.req.body.someField
  const { file } = ctx.req;
  console.log('FILE', file);

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

  const fileSlot = new Models.File({
    owner: ctx.state.user._id,
    filename: file.filename,
  });
  try {
    await fileSlot.save();
  } catch (e) {
    fs.unlink(file.path);
    ctx.status = 500;
    ctx.body = 'An error occurred';
    return;
  }

  await uploadFile(ctx, file, fileSlot);
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
  try {
    fileSlot = await Models.File.findOne({
      _id: fileId,
      owner: Mongoose.Types.ObjectId(ctx.state.user._id),
    });
  } catch (e) {
    // Invalid slot
  }

  await uploadFile(ctx, file, fileSlot);
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

  // Retrieve the URL from backend
  const url = await backend.getLink(fileSlot.uploadPath);
  if (url.startsWith('file://')) {
    // A file link
    const local = url.slice(7);
    await KoaSend(ctx, local, { root: '/' });
  } else {
    // Some public URL on the backend
    ctx.redirect(url);
  }
});

app.use(router.routes());
// app.use(router.allowedMethods());

export default app;

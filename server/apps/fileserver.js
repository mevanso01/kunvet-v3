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
 *  * owner:         ObjectId of the owner (uploader)
 *  * filename:      String of the actual filename.
 *  * backend:       Backend of the file
 *  * backendPath:   String of the location of the uploaded
 *                   file, dependent of the storage backend.
 *  * mimeType:      String indicating the MIME type the file
 *                   should be served in
 *  * readOnly:      Boolean indicating whether the file can
 *                   be (re-)uploaded.
 *  * uploadOnce:    Boolean indicating whether the file
 *                   can be uploaded only once. The readOnly
 *                   bit is automatically set when the file
 *                   is accepted. Use cases include employer
 *                   dropboxes and other scenarios requiring
 *                   file immutability.
 *  * employerOnly:  Boolean indicating whether the file
 *                   is downloadable by employer accounts
 *                   only. The owner always has read access
 *                   to the file.
 */

// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaMulter from 'koa-multer';

// Mongoose
import Mongoose from 'mongoose';

// Utils
import ErrorCode from '#/ErrorCode';
import Models from '@/mongodb/Models';
import Files from '@/utils/Files';
import Middlewares from '@/utils/Middlewares';
import ApiResponse from '@/utils/ApiResponse';
import Config from 'config';
import uuidv1 from 'uuid/v1';

// Node
import path from 'path';
import fs from 'fs';
import os from 'os';

const app = new Koa();
const router = new KoaRouter();
const upload = KoaMulter({
  storage: KoaMulter.diskStorage({
    destination: function destination(req, file, cb) {
      cb(null, os.tmpdir());
    },
    filename: function filename(req, file, cb) {
      cb(null, `${uuidv1()}${path.extname(file.originalname)}`);
    },
  }),
});

router.post('/create', Middlewares.RequireAuth, async (ctx) => {
  const req = ctx.request.body;

  const allowedMimeTypes = Config.get('private.files.allowedMimeTypes');

  if (!req.mimeType.startsWith('image/') && !allowedMimeTypes.includes(req.mimeType)) {
    ctx.body = ApiResponse(
      ErrorCode.UnsupportedFileType,
    );
    return;
  }

  const fileSlot = new Models.File({
    owner: ctx.state.user._id,
    filename: req.filename,
    mimeType: req.mimeType,
    backend: Config.get('private.files.defaultStorage'),
  });
  await fileSlot.save();

  const response = {
    success: true,
    id: fileSlot._id,
  };
  ctx.body = JSON.stringify(response);
});

router.get('/rupload/:id', Middlewares.RequireAuth, async (ctx) => {
  const fileId = ctx.params.id;
  let fileSlot = null;
  try {
    fileSlot = await Models.File.findOne({
      _id: fileId,
      owner: Mongoose.Types.ObjectId(ctx.state.user._id),
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

  if (fileSlot.readOnly) {
    // Read only file :(

    const response = {
      success: false,
      message: 'Read-only file',
      id: fileSlot._id,
    };
    ctx.status = 423;
    ctx.body = JSON.stringify(response);

    return;
  }

  if (!fileSlot.backend) {
    fileSlot.backend = Config.get('private.files.defaultStorage');
    await fileSlot.save();
  }

  const backend = Files.getBackend(fileSlot.backend);
  const instructions = await backend.requestUpload(fileSlot);

  if (instructions.action !== 'localUpload') {
    if (fileSlot.uploadOnce) {
      fileSlot.readOnly = true;
      await fileSlot.save();
    }
  }

  ctx.body = instructions;
});

router.put('/lupload/:id', upload.single('file'), async (ctx) => {
  // Local upload
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
      id: fileSlot._id,
    };
    ctx.status = 423;
    ctx.body = JSON.stringify(response);

    return;
  }

  if (fileSlot.uploadOnce) {
    fileSlot.readOnly = true;
  }

  if (!fileSlot.backend) {
    fileSlot.backend = Config.get('private.files.defaultStorage');
  }

  const backend = Files.getBackend(fileSlot.backend);
  try {
    fileSlot.backendPath = await backend.localUpload(fileSlot, file.path);
  } catch (e) {
    fs.unlinkSync(file.path);
    const response = {
      success: false,
      message: e.message,
    };
    ctx.status = 500;
    ctx.body = JSON.stringify(response);
    return;
  }

  fs.unlinkSync(file.path);
  await fileSlot.save();
  const response = {
    success: true,
    message: 'File uploaded',
  };
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
    fileSlot = await Files.get(fileId);
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

  if (!fileSlot) {
    const response = {
      success: false,
      message: 'Invalid file slot',
    };
    ctx.status = 404;
    ctx.body = JSON.stringify(response);
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

  if (!fileSlot.backend) {
    fileSlot.backend = Config.get('private.files.defaultStorage');
    await fileSlot.save();
  }

  const backend = Files.getBackend(fileSlot.backend);

  // Retrieve the URL from backend
  const url = await backend.getLink(fileSlot);
  if (url === true) {
    // Local download
    await backend.localDownload(fileSlot, ctx);
  } else {
    // URL redirect
    ctx.redirect(url);
  }
});

router.post('/delete/:id', async (ctx) => {
  if (!ctx.isAuthenticated()) {
    const response = {
      success: false,
      message: 'Authentication required',
    };
    ctx.status = 401;
    ctx.body = JSON.stringify(response);
    return;
  }
  /*
  try {
    fileSlot = await Models.Applicant.findOne({
       resume: { filename: fileId}
    });
  }
  */

  const fileId = ctx.params.id;
  let fileSlot = null;
  try {
    fileSlot = await Files.get(fileId);
  } catch (e) {
    const response = {
      success: false,
      message: 'Invalid file slot',
    };
    ctx.status = 404;
    ctx.body = JSON.stringify(response);
    return;
  }

  let usedInApplication = null;
  try {
    usedInApplication = await Models.Applicant.findOne({
      'resume.filename': fileId,
    });
  } catch (e) {
    usedInApplication = null;
  }

  if (!usedInApplication && fileSlot) {
    const backend = Files.getBackend(fileSlot.backend);
    try {
      await backend.deleteFile(fileSlot);
    } catch (e) {
      if (e.message.substring(0, 33) === 'ENOENT: no such file or directory') {
        console.log('File not found, continuing anyway');
      } else {
        const response = {
          success: false,
          message: e.message,
        };
        ctx.status = 500;
        ctx.body = JSON.stringify(response);
        console.log(response);
        return;
      }
    }
    try {
      fileSlot = await Models.File.remove({
        _id: fileId,
      });
    } catch (e) {
      console.log(e);
      const response = {
        success: false,
        message: 'Unable to remove fileslot',
      };
      ctx.status = 500;
      ctx.body = JSON.stringify(response);
      return;
    }
  }
  const response = {
    success: true,
    message: 'Success',
  };
  ctx.body = JSON.stringify(response);
});

app.use(router.routes());
// app.use(router.allowedMethods());

export default app;

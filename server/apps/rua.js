// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';

// Models
import Models from '@/mongodb/Models';

const app = new Koa();
const router = new KoaRouter();

// Create new file
router.get('/newfile', async (ctx) => {
  if (!ctx.isAuthenticated()) {
    ctx.status = 403;
    ctx.body = 'You have to authenticate first!';
    return;
  }

  const file = new Models.File({
    owner: ctx.state.user._id,
    filename: 'whatever.bin',
  });

  try {
    await file.save();
  } catch (e) {
    ctx.status = 500;
    ctx.body = 'Something happened :(';
    return;
  }
  ctx.redirect(`uploadform/${file._id}`);
});

router.get('/uploadform/:id', (ctx) => {
  ctx.body = `
<!doctype html>
<html>
<head>
  <title>Upload</title>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script>
    function upload() {
      const form = new FormData();
      const file = document.getElementById('file').files[0];
      form.append('file', file);
      console.log(axios.put('/file/upload/${ctx.params.id}', form));
    }
  </script>
</head>
<body>
  <h1>Upload form</h1>
  <p>View source to see what's going on</p>
  <p>Uploading to file slot ${ctx.params.id}</p>
  <input id="file" type="file">
  <button onclick="upload()">Upload</button>
</body>
</html>
`;
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;

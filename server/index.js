const dotenv = require('dotenv');

dotenv.config();
const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const gameController = require('./controller.js');

const app = new Koa();
const router = new Router();

const serverPort = process.env.SERVER_PORT || 3001;
const serverAddress = `${
  process.env.SERVER_PATH || 'http://localhost'
}:${serverPort}`;

const clientPort = process.env.CLIENT_PORT || 3000;
const origin = `${
  process.env.CLIENT_ADDRESS || 'http://localhost'
}:${clientPort}`;

app.use(
  cors({
    origin,
  }),
);

app.use(bodyParser());

router.post(`/${process.env.POST_PATH || 'game'}`, gameController.postOne);

app.use(router.routes()).use(router.allowedMethods());

app.listen(serverPort, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 server listening at ${serverAddress}`);
});

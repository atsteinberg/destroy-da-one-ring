'use strict';

const dotenv = require('dotenv');
dotenv.config();
const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const gameController = require ('./controller.js');

const app = new Koa();
const router = new Router();

const serverPort = process.env.SERVER_PORT || 3001;
const serverAddress = `${process.env.SERVER_PATH || 'http://localhost'}:${serverPort}`;

app.use(cors({

}))

app.use(bodyParser());

router.post(`/${process.env.POST_PATH || 'game'}`, gameController.postOne);

app.use(router.routes()).use(router.allowedMethods());


app.listen(serverPort, () => {
  console.log(`🚀 server listening at ${serverAddress}`)
})

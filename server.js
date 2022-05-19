import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import routes from './routes/sms_routes.js';
import cors from '@koa/cors';
import dotenv from 'dotenv'

dotenv.config();
const port = process.env.PORT;
const app = new Koa();
const router =new Router({prefix:"/api"});


app.use(bodyParser());
app.use(cors());
routes(router);
app.use(router.routes()).use(router.allowedMethods());



app.listen(port, () => { console.log(`server started - listening on port ${port}`)})

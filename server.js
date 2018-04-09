const Koa = require('koa');
const webpush = require('web-push');
const app = new Koa();
const serve = require('koa-static');
const xtpl = require('koa-xtpl');
const path = require('path');
const Router = require('koa-router');

const random = Math.random();

const port = 5678;



let fcmAPIKey = 'AIzaSyC_UiSUEz-2lkbHN70G8C8rr_C8kIUYgb0'


//VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();
console.log(vapidKeys);

let publicKey = vapidKeys.publicKey;

let privateKey = vapidKeys.privateKey;

// let privateKey = "Wo8g-2YBCkDhMRPsvoxxxx";

webpush.setVapidDetails(
  'mailto:382850581@qq.com',
  publicKey,
  privateKey
);


app.use(xtpl({
  root: path.join(__dirname, 'views'),
  extname: 'xtpl',
  commands: {}
}));

var router = new Router();

router.get('/', async (ctx, next) => {
  // ctx.router available
  await ctx.render('index', { publicKey,random})
});

//临时保存用户subscription
let store = {};


router.get('/addSubscription', async(ctx,next)=>{

  console.log(ctx);

  ctx.body = JSON.stringify({success:true});
});

app
  .use(router.routes())
  .use(router.allowedMethods());




app.use(serve('.'));

// 从数据库取出用户的subsciption
// const pushSubscription = {
//   "endpoint": "https://fcm.googleapis.com/fcm/send/ci3-kIulf9A:APA91bEaQfDU8zuLSKpjzLfQ8121pNf3Rq7pjomSu4Vg-nMwLGfJSvkOUsJNCyYCOTZgmHDTu9I1xvI-dMVLZm1EgmEH0vDA7QFLjPKShG86W2zwX0IbtBPHEDLO0WgQ8OIhZ6yTnu-S",
//   "expirationTime": null,
//   "keys": {
//     "p256dh": "BAdAo6ldzRT5oCN8stqYRemoihPGOEJjrUDL6y8zhdA_swao_q-HlY_69mzIVobWX2MH02TzmtRWj_VeWUFMnXQ=",
//     "auth": "SS1PBnGwfMXjpJEfnoUIeQ=="
//   }
// };
//
// // push的数据
// const payload = {
//   title: '一篇新的文章',
//   body: '点开看看吧',
//   icon: 'https://gw.alicdn.com/tfs/TB11pN5dH9YBuNjy0FgXXcxcXXa-64-64.png',
//   data: {url: "https://www.taobao.com"}
// };
//
// webpush.sendNotification(pushSubscription, JSON.stringify(payload));


app.listen(port);

console.log('server start at port:',port);
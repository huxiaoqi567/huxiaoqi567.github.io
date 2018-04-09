var self = this;

// 安装阶段跳过等待，直接进入 active
// self.addEventListener('install', function (event) {
//   event.waitUntil(self.skipWaiting());
// });


const VERSION = 'lazada-cache-v7';


self.addEventListener('install', function (event) {
  console.error('install')
  event.waitUntil(
    caches.open(VERSION).then(function (cache) {
      console.error('cache:',cache)
      return cache.addAll([
        '/',
        '/index.html',
        'https://unpkg.com/web-rax-framework@0.5.4/dist/framework.web.js',
        '/build/pages/index/index.bundle.js'
      ])
    })
  );
});


self.addEventListener('activate', function(event) {
  //event.waitUntil(self.clients.claim());
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // 如果当前版本和缓存版本不一致
          if (cacheName !== VERSION) {
            console.error('delete cache:',cacheName)
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.error('fetch :',event.request)
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

//接收webpush
// this.addEventListener('push', function(event) {
//   console.log('[Service Worker] Push Received.');
//   console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
//
//   let notificationData = event.data.json();
//   const title = notificationData.title;
//   // 可以发个消息通知页面
//   //util.postMessage(notificationData);
//   // 弹消息框
//   event.waitUntil(self.registration.showNotification(title, notificationData));
// });


//点击push信息
// this.addEventListener('notificationclick', function(event) {
//   console.log('[Service Worker] Notification click Received.');
//
//   let notification = event.notification;
//   notification.close();
//   event.waitUntil(
//     clients.openWindow(notification.data.url)
//   );
// });

// this.addEventListener('fetch', function (event) {
//   console.log('*****')
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       // 来来来，代理可以搞一些代理的事情
//
//       // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
//       if (response) {
//         return response;
//       }
//
//       // 如果 service worker 没有返回，那就得直接请求真实远程服务
//       var request = event.request.clone(); // 把原始请求拷过来
//       return fetch(request).then(function (httpRes) {
//
//         // http请求的返回已被抓到，可以处置了。
//
//         // 请求失败了，直接返回失败的结果就好了。。
//         if (!httpRes || httpRes.status !== 200) {
//           return httpRes;
//         }
//
//         // 请求成功的话，将请求缓存起来。
//         var responseClone = httpRes.clone();
//         caches.open('my-test-cache-v1').then(function (cache) {
//           cache.put(event.request, responseClone);
//         });
//
//         return httpRes;
//       });
//     })
//   );
// });
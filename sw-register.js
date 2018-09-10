
alert('PushManager' in window)

function registerServiceWorker() {

  return new Promise((resolve) => {
    if ('serviceWorker' in navigator) {
      var version = '9';
      console.error('regist version:', version)
      navigator.serviceWorker.register('sw.js?v=' + version)
        .then(function (registration) {
          // 注册成功
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
          resolve(registration)
        })
        .catch(function (err) {
          // 注册失败:(
          console.log('ServiceWorker registration failed: ', err);
        });
    }

  })
}


let promiseChain = new Promise((resolve, reject) => {

  const permissionPromise = Notification.requestPermission(result => {
    resolve(result);
  });

  if (permissionPromise) {
    permissionPromise.then(resolve);
  }
})
  .then(result => {
    console.error('result:',result)
    if (result === 'granted') {
      execute();
    }
    else {
      console.log('no permission');
    }
  });


function execute() {
  registerServiceWorker().then(registration => {
    if('PushManager' in window) {
      registration.showNotification('Hello World!');
    }
  });
}
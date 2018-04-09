if ('serviceWorker' in navigator) {

  // window.addEventListener('load', function () {
    console.error('regist')
    navigator.serviceWorker.register('sw.js?v=7')
      .then(function (registration) {
        // 注册成功
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(function (err) {

        // 注册失败:(
        console.log('ServiceWorker registration failed: ', err);
      });
  // });
}
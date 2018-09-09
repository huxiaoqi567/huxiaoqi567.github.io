if ('serviceWorker' in navigator) {

  var version = '8';

  // window.addEventListener('load', function () {
    console.error('regist version:',version)
    navigator.serviceWorker.register('sw.js?v='+version)
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
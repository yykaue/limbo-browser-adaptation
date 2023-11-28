/**
 *Created by limbo <yykaue@qq.com> on 2023/11/14.
 */
 const verify = () => {
  console.log('verify queueMicrotask')
  if (typeof window.queueMicrotask === 'function') return;
  console.log('不支持queueMicrotask')
  
  function customQueueMicrotask(callback) {
    Promise.resolve().then(callback).catch(err => setTimeout(() => { throw err; }));
  }
  window.queueMicrotask = customQueueMicrotask
}

export default verify

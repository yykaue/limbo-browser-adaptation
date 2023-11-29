const verify = () => {
  if (typeof window.queueMicrotask === 'function') return;
  
  function customQueueMicrotask(callback) {
    Promise.resolve().then(callback).catch(err => setTimeout(() => { throw err; }));
  }
  window.queueMicrotask = customQueueMicrotask
}

export default verify

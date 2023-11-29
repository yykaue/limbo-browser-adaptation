const verify = () => {
  if (typeof window.globalThis === 'object') return;
  var getGlobal = function() {
      if (typeof self !== 'undefined') { return self; }
      if (typeof window !== 'undefined') { return window; }
      if (typeof global !== 'undefined') { return global; }
      throw new Error('unable to locate global object');
  };
  Object.defineProperty(Object.prototype, '__globalThis__', {
      get: function() {
          return getGlobal();
      },
      configurable: true
  });
  window.globalThis = __globalThis__;
  delete Object.prototype.__globalThis__;
}

export default verify

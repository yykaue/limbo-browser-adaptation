/**
 *Created by limbo <yykaue@qq.com> on 2023/11/14.
 */
const verify = () => {
  console.log('verify globalThis')
  if (typeof window.globalThis === 'object') return;
  console.log('不支持globalThis')
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

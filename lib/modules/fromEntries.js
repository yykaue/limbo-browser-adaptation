/**
 *Created by miaoying <yykaue@qq.com> on 2023/11/20.
 */
 const verify = () => {
  console.log('verify fromEntries')
  if (typeof Object.fromEntries === 'function') {
    return
  }
  console.log('不支持fromEntries')
  // eslint-disable-next-line no-extend-native
  
  Object.fromEntries = function(entries) {
      if (!entries || !Array.isArray(entries)) {
          throw new Error('Object.fromEntries() requires a single iterable argument');
      }

      const result = {};
      for (const [key, value] of entries) {
          result[key] = value;
      }
      return result;
  };
  
}

export default verify

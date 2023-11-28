/**
 *Created by miaoying <yykaue@qq.com> on 2023/11/20.
 */
 const verify = () => {
  console.log('verify flatMap')
  if (Array.prototype.flatMap) {
    return
  }
  console.log('不支持flatMap')
  // eslint-disable-next-line no-extend-native
  Array.prototype.flatMap = function(callback, thisArg) {
    return this.map(callback, thisArg).reduce((acc, val) => acc.concat(val), []);
  };
}

export default verify

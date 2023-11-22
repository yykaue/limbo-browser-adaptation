/**
 *Created by limbo <yykaue@qq.com> on 2023/11/14.
 */
const verify = () => {
  console.log('verify Values')
  if (!Array.prototype.values) {
    console.log('不支持Values')
    Array.prototype.values = function() {
      var array = this;
      var currentIndex = 0;
      var length = array.length;
  
      return {
        next: function() {
          if (currentIndex < length) {
            return { value: array[currentIndex++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    };
  }
}

export default verify

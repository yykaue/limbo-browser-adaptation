/**
 *Created by limbo <yykaue@qq.com> on 2023/11/14.
 */
 const verify = () => {
  if (Array.prototype.values) {
    return array.values();
  }

  let index = 0;
  return {
    next: function() {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]: function() { return this; }
  };
}

export default verify
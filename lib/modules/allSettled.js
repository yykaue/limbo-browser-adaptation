 const verify = () => {
  if (typeof Promise.allSettled !== 'function') {
    return
  }

  if (typeof Promise.allSettled !== 'function') {
    Promise.allSettled = function (promises) {
      return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
          return reject(new TypeError('arguments must be an array'));
        }
  
        let remaining = promises.length;
        const results = new Array(remaining);
  
        if (remaining === 0) {
          resolve(results);
          return;
        }
  
        const resolver = (index) => (result) => {
          results[index] = result;
          if (--remaining === 0) {
            resolve(results);
          }
        };
  
        promises.forEach((promise, index) => {
          Promise.resolve(promise)
            .then(value => {
              resolver(index)({ status: 'fulfilled', value });
            }, reason => {
              resolver(index)({ status: 'rejected', reason });
            });
        });
      });
    };
  }
  
}

export default verify

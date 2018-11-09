var read = require('read');

function readPromise(options) {
  return new Promise(function (resolve, reject) {
    if (typeof options === 'string') {
      options = {
        prompt: options
      };
    }
    read(options, function (error, result, isDefault) {
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
  });
}

module.exports = readPromise;

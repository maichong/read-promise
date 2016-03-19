/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-19
 * @author Liang <liang@maichong.it>
 */

'use strict';

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

module.exports = readPromise.default = readPromise;

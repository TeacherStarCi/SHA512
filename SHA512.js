"use strict";
exports.__esModule = true;
var sha512_crypt_ts_1 = require("sha512-crypt-ts");
/**
 Crypt with sha512.any(input:string ,custom_alphabet:string) method
*/
console.log(sha512_crypt_ts_1.sha512.any("nguyenvantucuong", "ABCDE"));
console.log(sha512_crypt_ts_1.sha512.any("nguyenvantucuong", "ABCDE"));
/**
  Both logs return the same result
 */
console.log(sha512_crypt_ts_1.sha512.crypt("cuong", "nguyenvantu"));

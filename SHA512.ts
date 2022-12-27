import { sha512 } from 'sha512-crypt-ts';

 /**
  Crypt with sha512.any(input:string ,custom_alphabet:string) method
 */
console.log(sha512.any("nguyenvantucuong", "ABCDE"));
console.log(sha512.any("nguyenvantucuong", "ABCDE"));
/**
  Both logs return the same result:
  ACCDCCDBDCCAEAABACBBEEBCDCBDBDEDDECEEDDDC
  DDDBCBCEBBBAEDECCECBCBEEAECACDCAEBBBACCDA
  CDBBAEDCBBEBCCCAEEDCBCEEEADECAADAAACBABAB
  CCDAEECEAADBAEAAEDDDAADEEEDAEAEABBBCDDCCC
  ECDDDEECDDECABDDCECEBDECCEDBADDDBEBAEADAE
  DEDBDBBCDBBACBAA (512 bits)
 */

console.log(sha512.crypt("cuong","nguyenvantu"));
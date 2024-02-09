/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let index = digits.length - 1;
   while(index !== 0 && digits[index]===9){
       digits[index] = 0;
       index--;
   } 
   if(digits.length === 1 && digits[index] === 9){
       digits = [1,0]
   } else if(index === 0 && digits[index] === 9){
       digits[index] = 0
       digits = [1,...digits]
   } else {
        digits[index] = digits[index] + 1;
   }
   return digits;
};
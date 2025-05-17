/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let numArray = x.toString().split('');
   let res = numArray.reverse().join('');
   
    let final = parseInt(res);
    if(numArray.length > 0 && numArray[numArray.length - 1]==='-'){
        final = '-'+final
    }
    final =  parseInt(final)

    if(final > Math.pow(2,31) - 1 || final < -Math.pow(2,31)){
        return 0
    } else {
        return final
    }
};
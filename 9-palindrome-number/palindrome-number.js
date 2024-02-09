/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let temp = (String(x).split("").reverse().join(""))
    return temp == String(x)
};
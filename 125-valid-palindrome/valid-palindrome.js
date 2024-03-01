/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9 ]/g, '').split(" ").join("").toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while(i<j){
        if(s[i]===s[j]){
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
};
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {

    if(s.length === 0){
        return 0;
    }

    let leftCount = 0, rightCount = 0, maxlen = 0;

    for(let char of s){
        if(char === '(') leftCount++;
        else rightCount++

        if(leftCount === rightCount){
            maxlen = Math.max(maxlen,2*rightCount)
        } else if(rightCount > leftCount){
            leftCount = rightCount = 0;
        }
    }

    leftCount = rightCount = 0;

    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] === '(') leftCount++;
        else rightCount++;

        if(leftCount === rightCount){
            maxlen = Math.max(maxlen,2*leftCount)
        } else if(leftCount > rightCount){
            leftCount = rightCount = 0;
        }
    }

    return maxlen
};
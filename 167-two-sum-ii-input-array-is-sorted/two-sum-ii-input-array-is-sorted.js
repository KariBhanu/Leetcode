/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    let res = [];
    while(i<j){
        if(numbers[i]+numbers[j] === target){
            res.push(i+1,j+1);
            i++;
            j--;
        } else if(numbers[i]+numbers[j] > target){
            j--;
        } else if(numbers[i]+numbers[j] < target){
            i++
        }
    }
    return res;
};
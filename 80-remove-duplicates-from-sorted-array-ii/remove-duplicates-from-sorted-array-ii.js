/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0;j=2;
    let count = 0 ;
    while(j<nums.length){
        if(nums[i]===nums[j]){
            nums.splice(j,1)
            continue;
        }
        i++;
        j++;
    }

    return nums.length
};
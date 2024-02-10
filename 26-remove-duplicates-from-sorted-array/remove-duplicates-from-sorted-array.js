/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let res = [...new Set(nums)]
    res.forEach((v,i)=>{
        nums[i] = v;
    });
    return res.length;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target > nums[nums.length - 1]){
        return nums.length
    }
    if(nums.indexOf(target) !== -1){
        return nums.indexOf(target)
    } else {
        return searchInsert(nums,target+1)
    }
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    //k will be the middle 
    k %= nums.length;

    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);

    
    // Reverse the first k elements
    reverse(nums, 0, k - 1);

    
    // Reverse the rest of the elements
    reverse(nums, k, nums.length - 1);

};


function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = [...nums1,...nums2].sort((a,b)=>a-b) 
    if(nums1.length%2 === 0){
        let i = nums1.length / 2;
        sum = nums1[i-1] + nums1[i] 
        return sum/2;
    } else {
        let i = Math.floor(nums1.length / 2);
        return nums1[i]
    }
};
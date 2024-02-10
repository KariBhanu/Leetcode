/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let temp = [...nums1.slice(0,m),...nums2];
    temp = temp.sort((a,b)=>a-b)
    for(let i = 0;i<temp.length;i++){
        nums1[i] = temp[i]
    }
};
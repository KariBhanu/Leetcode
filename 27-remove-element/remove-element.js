/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let res = [];
    nums.forEach(v => {
        if(v !== val){
            res.push(v)
        }
    });
    res.forEach((v,i) => {
        nums[i] = v;
    })

    return res.length;
};
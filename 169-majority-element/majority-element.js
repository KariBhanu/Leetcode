/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = {};
    let max = 0;
    let maxKey;

    nums.forEach(v=>{
        if(res[v]!=undefined){
            res[v]++;
        } else {
            res[v]=1
        }
        if(max < res[v]){
            max = res[v];
            maxKey = v;
            console.log(v)
        }
    })

    return maxKey;
};
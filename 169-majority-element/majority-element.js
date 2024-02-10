/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = {};
    let max = 0;

    nums.forEach(v=>{
        if(res[v]!=undefined){
            res[v]++;
        } else {
            res[v]=1
        }
        if(max < res[v]){
            max = res[v];
        }
    })
    
    console.log(max)
    return Object.keys(res).find(key =>
        res[key] === max);
    
};
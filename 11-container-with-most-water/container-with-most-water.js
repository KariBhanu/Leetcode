/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;
    let i = 0,j=height.length - 1;
    while(i<j){
        if(height[i]<height[j]){
            let area = height[i] * (j-i);
            if(area > res){
                res = area
            }
            i++;
        } else if(height[i]>=height[j]){
            let area = height[j] * (j-i);
            if(area > res){
                res = area
            }
            j--;
        }
    }
    return res
};
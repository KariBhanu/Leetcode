/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1 ;
    let maxArealength = 0;
    // for(let i = 0;i<height.length;i++){
    //     for(let j = height.length-1;j>=0;j--){
    //         let bredth = j - i; // 8 - 0 = 8 // 8 - 1 = 7
    //         if(i>j){
    //             continue;
    //         }
    //         let area = 0;
    //         if(height[i]<=height[j]){
    //             area = height[i] * bredth;
    //         } else if(height[i]>height[j]){
    //             area = height[j] * bredth;
    //         }
            
    //         if(area > maxArealength){
    //             maxArealength = area
    //         }
    //     }
    // }
    while(i<j){
        let area = 0;
        if(height[i] <= height[j]){
            area = height[i] * (j-i);
            i++;
        } else if(height[i] > height[j]){
            area = height[j] * (j-i);
            j--;
        }
        if(area > maxArealength){
            maxArealength = area
        }
    }
    return maxArealength;
};
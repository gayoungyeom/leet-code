/**
 * @param {number[]} nums
 * @return {number}
 */

//O(n)
var dominantIndex = function(nums) {
    const n = nums.length;

    let max = {num: nums[0], index: 0};
    for(let i = 1; i < n; i++){
        if(nums[i] > max.num){
            max = {num: nums[i], index: i};
        }
    }    

    let flag = true;
    for(let i = 0 ; i < n; i++){
        if(max.index === i) continue;

        if(nums[i] * 2 > max.num){
            flag = false;
        }
    }

    return flag ? max.index : -1;
};
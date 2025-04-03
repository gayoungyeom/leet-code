/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// O(n)
var moveZeroes = function(nums) {
    let pt = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[pt] = nums[i];
            pt++;
        }
    }
    
    for(let i = pt; i < nums.length; i++){
        nums[i] = 0;
    }
    
    return nums;
};
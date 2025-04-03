/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n)
var sortArrayByParity = function(nums) {
    let pt = 0;
    
    for(let i = 0; i < nums.length; i++){
        if((nums[i] & 1) === 0){
            [nums[pt], nums[i]] = [nums[i], nums[pt]]
            pt++;
        }
    }
    
    return nums;
};
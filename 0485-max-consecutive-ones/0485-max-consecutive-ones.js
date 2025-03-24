/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n)
var findMaxConsecutiveOnes = function(nums) {
    let result = nums[0];
    let cnt = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === 1) cnt++;
        else cnt = 0;
        
        result = Math.max(result, cnt);
    }
    
    return result;
};
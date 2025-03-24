/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n)
var findNumbers = function(nums) {
    let cnt = 0;
    
    for(let i = 0; i < nums.length; i++){
        if((String(nums[i]).length & 1) === 0) cnt++; 
    }
    
    return cnt;
};
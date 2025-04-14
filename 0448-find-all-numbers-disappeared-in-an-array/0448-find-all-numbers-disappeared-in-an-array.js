/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n): 음수 처리로 방문 체크
var findDisappearedNumbers = function(nums) {
    for(let i = 0; i < nums.length; i++){
        const idx = Math.abs(nums[i]) - 1;
   
        if(nums[idx] < 0) continue;
        nums[idx] = -nums[idx];
    }

    const result = [];
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) result.push(i + 1);
    }
    
    return result;
};
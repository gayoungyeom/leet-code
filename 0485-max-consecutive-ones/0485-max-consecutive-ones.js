/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n)
// max계산 로직을 if(nums[i] === 1)안으로 옮기면 불필요한 계산을 줄일 수 있음.
var findMaxConsecutiveOnes = function(nums) {
    let result = 0;
    let cnt = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            cnt++;
            result = Math.max(result, cnt);
        } else{
            cnt = 0;
        }
    }
    
    return result;
};
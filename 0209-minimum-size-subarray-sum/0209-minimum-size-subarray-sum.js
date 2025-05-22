/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let result = Infinity;
    let sum = nums[0]; //현재까지 합
    let [left, right] = [0, 0];

    while(left < nums.length && right < nums.length){
        if(sum < target){
            right++;
            sum += nums[right];
        } else{
            result = Math.min(result, right - left + 1); //더 작은 길이로 업데이트

            sum -= nums[left];
            left++;
        }
    }

    return result === Infinity ? 0 : result;
};
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 // O(n)
var removeElement = function(nums, val) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left < right){
        if(nums[left] !== val) left++;
        if(nums[right] === val) right--;

        //left > right일 때 swap 안되도록 조건 추가
        if(left < right && nums[left] === val && nums[right] !== val){
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++;
            right--;
        }
    }

    const valIdx = nums.findIndex(num => num === val);
    const isVal = valIdx !== -1;

    return isVal ? valIdx : nums.length; //nums에 val이 없는 경우도 고려하자
};
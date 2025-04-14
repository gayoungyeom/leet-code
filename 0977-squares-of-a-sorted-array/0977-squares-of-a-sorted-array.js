/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(nlogn)
var sortedSquares = function(nums) {
    return nums.map(num => num * num).sort((a, b) => a - b);
};

// O(n) two pointer: 배열하나 만들고 뒤에서부터 큰 수를 채우기
var sortedSquares = function(nums) {
    const result = [...Array(nums.length).fill(0)];

    let left = 0;
    let right = nums.length - 1;
    let i = right;

    while(left <= right){
        const leftNum = nums[left] * nums[left];
        const rightNum = nums[right] * nums[right];

        result[i] = Math.max(rightNum, leftNum);

        if(leftNum <= rightNum) right--;
        else left++;

        i--;
    }

    return result;
};
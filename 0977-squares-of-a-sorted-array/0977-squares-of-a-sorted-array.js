/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(nlogn)
var sortedSquares = function(nums) {
    return nums.map(num => num * num).sort((a, b) => a - b);
};
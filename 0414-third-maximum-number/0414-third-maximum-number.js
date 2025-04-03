/**
 * @param {number[]} nums
 * @return {number}
 */

// O(nlogn)
var thirdMax = function(nums) {
    const set = new Set(nums);
    const uniqueSortedArr = [...set.values()].sort((a, b) => b - a);
    
    return uniqueSortedArr.length < 3 ? uniqueSortedArr[0] : uniqueSortedArr[2];
};
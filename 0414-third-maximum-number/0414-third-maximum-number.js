/**
 * @param {number[]} nums
 * @return {number}
 */

// O(nlogn)
// var thirdMax = function(nums) {
//     const set = new Set(nums);
//     const uniqueSortedArr = [...set.values()].sort((a, b) => b - a);
    
//     return uniqueSortedArr.length < 3 ? uniqueSortedArr[0] : uniqueSortedArr[2];
// };

// O(n)
var thirdMax = function(nums) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for(let i = 0; i < nums.length; i++){
        //unique하지 않은 경우 pass
        if(nums[i] === first || nums[i] === second || nums[i] === third) continue;

        //max값으로 업데이트
        if(nums[i] > first){
            [first, second, third] = [nums[i], first, second]
        } else if(nums[i] > second){
            [second, third] = [nums[i], second]
        } else if(nums[i] > third){
            third = nums[i]
        }
    }

    return third === -Infinity ? first : third;
};

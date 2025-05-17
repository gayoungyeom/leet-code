/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//O(n)
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    let result;

    while(left < right){
        const sum = numbers[left] + numbers[right];

        if(sum === target){
            result = [left + 1, right + 1];
            break;
        }

        if(sum < target) left++;
        else right--;
    }

    return result;
};
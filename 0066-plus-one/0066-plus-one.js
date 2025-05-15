/**
 * @param {number[]} digits
 * @return {number[]}
 */

//Javascript Number 범위: -9007199254740991 ~ 9007199254740991 (16자리)
var plusOne = function(digits) {
    return (BigInt(digits.join('')) + BigInt(1)).toString().split("").map(Number);
};
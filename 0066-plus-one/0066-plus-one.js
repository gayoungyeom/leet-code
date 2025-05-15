/**
 * @param {number[]} digits
 * @return {number[]}
 */

//Javascript Number 범위: -9007199254740991 ~ 9007199254740991 (16자리)
var plusOne = function(digits) {
    return (BigInt(digits.join('')) + BigInt(1)).toString().split("").map(Number);
};

//마지막 숫자부터 탐색, 중간에 return되지 않으면 앞에 1 추가
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--){
        if(digits[i] < 9){
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }

    digits.unshift(1); //마지막 탐색 숫자가 9

    return digits;
};

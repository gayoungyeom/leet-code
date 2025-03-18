/**
 * @param {number} num
 * @return {number}
 */

// O(logN)
// 주의: ((num & 1) === 0)과 (num & 1 === 0)은 다르다. -> 비교 연산이 비트 연산보다 우선순위가 높다.
var numberOfSteps = function(num) {
    let step = 0;

    while(num !== 0) {
        if((num & 1) === 0) num >>= 1;
        else num -= 1;
        
        step++;
    }

    return step;
};

 // O(logN): 2로 나누니까
var numberOfSteps = function(num) {
    let step = 0;

    while(num !== 0) {
        if(num % 2 === 0) num /= 2;
        else num -= 1;
        
        step++;
    }

    return step;
};
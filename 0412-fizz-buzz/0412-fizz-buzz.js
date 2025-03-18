/**
 * @param {number} n
 * @return {string[]}
 */

// O(n)
// 3과 5를 연속으로 보면, 15로 나누어 떨어질 때를 분기처리할 필요가 없다.
var fizzBuzz = function(n) {
    const result = [];

    for(let i = 1; i <= n; i++){
        let cur = '';
        
        if(i % 3 === 0) cur += "Fizz";
        if(i % 5 === 0) cur += "Buzz";

        result.push(cur || String(i));
    }

    return result;
};
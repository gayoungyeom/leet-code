/**
 * @param {number} n
 * @return {string[]}
 */

//  O(n)
var fizzBuzz = function(n) {
    const result = [];

    for(let i = 0; i < n; i++){
        if((i + 1) % 15 === 0) result.push("FizzBuzz");
        else if((i + 1) % 3 === 0) result.push("Fizz");
        else if((i + 1) % 5 === 0) result.push("Buzz");
        else result.push(String(i + 1));
    }

    return result;
};
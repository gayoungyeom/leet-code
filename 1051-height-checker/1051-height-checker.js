/**
 * @param {number[]} heights
 * @return {number}
 */

// O(nlogn)
var heightChecker = function(heights) {
    const origin = [...heights]
    const expected = heights.sort((a, b) => a - b);
    
    let diff = 0;
    
    for(let i = 0; i < origin.length; i++){
        if(origin[i] !== expected[i]) diff++;
    }

    return diff;
};
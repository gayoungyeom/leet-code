/**
 * @param {number[]} arr
 * @return {number[]}
 */

// O(n)
var replaceElements = function(arr) {
    const n = arr.length;
    
    let max = arr[n - 1];
    arr[n - 1] = -1;
    
    for(let i = n - 2; i >= 0; i--){
        let cur = arr[i];
        arr[i] = max;
        
        max = Math.max(max, cur);
    }
    
    return arr;
};

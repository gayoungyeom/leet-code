/**
 * @param {number[]} arr
 * @return {boolean}
 */

// O(n): set을 활용
var checkIfExist = function(arr) {
    const set = new Set(arr);

    for(let i = 0; i < arr.length; i++){
        if(set.has(arr[i] * 2) || ((arr[i] & 1) === 0) && set.has(arr[i] / 2)){
            return true;
        }
    }
    
    return false;
};

// O(n^2)
var checkIfExist = function(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if((arr[i] === 2 * arr[j]) || (arr[j] === 2 * arr[i])){
                return true;
            }
        }
    }
    
    return false;
};
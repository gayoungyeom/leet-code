/**
 * @param {number[]} arr
 * @return {boolean}
 */

// O(n): set(hash talbe)을 활용
// cf. 초기 set에 arr을 모두 넣고 비교하면 자기 자신을 확인하는 경우가 생긴다.
var checkIfExist = function(arr) {
    const set = new Set();

    for(let i = 0; i < arr.length; i++){
        const num = arr[i];

        if(set.has(num * 2) || ((num & 1) === 0) && set.has(num / 2)){
            return true;
        }
        set.add(num); //지금까지 조건을 만족하는 숫자가 없는 경우 set에 추가
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
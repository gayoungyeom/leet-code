/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// O(n)
// var canConstruct = function(ransomNote, magazine) {
//     const map = new Map();
    
//     for(const m of magazine){
//         map.set(m, map.has(m) ? map.get(m) + 1 : 1);
//     }

//     for(const r of ransomNote){
//         if(map.has(r) && map.get(r) !== 0) map.set(r, map.get(r) - 1);
//         else return false;
//     }

//     return true;
// };


// magazine의 값을 ransomNote에서 제거하는 방법. 
// magazine을 다 보았을 때 ransomNote가 비어있다면 true 반환
var canConstruct = function(ransomNote, magazine) {
    for(const m of magazine){
        ransomNote = ransomNote.replace(m, '');
    }

    return !ransomNote

    return true;
};
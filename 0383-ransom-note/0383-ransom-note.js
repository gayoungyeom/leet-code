/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// O(n)
var canConstruct = function(ransomNote, magazine) {
    return magazine.includes(ransomNote);
};
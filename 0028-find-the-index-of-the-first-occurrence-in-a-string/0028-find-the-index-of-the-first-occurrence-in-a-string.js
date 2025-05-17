/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//substring 활용
var strStr = function(haystack, needle) {
    const n = haystack.length;
    const m = needle.length;
    
    if(n < m) return -1;
    
    for(let i = 0; i <= n - m; i++){
        if(haystack.substring(i, m) === needle) return i;
    }
    
    return -1;
}


//indexOf 활용
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
}

//O(n*n)
var strStr = function(haystack, needle) {
    haystack = haystack.split('');
    needle = needle.split('');

    const n = haystack.length;
    const m = needle.length;

    if(n < m) return -1;

    let result = -1;
    const matrix = Array.from(Array(n), () => Array(m).fill(false));

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(haystack[i] === needle[j]) matrix[i][j] = true;
        }
    }
    
    const startIndex = [];
    for(let i = 0; i < n; i++){
        if(matrix[i][0]) startIndex.push(i);
    }

    for(let i = 0; i < startIndex.length; i++){
        let start = startIndex[i];

        let flag = true;
        for(let j = 0; j < m; j++){
            if(start >= n || !matrix[start][j]){
                flag = false;
                break;
            }
            start++;
        }

        if(flag){
            result = startIndex[i];
            break;
        }
    }

    return result;
};

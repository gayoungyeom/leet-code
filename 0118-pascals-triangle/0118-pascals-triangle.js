/**
 * @param {number} numRows
 * @return {number[][]}
 */

//O(n)
var generate = function(numRows) {
    const result = [[1], [1, 1]];

    if(numRows < 3) return result.slice(0, numRows);

    for(let i = 2; i < numRows; i++){
        const rows = [];
        for(let j = 0; j <= i; j++){
            if(j === 0 || j === i) rows.push(1);
            else rows.push(result[i - 1][j - 1] + result[i - 1][j]);
        }
        result.push(rows);
    }

    return result;
};
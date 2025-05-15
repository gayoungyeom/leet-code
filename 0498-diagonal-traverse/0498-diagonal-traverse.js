/**
 * @param {number[][]} mat
 * @return {number[]}
 */

//O(m + n): (x,y)인덱스 합이 같으면 같은 대각선. 대각선 그룹에 모아서 인덱스가 짝수인 부분은 reverse
var findDiagonalOrder = function(mat) {
    const m = mat.length;
    const n = mat[0].length;

    const diagGroup = Array.from(Array(m + n), () => []);

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            diagGroup[i + j].push(mat[i][j]);
        }
    }

    const result = [];
    for(let i = 0; i < diagGroup.length; i++){
        if(i % 2 === 0) result.push(...diagGroup[i].reverse());
        else result.push(...diagGroup[i]);
    }

    return result;
};
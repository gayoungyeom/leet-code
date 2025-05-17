/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

//O(n * m)
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const VISITED = 101

var spiralOrder = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const result = [];
    let [x, y] = [0, 0];
    let dir = 0;

    let total = m * n;
    while(total--){
        result.push(matrix[x][y]);
        matrix[x][y] = VISITED;

        let nx = x + dx[dir];
        let ny = y + dy[dir];

        if(nx < 0 || nx >= m || ny < 0 || ny >= n || matrix[nx][ny] === VISITED){
            dir = (dir + 1) % 4; //방향 전환
            nx = x + dx[dir]; //전환된 방향으로 다음 x 업데이트
            ny = y + dy[dir]; //전환된 방향으로 다음 y 업데이트
        }
        
        x = nx;
        y = ny;
    }
    
    return result;
};

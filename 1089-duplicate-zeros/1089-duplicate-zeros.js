/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

// O(n*n)
var duplicateZeros = function(arr) {
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] === 0){
            for(let j = arr.length - 1; j > i; j--){
                arr[j] = arr[j - 1]; //오른쪽으로 한 칸씩 shift
            }
            i++;
        } 
    }
};

// O(n*n): splice 활용
var duplicateZeros = function(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            arr.splice(i, 0, 0);
            arr.pop();
            i++;
        } 
    }
};

// O(n): 0의 개수만큼 배열을 늘려서 뒤에서부터 처리 (덮어쓰기 문제를 해결)
// if(j < n)을 제한해야 arr 범위를 초과하지 않고 결과가 나옴.
var duplicateZeros = function(arr) {
    const n = arr.length;
    const zeroCnt = arr.filter(v => v === 0).length;

    let i = n - 1;
    let j = i + zeroCnt;

    while(i >= 0){
        if(arr[i] === 0){
            if(j < n) arr[j] = 0;
            j--;
        } 
        
        if(j < n) arr[j] = arr[i];
        j--;
        i--;
    }
}
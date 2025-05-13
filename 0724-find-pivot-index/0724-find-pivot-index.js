/**
 * @param {number[]} nums
 * @return {number}
 */

//O(n)
var pivotIndex = function(nums) {
    const n = nums.length;
    const sum = [...nums];
    
    for(let i = 1; i < n; i++){
        sum[i] = sum[i] + sum[i - 1]; //누적합
    }
    
    for(let i = 0; i < n; i++){
        const pivot = i;
        const left = pivot === 0 ? 0 : sum[pivot - 1];
        const right = sum[n - 1] - sum[pivot];
        
        if(left === right) return pivot;
    }
    
    return -1;
};
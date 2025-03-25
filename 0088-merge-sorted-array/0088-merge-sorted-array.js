/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// O(n + m): 뒤에서부터 채워서 덮어쓰기 방지
var merge = function(nums1, m, nums2, n) {
    let i = n + m - 1;
    
    let mi = m - 1;
    let ni = n - 1;
    
    while(i >= 0 && mi >= 0 && ni >= 0){
        if(nums1[mi] <= nums2[ni]){
            nums1[i] = nums2[ni];
            ni--;
        } else{
            nums1[i] = nums1[mi];
            mi--;
        }
        i--;
    }

    if(mi >= 0){
        for(let j = mi; j >= 0; j--){
            nums1[i] = nums1[j];
            i--;
        }
    }

    if(ni >= 0){
        for(let j = ni; j >= 0; j--){
            nums1[i] = nums2[j];
            i--;
        }
    }
};

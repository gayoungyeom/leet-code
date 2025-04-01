/**
 * @param {number[]} arr
 * @return {boolean}
 */

// O(n)
var validMountainArray = function(arr) {
    let peak = -1;
    
    //check increasing
    for(let i = 1; i < arr.length; i++){
        if(arr[i - 1] < arr[i]){
           peak = i; 
        } else{
            break;
        }
    }

    //only 내림차순 || only 오름차순
    if(peak === -1 || peak === arr.length - 1) return false;
    
    //check decreasing
    for(let i = peak; i < arr.length; i++){
        if(arr[i] <= arr[i + 1]){
            return false;
        }
    }
    
    return true;
};
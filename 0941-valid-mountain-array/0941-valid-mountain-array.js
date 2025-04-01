/**
 * @param {number[]} arr
 * @return {boolean}
 */

// O(n): 하나의 for loop로 처리(peak 존재 여부를 파악)
 var validMountainArray = function(arr) {
    if(arr.length < 3) return false;
    if(arr[0] >= arr[1]) return false;

    let isPeak = false;

    for(let i = 1; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]) isPeak = true;

        if(!isPeak && (arr[i] >= arr[i + 1])) return false; //increasing 중인데 조건 out
        if(isPeak && (arr[i] <= arr[i + 1])) return false; //decreasing 중인데 조건 out
    }

    return isPeak;
};

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
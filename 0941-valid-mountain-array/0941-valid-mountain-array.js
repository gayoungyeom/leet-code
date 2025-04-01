/**
 * @param {number[]} arr
 * @return {boolean}
 */

// O(n): two pointer
var validMountainArray = function(arr) {
    const n = arr.length;

    let i = 0;
    let j = n - 1;

    while(i < n - 1 && arr[i] < arr[i + 1]) i++;
    while(j > 0 && arr[j - 1] > arr[j]) j--;

    if(i !== j || i === n - 1 || j === 0) return false;
    return true;
};

// O(n): 하나의 for loop로 처리(peak 존재 여부를 파악) -> 성능 제일 좋음
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
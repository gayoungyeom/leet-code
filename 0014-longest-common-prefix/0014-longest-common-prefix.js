/**
 * @param {string[]} strs
 * @return {string}
 */

//O(n^3)
var longestCommonPrefix = function(strs) {
    let result = "";

    if(strs.length === 1) return strs[0]; 

    for(let i = strs[0].length; i > 0; i--){
        const prefix = strs[0].slice(0, i);

        let flag = true;
        for(let j = 1; j < strs.length; j++){
            if(!strs[j].startsWith(prefix)){
                flag = false;
                break;
            }
        }

        if(flag){
            result = prefix;
            break;
        }
    }

    return result;
};
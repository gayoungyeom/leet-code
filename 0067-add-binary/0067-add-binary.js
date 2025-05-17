/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */// 
var addBinary = function(a, b) {
    const sum = BigInt("0b" + a) + BigInt("0b" + b);
    // const sum = parseInt(a, 2) + parseInt(b, 2); 
    return sum.toString(2);
};
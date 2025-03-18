/**
 * @param {number[][]} accounts
 * @return {number}
 */

// n * m
var maximumWealth = function(accounts) {
    const wealth = accounts.map((account) => account.reduce((a, b) => a + b, 0));

    return Math.max(...wealth);
};
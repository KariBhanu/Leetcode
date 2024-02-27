/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
    let minPrice = Infinity;
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        if (prices[i] - minPrice > 0) {
            profit += prices[i] - minPrice;
            minPrice = prices[i];
        }
    }
    return profit;
};
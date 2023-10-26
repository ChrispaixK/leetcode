function maxProfit(prices) {
  if (prices.length === 0) {
      return 0; // No profit can be made with an empty array.
  }

  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
      // If the current price is higher than the previous day, add the profit.
      if (prices[i] > prices[i - 1]) {
          maxProfit += prices[i] - prices[i - 1];
      }
  }

  return maxProfit;
}

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [1, 2, 3, 4, 5];
const prices3 = [7, 6, 4, 3, 1];

console.log(maxProfit(prices1)); // Output: 7
console.log(maxProfit(prices2)); // Output: 4
console.log(maxProfit(prices3)); // Output: 0

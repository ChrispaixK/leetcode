## Algorithm: Finding Maximum Profit from Buying and Selling Stocks

**Input**: An array `prices` representing the stock prices for each day.

**Output**: The maximum profit that can be achieved by buying and selling stocks.

1. Start the function `maxProfit(prices)`:
   - If the length of the `prices` array is less than or equal to 1, return 0, as you need at least 2 days to make a profit.

2. Initialize a variable `minPrice` to the first day's price (`prices[0]`).
3. Initialize a variable `maxProfit` to 0.

4. For each day, starting from the second day (index 1) to the last day:
   - Calculate the minimum between the current `minPrice` and the price of the current day, and update `minPrice` with the result.

7. Calculate the potential profit if you were to sell on the current day's price:
   - Potential profit = price of the current day - `minPrice`.

9. Update `maxProfit` by taking the maximum between the current `maxProfit` and the potential profit.

10. After the loop is finished, return `maxProfit` as the result.

### Example usage:
```javascript
const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [1, 2, 3, 4, 5];
const prices3 = [7, 6, 4, 3, 1];

console.log(maxProfit(prices1)); // Output: 7
console.log(maxProfit(prices2)); // Output: 4
console.log(maxProfit(prices3)); // Output: 0

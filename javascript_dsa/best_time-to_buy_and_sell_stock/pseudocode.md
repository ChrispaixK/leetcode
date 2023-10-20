1. Start the function maxProfit(prices):
2.   If the length of the prices array is less than or equal to 1, return 0, as you need at least 2 days to make a profit.
3.   Initialize a variable minPrice to the first day's price (prices[0]).
4.   Initialize a variable maxProfit to 0.
5.   For each day, starting from the second day (index 1) to the last day:
6.     Calculate the minimum between the current minPrice and the price of the current day and update minPrice with the result.
7.     Calculate the potential profit if you were to sell on the current day's price:
8.     Potential profit = price of the current day - minPrice.
9.     Update maxProfit by taking the maximum between the current maxProfit and potential profit.
10.  After the loop is finished, return maxProfit as the result.

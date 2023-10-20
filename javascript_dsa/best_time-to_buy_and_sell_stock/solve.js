function maxProfit(prices) {
  if (prices.length <= 1) {
    return 0;
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);

    const potentialProfit = prices[i] - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);
  }

  return maxProfit;
}

const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1));

const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2));

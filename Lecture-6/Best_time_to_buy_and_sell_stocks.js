function findMaxProfit(price) {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (let i = 0; i < price.length; i++) {
    if (price[i] < minPrice) {
      minPrice = price[i];
    } else if (maxProfit < price[i] - minPrice) {
      maxProfit = price[i] - minPrice;
    }
  }

  return maxProfit;
}

// Driver code
const price = [7, 4, 5, 3, 6, 16];
const maxProfitValue = findMaxProfit(price);
console.log(maxProfitValue);

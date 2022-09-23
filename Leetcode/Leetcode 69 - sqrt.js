// function sqrt(x) {
//   let i = 0;
//   while (i * i <= x) {
//     i += 1;
//   }

//   return i - 1;
// }

// console.log(sqrt(64));

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x == 0 || x == 1) return x;

  // binary search implementation
  let start = 0;
  let end = x;
  let ans = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (mid * mid == x) {
      return mid;
    } else if (mid * mid > x) {
      end = mid - 1;
    } else {
      ans = mid;
      start = mid + 1;
    }
  }
  return ans;
};
console.log(mySqrt(64));

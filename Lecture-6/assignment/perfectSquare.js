function checkPerfectSquare(num) {
  if (num == 0 || num == 1) return true;
  let start = 1;
  let end = Math.floor(num / 2);

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (mid * mid == num) {
      return true;
    } else if (mid * mid > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}

// Driver code

const x = 36;
const result = checkPerfectSquare(x);
console.log(result);

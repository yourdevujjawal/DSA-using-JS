// Driver code
const arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

const target = 7;

// Function definitions

// Linear search in 2D array: O(m * n) - Brute Force
function linearSearchIn2dArray(arr, target) {
  const rows = arr.length;
  const columns = arr[0].length;
  if (rows == 0) return false;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (arr[i][j] == target) {
        return true;
      }
    }
  }

  return false;
}

const result1 = linearSearchIn2dArray(arr, target);
console.log("Result using Linear Search O(n^2):", result1);

// Mix of comparison and Binary search in 2D array: O(m * log(n)) - slightly optimization
function searchIn2dArray(arr, target) {
  let rows = arr.length;
  let columns = arr[0].length;
  for (let i = 0; i < rows; i++) {
    if (target <= arr[i][columns - 1]) {
      return binarySearch1dArray(arr[i], 0, columns - 1, target);
    }
  }
  return false;
}

function binarySearch1dArray(arr, i, j, target) {
  while (i <= j) {
    let mid = i + Math.floor((j - i) / 2);
    if (arr[mid] == target) {
      return true;
    } else if (arr[mid] < target) {
      // search right space
      return binarySearch1dArray(arr, mid + 1, j, target);
    } else {
      // search left space
      return binarySearch1dArray(arr, i, mid - 1, target);
    }
  }
  return false;
}

const result2 = searchIn2dArray(arr, target);
console.log(
  "Search using mix of comparison and Binary search O(m * log(n)):",
  result2
);

// Pure binary search in 2D array: O(log(m * n)) - highly optimized
function binarySearchIn2DArray(arr, target) {
  // no. of rows
  let m = arr.length;
  if (m == 0) return false;
  // no. of columns
  let n = arr[0].length;
  let left = 0;
  let right = m * n - 1;

  // Binary search implementation
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    // rowNumber = mid / n and columnNumber = mid % n
    let midElement = arr[Math.floor(mid / n)][mid % n];
    if (midElement == target) return true;
    else if (midElement < target) {
      // search right space
      left = mid + 1;
    } else {
      // search left space
      right = mid - 1;
    }
  }
  return false;
}

const result3 = binarySearchIn2DArray(arr, target);
console.log("Binary search in 2D array O(log(m * n)): ", result3);

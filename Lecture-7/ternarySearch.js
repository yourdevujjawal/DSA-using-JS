// function implementation - Highly optimized Big O(logn with base 3 )
function ternarySearch(arr, start, end, target) {
  while (start <= end) {
    // find mid1 and mid2
    let mid1 = start + Math.floor((end - start) / 3);
    let mid2 = end - Math.floor((end - start) / 3);

    if (arr[mid1] === target) {
      return mid1;
    }

    if (arr[mid2] === target) {
      return mid2;
    }

    if (arr[mid1] > target) {
      // search 1st part
      return ternarySearch(arr, start, mid1 - 1, target);
    } else if (arr[mid2] < target) {
      // search 3rd part
      return ternarySearch(arr, mid2 + 1, end, target);
    } else {
      // search 2nd part
      return ternarySearch(arr, mid1 + 1, mid2 - 1, target);
    }
  }
  // if target not found, return -1
  return -1;
}

// Driver code

const arr = [10, 13, 15, 30, 35, 40, 56, 78, 90];
const target = 78;
const start = 0;
const end = arr.length - 1;
const result = ternarySearch(arr, start, end, target);

console.log(result);

// function definition

function findFirstBadVersion(arr, start, end) {
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] == 1) {
      if (arr[mid - 1] < 1) {
        return mid;
      } else {
        return findFirstBadVersion(arr, start, mid - 1);
      }
    } else if (arr[mid] < 1) {
      return findFirstBadVersion(arr, mid + 1, end);
    }
  }
}

// Driver code

const arr = [0, 0, 0, 1, 1, 1, 1, 1, 1];

let start = 0;
let end = arr.length - 1;

const result = findFirstBadVersion(arr, start, end);
console.log(result);

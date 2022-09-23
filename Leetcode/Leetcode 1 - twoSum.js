// Brute Force: O(n^2)

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let n1 = nums[i];
    let n2 = target - n1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === n2) {
        return [i, j];
      }
    }
  }
}

// Optimized: using Hashtable: TC: O(n), SC: O(n)

function twoSumOptimized(nums, target) {
  let complementIndexObj = {};
  let resultArray = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let requiredNum = target - currentNum;
    if (complementIndexObj[requiredNum] == null) {
      complementIndexObj[currentNum] = i;
    } else {
      resultArray = [complementIndexObj[requiredNum], i];
    }
  }
  return resultArray;
}

// Driver code

const arr = [2, 4, 1, 9, 3];
const target = 5;

const result = twoSum(arr, target);
const resultOptimized = twoSumOptimized(arr, target);

console.log("Two sum:", result);
console.log("Two sum optimized:", resultOptimized);

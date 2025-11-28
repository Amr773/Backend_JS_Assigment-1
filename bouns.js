/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let skipCount = 0;
  let currentCount = 1;
  let i = 0;

  while (true) {
    if (i < arr.length && arr[i] === currentCount) {
      i++;
    } else {
      skipCount++;
      if (skipCount === k) {
        return currentCount;
      }
    }
    currentCount++;
  }
};

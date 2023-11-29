let nums = [1, 1, 2, 2];

var removeDuplicates = function (nums) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return (k = nums.length);
};

console.log(removeDuplicates(nums));

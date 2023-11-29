let nums = [3, 2, 2, 3];
let val = 3,
  deleteElement = 0;

var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

removeElement(nums, val);

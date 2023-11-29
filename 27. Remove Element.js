let nums = [3, 2, 2, 3];
let val = 3,
  deleteElement = 0;

var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      console.log("i" + nums[i]);
      nums.splice(i, 1);
      i--;
      console.log(nums);
      deleteElement++;
      console.log(deleteElement);
    }
  }
  let existingElement = nums.length;
  console.log(existingElement);
  console.log(nums.length);
};

removeElement(nums, val);

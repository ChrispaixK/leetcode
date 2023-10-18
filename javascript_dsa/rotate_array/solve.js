function rotate(nums, k) {
  const n = nums.length;
  k = k % n;

  const result = [];

  for (let i = 0; i < n; i++) {
    result[(i + k) % n] = nums[i];
  }

  result.forEach((val, i) => {
    nums[i] = val;
  });
}

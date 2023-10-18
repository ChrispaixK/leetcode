function rotateArray(nums, k) {
  k = k % nums.length; // To handle cases where k is larger than the array length
  if (k === 0) return nums; // No rotation needed

  const firstPart = nums.slice(-k); // Get the last k elements
  const secondPart = nums.slice(0, nums.length - k); // Get the first (n-k) elements

  return firstPart.concat(secondPart);
}

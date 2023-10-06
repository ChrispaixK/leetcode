function majorityElement(nums) {
    let majority = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
            count = 1;
        } else if (nums[i] === majority) {
            count++;
        } else {
            count--;
        }
    }

    return majority;
}

// Test cases
const nums1 = [3, 2, 3];
const result1 = majorityElement(nums1);
console.log(result1); // Expected output: 3

const nums2 = [2, 2, 1, 1, 1, 2, 2];
const result2 = majorityElement(nums2);
console.log(result2); // Expected output: 2
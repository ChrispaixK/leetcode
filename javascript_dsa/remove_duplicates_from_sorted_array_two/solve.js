function removeDuplicates(nums) {
    if (nums.length <= 2) {
        return nums.length; // No need to remove duplicates if the array has 2 or fewer elements.
    }

    let count = 1; // Initialize the count to 1 (first element).
    let j = 1; // The index where the modified array should be updated.

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        } else {
            count = 1; // Reset count when a new element is encountered.
        }

        if (count <= 2) {
            nums[j] = nums[i]; // Update the modified array.
            j++;
        }
    }

    return j; // j will be the length of the modified array.
}

// Test cases
const nums1 = [1, 1, 1, 2, 2, 3];
const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];

const k1 = removeDuplicates(nums1);
const k2 = removeDuplicates(nums2);

console.log(k1, nums1.slice(0, k1)); // Output: 5 [1, 1, 2, 2, 3]
console.log(k2, nums2.slice(0, k2)); // Output: 7 [0, 0, 1, 1, 2, 3, 3]

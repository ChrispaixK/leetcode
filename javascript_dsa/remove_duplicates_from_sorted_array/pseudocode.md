## Remove Duplicates from Sorted Array

**Input:**
- `nums`: An array of integers sorted in non-decreasing order.

**Output:**
- The number of unique elements in `nums`, and `nums` is modified to contain only unique elements.

**Pseudocode:**

1. If the length of `nums` is 0, return 0 as there are no unique elements.

2. Initialize a variable `k` to 1, as the first element is always unique.

3. Loop through the elements of `nums` starting from index 1:
   a. If the current element `nums[i]` is not equal to the previous element `nums[i - 1]`, do the following:
      - Set `nums[k]` to `nums[i]`.
      - Increment `k` by 1.

4. Return the value of `k`, which represents the number of unique elements.
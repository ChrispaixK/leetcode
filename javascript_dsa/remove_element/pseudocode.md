## Remove Elements from an Array

**Input:**
- `nums`: An array of integers.
- `val`: The value to be removed from `nums`.

**Output:**
- The new length of the modified `nums` array after removing all occurrences of `val`.

**Pseudocode:**

1. Initialize a variable `k` to 0. This will be used to track the position of the next valid element.

2. Loop through the elements of the `nums` array using a variable `i`:
   a. If `nums[i]` is not equal to `val`, do the following:
      - Set `nums[k]` to `nums[i]`.
      - Increment `k` by 1.

3. Return the value of `k`, which represents the new length of the modified `nums` array.

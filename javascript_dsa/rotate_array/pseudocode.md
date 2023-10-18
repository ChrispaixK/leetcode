## Rotate Array to the Right

**Input:**
- `nums`: An array of integers.
- `k`: The number of steps to rotate the array to the right.

**Output:**
- The array `nums` after being rotated to the right by `k` steps.

**Pseudocode:**

1. Initialize a variable `k` to the remainder of `k` divided by the length of the array to handle cases where `k` is larger than the array size.

2. Initialize a new array called `result` with the same length as the input `nums`.

3. Loop through the elements of the `nums` array using a variable `i`:
   a. Calculate the new index for the element as `(i + k) % n`, where `n` is the length of the array.
   b. Assign the value at `nums[i]` to `result` at the calculated index.

4. Loop through the `result` array:
   a. Copy the values from `result` back to `nums`.

5. The `nums` array now contains the elements rotated to the right by `k` steps. The new length of the modified `nums` array is `n`.
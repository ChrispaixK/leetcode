1. Initialize two variables:
   - majority to store the current majority candidate, initially set to the first element of nums.
   - count to keep track of the count of the majority candidate, initially set to 1.
2. Iterate through the elements of the nums array starting from the second element (index 1) to the end:
   a. If count is equal to 0, update majority to the current element, and set count to 1.
   b. If the current element is equal to the majority candidate, increment count.
   c. If the current element is different from the majority candidate, decrement count.
3. After the loop, return the majority candidate as the result.

def rotate(nums, k)
     n = nums.length
  k = k % n  # In case k is larger than the array size
  result = Array.new(n)
  
  (0...n).each do |i|
    result[(i + k) % n] = nums[i]
  end

  result.each_with_index { |val, i| nums[i] = val }
end
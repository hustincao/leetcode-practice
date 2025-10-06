function maxArea(height: number[]): number {
  let left = 0,
    right = height.length - 1;
  let max = Math.min(height[left], height[right]) * (right - left);
  while (left < right) {
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
  }
  return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

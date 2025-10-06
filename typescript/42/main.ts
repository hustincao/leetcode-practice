function trap(height: number[]): number {
  let left = 0,
    right = height.length - 1;
  let leftWall = height[left],
    rightWall = height[right];
  let trappedWater = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      left++;
      if (height[left] < leftWall) {
        trappedWater += Math.min(leftWall, rightWall) - height[left];
      } else {
        leftWall = height[left];
      }
    } else {
      right--;
      if (height[right] < rightWall) {
        trappedWater += Math.min(leftWall, rightWall) - height[right];
      } else {
        rightWall = height[right];
      }
    }
  }
  return trappedWater;
}

console.log(trap([4, 2, 0, 3, 2, 5]));

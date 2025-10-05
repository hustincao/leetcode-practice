function twoSum(nums: number[], target: number): number[] {
  let nums_sorted = nums.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
  let i1 = 0,
    i2 = nums_sorted.length - 1;
  while (i1 < i2) {
    let sum = nums_sorted[i1][0] + nums_sorted[i2][0];
    if (sum < target) i1 += 1;
    else if (sum > target) i2 -= 1;
    else if (sum === target) break;
  }
  return [nums_sorted[i1][1], nums_sorted[i2][1]];
}

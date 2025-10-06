function threeSum(nums: number[]): number[][] {
  let sortedNums = nums.toSorted((a, b) => a - b);
  let solutions: number[][] = [];

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i > 0 && sortedNums[i] == sortedNums[i - 1]) continue;
    let left_index = i + 1;
    let right_index = sortedNums.length - 1;
    while (left_index < right_index) {
      let sum =
        sortedNums[i] + sortedNums[left_index] + sortedNums[right_index];
      if (sum === 0) {
        solutions.push([
          sortedNums[i],
          sortedNums[left_index],
          sortedNums[right_index],
        ]);
        left_index += 1;
        right_index -= 1;
        while (
          left_index < right_index &&
          sortedNums[left_index] === sortedNums[left_index - 1]
        )
          left_index += 1;
        while (
          left_index < right_index &&
          sortedNums[right_index] === sortedNums[right_index + 1]
        )
          right_index -= 1;
      } else if (sum < 0) {
        left_index += 1;
      } else {
        right_index -= 1;
      }
    }
  }
  return solutions;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

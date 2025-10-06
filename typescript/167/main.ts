function twoSum(numbers: number[], target: number): number[] {
  let left_index = 0,
    right_index = numbers.length - 1;
  while (numbers[left_index] + numbers[right_index] !== target) {
    if (numbers[left_index] + numbers[right_index] > target) {
      right_index -= 1;
    } else {
      left_index += 1;
    }
  }
  return [left_index + 1, right_index + 1];
}

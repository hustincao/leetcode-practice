function containsDuplicate(nums: number[]): boolean {
  let set = new Set();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}

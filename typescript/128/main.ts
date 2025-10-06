function longestConsecutive(nums: number[]): number {
  let map = new Map<number, number>();
  let maxStreak = 0;

  for (const num of nums) {
    if (!map.has(num)) {
      let left = map.get(num - 1);
      let right = map.get(num + 1);
      let streak = 1 + (left ?? 0) + (right ?? 0);
      map.set(num, streak);

      if (left) map.set(num - left, streak);
      if (right) map.set(num + right, streak);

      maxStreak = Math.max(maxStreak, streak);
    }
  }

  return maxStreak;
}

console.log(longestConsecutive([1, 0, 1, 2]));

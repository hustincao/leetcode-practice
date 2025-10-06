function largestRectangleArea(heights: number[]): number {
  // if (heights.length === 1) return heights[0];
  let maxArea = 0;
  let stack: number[][] = [];
  for (const [i, h] of heights.entries()) {
    let start = i;
    while (stack.length && stack[stack.length - 1][1] > h) {
      let [index, height] = stack.pop()!;
      maxArea = Math.max(maxArea, height * (i - index));
      start = index;
    }
    stack.push([start, h]);
  }

  for (const [i, h] of stack) {
    maxArea = Math.max(maxArea, h * (heights.length - i));
  }

  return maxArea;
  // return stack.reduce((p, c) => (p[1] > c[1] ? p : c))[1];
}

// console.log(largestRectangleArea([0, 9]));
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));

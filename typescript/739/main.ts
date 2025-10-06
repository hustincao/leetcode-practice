function dailyTemperatures(temperatures: number[]): number[] {
  if (temperatures.length === 0) return [];
  let res: number[] = new Array(temperatures.length);
  res[res.length - 1] = 0;
  let stack: number[] = [temperatures.length - 1];

  for (let i = temperatures.length - 2; i >= 0; i--) {
    let temperature = temperatures[i];

    while (temperature >= temperatures[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length > 0) {
      res[i] = stack[stack.length - 1] - i;
    } else {
      res[i] = 0;
    }
    stack.push(i);
  }

  return res;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

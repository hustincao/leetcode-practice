function evalRPN(tokens: string[]): number {
  let stack: number[] = [];
  for (const token of tokens) {
    if (token === "*") {
      let num2 = stack.pop()!;
      let num1 = stack.pop()!;
      stack.push(num2 * num1);
    } else if (token === "+") {
      let num2 = stack.pop()!;
      let num1 = stack.pop()!;
      stack.push(num2 + num1);
    } else if (token === "-") {
      let num2 = stack.pop()!;
      let num1 = stack.pop()!;
      stack.push(num1 - num2);
    } else if (token === "/") {
      let num2 = stack.pop()!;
      let num1 = stack.pop()!;
      stack.push(Math.trunc(num1 / num2));
    } else {
      stack.push(Number(token));
    }
  }
  return stack[stack.length - 1];
}

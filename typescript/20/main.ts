function isValid(s: string): boolean {
  let stack = [];
  let open = ["(", "{", "["];
  let close = [")", "}", "]"];
  for (const char of s) {
    let index = close.findIndex((c) => c === char);
    if (index >= 0) {
      let top = stack.pop();
      if (open[index] !== top) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

console.log(isValid("()[]{}"));

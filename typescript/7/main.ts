function reverse(x: number): number {
  let isNegative = x < 0;
  let x_string = Math.abs(x).toString();
  let reverse_string = "";

  for (let i = x_string.length - 1; i >= 0; i--) {
    reverse_string += x_string[i];
  }

  const MAX_NUMBER = isNegative ? "2147483648" : "2147483647";

  if (reverse_string.length > MAX_NUMBER.length) {
    return 0;
  } else if (reverse_string.length === MAX_NUMBER.length) {
    for (let i = 0; i < reverse_string.length; i++) {
      let r = Number(reverse_string.charAt(i));
      let m = Number(MAX_NUMBER.charAt(i));
      console.log(i, r, m);
      if (r > m) {
        return 0;
      } else if (r < m) {
        break;
      }
    }
  }

  return Number(reverse_string) * (isNegative ? -1 : 1);
}
// console.log(4294967295/2);
console.log(reverse(1563847412));

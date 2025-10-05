function isDigit(s: string): boolean {
  return s >= "0" && s <= "9";
}

function myAtoi(s: string): number {
  let s1 = s.trimStart();

  let isNegative = s1[0] === "-";
  const MAX_NUMBER = isNegative ? "2147483648" : "2147483647";

  let digits = "";
  if (isDigit(s1[0])) {
    digits += s1[0];
  } else if (!(s1[0] === "-" || s1[0] === "+")) {
    return 0;
  }
  for (let i = 1; i < s1.length; i++) {
    if (isDigit(s1[i])) {
      digits += s1[i];
    } else {
      break;
    }
  }

  while (digits[0] === "0") {
    digits = digits.substring(1);
  }

  if (!digits.length) return 0;
  if (digits.length > MAX_NUMBER.length) {
    return Number(MAX_NUMBER) * (isNegative ? -1 : 1);
  } else if (digits.length === MAX_NUMBER.length) {
    for (let i = 0; i < digits.length; i++) {
      let r = Number(digits.charAt(i));
      let m = Number(MAX_NUMBER.charAt(i));
      if (r > m) {
        return Number(MAX_NUMBER) * (isNegative ? -1 : 1);
      } else if (r < m) {
        break;
      }
    }
  }
  return Number(digits) * (isNegative ? -1 : 1);
}

console.log(myAtoi("-91283472332"));

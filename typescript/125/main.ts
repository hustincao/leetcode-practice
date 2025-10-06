function isPalindrome(s: string): boolean {
  let s_new = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left_index = 0,
    right_index = s_new.length - 1;

  while (left_index < right_index) {
    if (s_new.charAt(left_index) !== s_new.charAt(right_index)) {
      console.log(s_new.charAt(left_index), s_new.charAt(right_index));
      return false;
    }
    left_index += 1;
    right_index -= 1;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

function isAnagram(s: string, t: string): boolean {
  let s_chars = s.split("");
  let t_chars = t.split("");
  let map = new Map<string, number>();
  for (const s_char of s_chars) {
    if (!map.has(s_char)) map.set(s_char, 0);
    map.set(s_char, map.get(s_char)! + 1);
  }

  for (const t_char of t_chars) {
    if (!map.has(t_char)) return false;
    map.set(t_char, map.get(t_char)! - 1);

    if (map.get(t_char) === 0) map.delete(t_char);
  }

  return map.size === 0;
}

console.log(isAnagram("anagram", "nagaram"));

function groupAnagrams(strs: string[]): string[][] {
  let map = new Map<string, Array<string>>();
  for (const str of strs) {
    let key = str.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, [str]);
    } else {
      map.get(key)!.push(str);
    }
  }

  return [...map].map((a) => a[1]);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

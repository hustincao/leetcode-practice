// Checks conditions

// function isValidSudoku(board: string[][]): boolean {
//   function containsDuplicate(nums: string[]): boolean {
//     let set = new Set();
//     for (const num of nums) {
//       if (set.has(num)) return true;
//       set.add(num);
//     }
//     return false;
//   }

//   for (let r = 0; r < 9; r++) {
//     let row = board[r].filter((cell) => cell !== ".");
//     if (containsDuplicate(row)) return false;
//   }
//   for (let c = 0; c < 9; c++) {
//     let col = board.map((row) => row[c]).filter((cell) => cell !== ".");
//     if (containsDuplicate(col)) return false;
//   }
//   for (let b1 = 0; b1 < 3; b1++) {
//     for (let b2 = 0; b2 < 3; b2++) {
//       let box = board
//         .slice(b1 * 3, b1 * 3 + 3)
//         .map((row) => row.slice(b2 * 3, b2 * 3 + 3))
//         .flat()
//         .filter((cell) => cell !== ".");
//       if (containsDuplicate(box)) return false;
//     }
//   }
//   return true;
// }

// Checks duplicate for each row, column, and box
function isValidSudoku(board: string[][]): boolean {
  // bitmasks
  let rows = new Array(9).fill(0);
  let cols = new Array(9).fill(0);
  let boxes = new Array(9).fill(0);

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") continue;
      let num = Number(board[r][c]);
      let bitmask = 1 << num;
      let box = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      // console.log(`${r % 3} ${c} ${box}`);
      if (rows[r] & bitmask) return false;
      if (cols[c] & bitmask) return false;
      if (boxes[box] & bitmask) return false;
      rows[r] = rows[r] | bitmask;
      cols[c] = cols[c] | bitmask;
      boxes[box] = boxes[box] | bitmask;
    }
  }
  return true;
}

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

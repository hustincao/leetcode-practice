// The direction we are currently on in a zigzag
enum Direction {
  Down,
  Up,
}

function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  let queue = s.split("");
  let numColumns = Math.ceil(s.length / (numRows - 1));
  let board: string[][] = new Array(numRows)
    .fill("")
    .map(() => new Array(numColumns).fill(""));

  let direction: Direction = Direction.Down;
  let index = [0, 0]; // [row, col]
  while (queue.length) {
    let cell = queue.shift()!;
    console.log(cell);
    let [row, col] = index;
    board[row][col] = cell;
    // Switch directions at borders
    if (row === numRows - 1 && direction === Direction.Down) {
      direction = Direction.Up;
    } else if (row === 0 && direction === Direction.Up) {
      direction = Direction.Down;
    }

    if (direction === Direction.Up) {
      index = [row - 1, col + 1];
    } else if (direction == Direction.Down) {
      index = [row + 1, col];
    }
  }
  let return_string = board
    .map((row) => row.filter((cell) => cell !== "").join(""))
    .join("");

  return return_string;
}

let s: string = "PAYPALISHIRING";
// console.log(s.length / 2);
console.log(convert(s, 4));

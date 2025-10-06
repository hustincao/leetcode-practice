function carFleet(target: number, position: number[], speed: number[]): number {
  let arr = position
    .map((position, index) => [position, speed[index]])
    .sort((a, b) => b[0] - a[0]);

  let times: number[] = [(target - arr[0][0]) / arr[0][1]];

  for (let i = 1; i < arr.length; i++) {
    let [position, speed] = arr[i];
    let time = (target - position) / speed;
    if (time > times[times.length - 1]) {
      times.push(time);
    }
  }

  return times.length;
}

// console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]));

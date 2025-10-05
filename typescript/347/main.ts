import { PriorityQueue } from "@datastructures-js/priority-queue";

function topKFrequent(nums: number[], k: number): number[] {
  let frequencies = new Map();
  for (const num of nums) frequencies.set(num, (frequencies.get(num) ?? 0) + 1);

  const pq = new PriorityQueue<[number, number]>((a, b) => b[1] - a[1]);

  for (const frequency of frequencies) {
    pq.enqueue(frequency);
  }
  return [...pq].slice(0, k).map((a) => a[0]);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

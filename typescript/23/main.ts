// TS

import { PriorityQueue } from "@datastructures-js/priority-queue";

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;
  // Initialize Priority Queue of the K lists
  let first_node = null;
  let last_node = null;

  let pq = new PriorityQueue<ListNode>((a, b) => a.val - b.val);
  for (let i = 0; i < lists.length; i++) {
    if (lists[i] !== null) {
      pq.enqueue(lists[i]!);
    }
  }
  while (!pq.isEmpty()) {
    let node = pq.dequeue();

    // Add next node to queue and disconnect to current node
    if (node!.next) {
      pq.enqueue(node!.next);
    }
    node!.next = null;

    if (first_node === null) {
      first_node = node;
      last_node = node;
    } else {
      last_node!.next = node;
      last_node = node;
    }
  }
  return first_node;
}

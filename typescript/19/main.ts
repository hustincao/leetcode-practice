class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) return head;

  let left: ListNode = new ListNode(0, head); // 1 before the node we need to remove
  let right: ListNode = head;

  for (let i = 0; i < n; i++) right = right.next!;

  while (right !== null) {
    right = right.next!;
    left = left.next!;
  }

  // If left is still at s, then remove the first node
  if (left.next === head) {
    head = head.next;
  } else {
    left.next = left.next!.next;
  }

  return head;
}

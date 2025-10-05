class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || k === 1) return head;
  let h: ListNode = head!;
  let t: ListNode = head!;

  for (let i = 0; i < k; i++) {
    if (t.next === null) {
      break;
    }
    t = t.next;
  }
  return head;
}

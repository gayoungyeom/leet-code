/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//O(n)
var removeNthFromEnd = function(head, n) {
    const dummyNode = new ListNode(0, head);
    let p1 = dummyNode;
    let p2 = head;

    for(let i = 0; i < n; i++){
        p2 = p2.next; //n만큼 이동
    }

    while(p2){ //p2 끝까지 이동
        p1 = p1.next;
        p2 = p2.next;
    }

    p1.next = p1.next.next; //Nth 노드 삭제

    return dummyNode.next;
};
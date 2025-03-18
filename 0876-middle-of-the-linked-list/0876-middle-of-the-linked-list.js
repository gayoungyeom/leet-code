/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// O(n)
// two pointer 풀이: middle은 리스트가 홀수면 중간노드, 짝수면 두 개의 중간노드 중 뒷쪽을 가리킴.
var middleNode = function(head) {
    let middle = head;
    let end = head;

    while(end !== null && end.next !== null){
        middle = middle.next;
        end = end.next.next;
    }

    return middle;
};
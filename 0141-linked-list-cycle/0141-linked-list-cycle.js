/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let p1 = head; //1칸씩 이동하는 포인터
    let p2 = head; //2칸씩 이동하는 포인터
    
    while(p2 !== null && p2.next !== null && p2.next.next !== null){ //p2가 리스트 끝에 도달 -> 사이클 O
        p1 = p1.next;
        p2 = p2.next.next;

        if(p1 === p2) return true;
    }
    
    return false;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

//O(n + m): 교차점 전까지 같은 길이(n+m)만큼 한 칸씩 이동하면 된다.
var getIntersectionNode = function(headA, headB) {
    let tmpA = headA;
    let tmpB = headB;

    while(tmpA !== tmpB){
        tmpA = tmpA ? tmpA.next : headB;
        tmpB = tmpB ? tmpB.next : headA;
    }
        
    return tmpA;
};
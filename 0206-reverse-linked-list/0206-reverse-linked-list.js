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

//O(n)
var reverseList = function(head) {
    let ptr = head;
    
    while(ptr && ptr.next){
        const value = ptr.next.val;
        const newNode = new ListNode(value, head);
        ptr.next = ptr.next.next;
        head = newNode;
    }
    
    return head;
};
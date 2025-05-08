/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//O(n): two pointer
var detectCycle = function(head) {
    let p1 = head;
    let p2 = head;
    
    while(p2 && p2.next){
        p1 = p1.next;
        p2 = p2.next.next;

        if(p1 === p2) break;
    }

    if(!p2 || !p2.next) return null;

    p1 = head;
    while(p1 !== p2){
        p1 = p1.next;
        p2 = p2.next;
    }

    return p1;
};

//O(n): set 활용
var detectCycle = function(head) {
    const s = new Set();

    while(head){
        if(s.has(head)) return head;

        s.add(head);
        head = head.next;
    }

    return head;
};
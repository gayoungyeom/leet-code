const LinkNode = function(val, next) {
    this.val = val;
    this.next = null;
}

const MyLinkedList = function() {
    this.head = null;
    this.count = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index > this.count) return -1;

    let curNode = this.head;
    for(let i = 0; i < index; i++){
        curNode = curNode.next;
    }
    
    return curNode?.val ?? -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;

    this.count++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head === null) return this.addAtHead(val);

    let curNode = this.head;
    while(curNode.next !== null){
        curNode = curNode.next;
    }

    const newNode = new ListNode(val);
    curNode.next = newNode;

    this.count++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0 || index > this.count) return;
    if(index === 0) return this.addAtHead(val);

    let curNode = this.head;
    for(let i = 0; i < index - 1; i++){
        curNode = curNode.next;
    }
    
    const newNode = new ListNode(val);
    let next = curNode.next;
    curNode.next = newNode;
    newNode.next = next;

    this.count++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index > this.count || this.head === null) return;

    if(index === 0){
        this.head = this.head.next;
    } else{
        let curNode = this.head;
        for(let i = 0; i < index - 1; i++){
            curNode = curNode.next;
        }
        if(curNode.next === null) return;
        curNode.next = curNode.next.next;
    }

    this.count--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
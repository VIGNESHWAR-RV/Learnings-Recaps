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

/*
    APPROACH 1 ( OWN TRY )

    create a recursive function to loop through linked list and push each node to array
    get the required node from array by getting middle value using array.length
    return the node.

    APPROACH 2 ( LEARNT - Effective One ).
    1.have two reference that are pointing to head of the linked list.
    2.change one reference to point towards next node of its current pointer  
    3.change another reference to point towards next node of next node of its current pointer
    4.loop 2 and 3 until the  second reference pointing to null (it reaches end here).
    5.return the 1st reference that was pointing to child node of its current pointer ( which would point the middle )

 */
    var middleNode = function(head) {
        // const arrayList = [];
        // function recursive(head) {
        //   if (!head.next) {
        //       arrayList.push(head);
        //   } else {
        //       arrayList.push(head);
        //       recursive(head.next);
        //   }
        // }
        // if (!head) {
        //   return head;
        // } else {
        //     recursive(head);
        //     let middle = ((arrayList.length%2) === 0) ? arrayList.length/2 : arrayList.length/2-0.5;
        //     return arrayList[middle] 
        // }
    
        let childNode = head;
        let grandChild = head;
    
        while(grandChild !== null && grandChild.next !== null) {
            childNode = childNode.next;
            grandChild = grandChild.next.next;
        }
    
        return childNode;
    };

    const linkedList = {val: 1,
        next: 
        {
            val: 2,
            next: 
            {
                val: 3,
                next: 
                {
                    val: 4,
                    next: 
                    {
                        val: 5,
                        next: null
                    }
                }
            }
         } 
        };

    console.log(reverseList(linkedList));
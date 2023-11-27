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
     APPROACH 

    setting the parent node into child node next property 
    setting the parent node next property to null
    create a recursive function to do same if it has next value.

  */
    var reverseList = function(head) {
        // OWN SOLUTION
          // if (!head) {
          //     return head;
          // }else {
          //       let reversedList;  
          //       function recursive(head) {
          //         if (!head.next) {
          //             reversedList = head;
          //             return head;
          //         }
          //         if (head.next) {
          //             let childNode;
          //             childNode = recursive(head.next);
          //             childNode.next = head;
          //             head.next = null;
          //             return childNode.next;
          //         }
          //       }
          //       recursive(head);
          //       return reversedList; 
          // }
        
          // Effective Solution ( learnt )  
          if (!head || !head.next) {
            return head;
          } else {
            const reversed = reverseList(head.next);
            head.next.next = head;
            head.next = null;
            return reversed;
          }
        
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
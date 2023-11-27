/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

/*
   Approach ( learnt )
   we need to get the last node of linked list to return it first.
   creating the recursive function 
     to get last node
     to change the next pointer to child to parent from parent to child
     clear out the child next pointer to null. 
      so successive top level parents assign them to next pointer of their child
      last child wouldn have the next pointer null 
 */
class Solution {
    static ListNode recursive(ListNode head) {
        if (head == null || head.next == null) {
          return head;
        } else {
          ListNode reversed = recursive(head.next);
          head.next.next = head;
          head.next = null;
          return reversed;
        }
    }
    public ListNode reverseList(ListNode head) {
        return recursive(head);
    }
}
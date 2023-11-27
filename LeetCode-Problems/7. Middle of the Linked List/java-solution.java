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
    APPROACH ( learnt )
     
    1.create two reference to head of the lst
    2.move one reference to child of the current pointer
    3.and other to child's child of the current pointer
    4.loop the 2 and 3 until child's child object is null
    and return the reference that was pointing to child at each loop which would point exactly to center node
       
 */
class Solution {
    // static void recursive(ListNode head, [] list) {
    //   if(head.next == null) {
    //      list.push(head);
    //   } else {
    //      list.push(head);
    //      recursive(head.next, list);
    //   } 
    // }

    public ListNode middleNode(ListNode head) {
        ListNode childNode = head, grandChild = head;
        while(grandChild != null && grandChild.next != null) {
            childNode = childNode.next;
            grandChild = grandChild.next.next;
        }
        return childNode;
    }
}
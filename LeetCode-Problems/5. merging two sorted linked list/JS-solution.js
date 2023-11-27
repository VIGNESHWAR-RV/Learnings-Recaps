/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 /*
 
    EXPLANATION ( Learnt )
    
    LinkedList is a chain of objects linked to each other 
    by "next" property in each object referring to the successive object
    eg:
    [0,1,2] =>     {
                      val: 0,
                      next: {
                        val: 1,
                        next: {
                          val: 2,
                          next: null
                        }
                      }
                    }

    APPROACH

    1.create a dummy initial head ( starting object ) and refer it with another variable ( sorted );
    2.as list1 && list2 objects are present
    if ( list1 && list2 ) {

      3.compare the value property (val) of both
      4.add object that has smaller val to the next property of dummy initial head   
      5.set the smaller object reference (ex: list1 ) to object's next ( list1.next ) ( in order to go to next objects )
      6.set the dummy initial head reference ( sorted ) to dummy initial head Object's next ( sorted.next ) property
      7.repeat from 2 again till ( list1 || list2 ) is undefined. 

    } else {

      8. if any one is undefined, add other one to reference next property (sorted.next)
      9. return the dummy initial head next property ( contains all the sorted objects )
      
    }

  */
    var mergeTwoLists = function(list1, list2) {
    
        let dummyHead = {val: -1, next: null};
        let sortedList = dummyHead; 
        while(list1 && list2) {
            if(list1.val < list2.val) {
               sortedList.next = list1;
               list1 = list1.next;
            } else {
                sortedList.next = list2;
                list2 = list2.next;
            }
            sortedList = sortedList.next;
        }
        sortedList.next = list1 || list2;
        return dummyHead.next;
    
    };

let list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
};
let list2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
};;

console.log(mergeTwoLists(list1, list2));
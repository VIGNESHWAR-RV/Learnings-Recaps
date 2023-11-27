    /* 
      APPROACH TO ACHIEVE
    1. Taking a copy of array using clone method.
    2. looping the cloned array from second to last element
    3. at each loop, updating the current element with sum of current element value and previous element value.

    */

    /* 
      NOTE:
    not working on the parameter as there is a chance of
    modifying actual input argument array value which might be needed
    for further operations
    */


class Solution {
    public int[] runningSum(int[] nums) {
        int cloned[] = nums.clone();

        for (int i = 1; i < cloned.length; i++) {
            cloned[i] += cloned[i-1];
        }
        return cloned;
    }
}
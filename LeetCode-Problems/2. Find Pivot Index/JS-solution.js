/**
 * @param {number[]} nums
 * @return {number}
 */

/*
   SOLUTION

    get total sum of elements of array, so we can compare 
   total sum with  ( adding up sum from left * 2 ) at each index 
   and return index.
*/

/*
   APPROACH

    store total sum value of array elements by looping
    by looping again, check whether twice the sum of previous elements
      at each index is equal to total sum without the value at that index.
      if its equal 
        -> return index value;
      else 
        -> return -1;
 */

    var pivotIndex = function(nums) {
        let totalSum = 0;
    
        for (let i=0; i < nums.length; i++) {
            totalSum += nums[i];
        }
    
        let leftSum = 0;
    
        for (let j=0; j< nums.length; j++) {
           if (leftSum * 2 === totalSum - nums[j]) {
               return j;
           }
           leftSum += nums[j];
        }
    
        return -1;
    };

    let arr = [2,3,4,5];
    console.log(pivotIndex(arr));
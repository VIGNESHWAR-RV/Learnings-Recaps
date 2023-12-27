/*

  Window Slicing Pattern
  ----------------------

    this pattern is useful in finding particular subset of given array
    ex
    // finding consecutive largest numbers 
    // finding subset with matching conditions

*/

/*

   find largest sum of n consecutive numbers in given array

*/

   // understand the problem 
    // restate - given an array and n number , we need to find n consecutive numbers who sum is the largest in the array.
    // input - array of numbers , number
    // output - number
    // output is purely depend on input

   // examples
    // input ( [1,2,3,4,5,6,7], 3 ) => output 18
    // input ( [1,2], 3) => output 0;
    // input ( [2,-1,4,5], 3) => output 8

function largestSum(arr, n) {
   // break it down
    // if array length is not greater than given n number, return 0;
      if (arr.length < n) {
        return 0;
      }
    // declare a variable total with value 0
    let total = 0;
    // loop over an array upto given n numbers to get the total of first n set of elements. assign that value to a variable ( total )
    for(let i=0; i<n; i++) {
        total += arr[i];
    }
    // declare a variable temp and assign the total value to hold sum of subset elements at each loop
    let temp = total;
    // loop over the array from n to last element of array
    for(let i=n; i< arr.length; i++) {
       // add element in nth position to temp and subtract the first element from temp.
       temp = (temp - arr[i-n]) + arr[i];
       total = Math.max(total, temp);
       // compare temp and total, if temp > total => assign total with temp value.
    }
    // return the total
    return total;
};

console.log(largestSum([1,2,3,4,5,6,7], 3));
console.log(largestSum([1,2], 3));
console.log(largestSum([2,-1,4,5], 3));

// Lookback and refactor
  // additional valid number checks for elements in array, could be added.

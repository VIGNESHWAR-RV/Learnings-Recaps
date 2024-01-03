/*

  Multiple Pointer pattern
  ------------------------

    This pattern is useful in traversing the array. 

    with two pointers ( one from begining and one from end ), we can cover the entire array traversing with half iterations of actual array length.

*/


function countUniqueValues(arr){
    
    // understand the problem
    // count how many unique values are in given array
    // input - sorted array
    // output - count ( number )
    // output is purely based on input
    
    // sample cases
      // input [1,1,1,1,2] - output 2
      // input [] - output 0
      // input [-2,-1,-1,0,1] - output 4
      
    // break it down
      // check whether the input array has elements, if not return 0;
      // if (!arr.length) {
      //     return 0;
      // }
      // create two variables ( a, b ) to point elements in array
      let a = 0;
      // let b = 1;
      
      // loop over the array
        for ( let i = 0; i < arr.length; i++) {
            
          // compare the updated variable to other variable whether the elements they are pointing is different
            if (arr[a] != arr[i + 1]) {
              // if different move the value next to variable ( a ) that is pointing initially and move the variable ( a ) one step and move the variable ( b ) to next step
                a++;
                // arr[a] = arr[i + 1];
            }
            // at each loop , update one variable ( b ) to refer to its current element in the loop
          //   b += 1;
  
        }
         // after completing the loop, the index that variable ( a ) is pointing to is the maximum number of the unique elements 
         // return the value of variable ( a )
         return a;
         
         // refactor 
         // no need for length check as no loop will occur and a is default to zero 
         // instead of using b we can use ( i + 1 ) since i is also a pointer
         
  }

  console.log(countUniqueValues([-1,1,0,1,1,1,1,3]));
  console.log(countUniqueValues([-2,-1,-1,0,1]));
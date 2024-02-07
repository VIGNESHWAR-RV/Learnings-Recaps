/*

  Multiple Pointer pattern
  ------------------------

    This pattern is useful in traversing the array. 

    with two pointers ( one from begining and one from end ), we can cover the entire array traversing with half iterations of actual array length.
    only if we set those pointers to two new values in array at every loop

    despite reducing loops, multiple pointers can also be used to access multiple values in each loop

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
      if (!arr.length) {
          return 0;
      }
      // create two variables "a" to count unique values and 'b' to point elements in array
      let a = 1;
      let b = 0;
      
      // loop over the array
        for ( let i = 1; i < arr.length; i++) {
            
          // compare the updated variable to other variable whether the elements they are pointing is different
            if (arr[b] != arr[i]) {
              // if different increment the ( a ) value and move the variable ( b ) to the position of ( i )
                a++;
                b = i;
            }

        }
         // after completing the loop, variable ( a ) is the count of maximum number of the unique elements 
         // return the value of variable ( a )
         return a;
         
         // refactor 
         
  }

  console.log(countUniqueValues([-1,0,1,1,1,1,3,3]));
  console.log(countUniqueValues([-2,-1,-1,0,1,1]));


  // approach with frequency counter pattern ( we can use unordered list as well )

  function countUniqueValuesV1(arr) {
    let lookup = {};
    for(let i=0; i<arr.length; i++) {
      lookup[arr[i]] = (lookup[arr[i]] | 0) + 1;
    }
    return Object.keys(lookup).length;
  }

  console.log("-------------------------");
  console.log(countUniqueValuesV1([-1,1,0,1,1,1,1,3]));
  console.log(countUniqueValuesV1([-2,-1,-1,0,1]));
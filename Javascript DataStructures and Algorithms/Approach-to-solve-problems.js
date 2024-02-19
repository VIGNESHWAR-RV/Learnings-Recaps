/*

  Problem_Solving
  ---------------

  1. Understand the problem
      - restate the problem with your own words
      - what are the inputs that can be passed?
      - what are the output we should get?
      - understand the inputs and outputs relation 
        ( whether input data is sufficient to compute output )

  2. Explore concrete examples
      - check with different inputs and its corresponding outputs 
        ( more examples will help you understand better )
        ( also helps in edge cases )

        start with simple examples and gradually to complex examples
        examples with empty inputs
        examples with invalid inputs

  3. Break it Down
      - explicitly define the steps that you are going to take
        ( helps in catching any conceptual issues in our implementation details )

  4. Solve/Simplify
      - find the core difficulty in the implement that we are trying to do
      - temporarily ignore the difficulty and try writing a simplified solution
      - later incorporate the difficulty into the solution
    
  5. Look back & Refactor ( important step ) ( growth part )
      - ask questions yourself on possible aspects ( performance, requirement, readability ) and so on

        Questions like
           1. could we derive result differently ?
           2. could we understand the code at a glance ?
           3. can we use the result or method for another problem ?
           4. can we improve the performance of our solution ?
           5. can we think of other ways to refactor ?
           6. how others have solved this problem ?   
       
*/


// Example
// -------

/*
  
  Question
  --------
  Add numbers in an array to the numbers before them and return added array
  input - [1,2,3,4]
  output - [1,3,6,10]

*/


/*

  undertsand the problem
  ----------------------
    question restate
      we get array of numbers as input and we return array of numbers as output in which numbers are sum of number at that position and previous numbers in input array
      like fibonacci series but here array might have numbers in any order

    input that can be passed 
      array of numbers // [1,2,3,4]

    output we are expecting
      array of numbers // [1,3,6,10]
    
    input and output relation
      the numbers at each index is replaced by sum of same numbers at that index and previous numbers sum

   Explore examples
   ----------------
    input [0,0,0,0] - output [0,0,0,0]
    input [-1, 0, 1, 2] - output [-1, -1, 0, 2]
    input [] - output []
    input [0, true, 2, 3] - output []
    input ( {}, true, 5, "Hi" ) - output []

  Break it down
  -------------
    adding condition to check whether its not an Array, so we return []

    declare a variable ( output ) and assigning with empty array
    declare a variable ( accumulator ) and assign it to zero
    loop over the given input array until the last element of input array
      check if any of the element is not number, if so return []
      access the number in input array and add it with accumulator and push it to output
      ( the sum of previous numbers in each loop is the value of accumulator in each loop )
    return the array ( output ) at end

  Solve/Simplify
  --------------
    writing solution below
  
*/

let arr = [2,3,1,5];

function sumOfPreviousNumbers(arr) {

  if (!Array.isArray(arr)) {
    return [];
  }
  let output = [];
  let accumulator = 0;
  for(let i=0; i< arr.length; i++) {
    if (typeof arr[i] === "number") {
      accumulator += arr[i];
      output.push(accumulator);
    } else {
        return [];
    }
  }

  return output;
}

console.log(sumOfPreviousNumbers(arr));

/*
  
  Look back & refactor
  --------------------

    instead of returning new array , we can have option to choose immutable or mutable
    instead of only typeof check for number, custom function for number validation could be added;

*/

let arr1 = [2,3,1,5];

function sumOfPreviousNumbersV1(arr, isMutable) {

  if (!Array.isArray(arr)) {
    return [];
  }

  let output = (isMutable) ? arr : [];
  let accumulator = 0;

  for(let i=0; i< arr.length; i++) {
    if (isValidNumber(arr[i])) {
      accumulator += arr[i];
      output[i] = accumulator;
    } else {
      return []; // only if there are invalid numbers in array
    }
  }

  return output;
}

// common function 
isValidNumber = function(num) {
  return ( typeof num == "number" && !Number.isNaN(num) && Number.isFinite(num) && num >= Number.MIN_SAFE_INTEGER &&  num <= Number.MAX_SAFE_INTEGER );
};

console.log(arr1, sumOfPreviousNumbersV1(arr1, true));

  
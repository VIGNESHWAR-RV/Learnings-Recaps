/*

  Recursion
  ---------

    function which calls itself again and again to do the task until the end of the task/given conditions met.

    two important things to achieve recursion
      invocation of the same function with different inputs.
      function termination when required conditions met.

    Note 🚨
      failing to invoke the same function for 'n' necassary times would result in incomplete results.
      failing to add termination condition would lead to infinite loop causing stack limit exceeded error in call stack of javascript engine.

    2 types of recursion functions
    ------------------------------
      Pure Recursive function
      Helper Recursive function


    Pure Recursive function
    -----------------------
      function used for recursion is a pure function and would always recieve the necessary values via arguments and always return the output
      does not depend on any external variables outside the function

      Merits
      ------
        since functions are pure, their execution is always derivable.
        when passing non-premitive data type values, only new reference for those values are created instead of new memory allocation ( no value copy )

      Demerits
      --------
        when passing primitive data type values, new reference with copy of that value is created ( new memory space ) leading to increased space complexities
        generally, function invocation will always create new execution context.

    Helper Recusrive function
    -------------------------
      function used for this type of recusrion is impure which means it would access variables oustide its recursive function's scope and necessarily need not to return the output.
      generally consist of two kinds of functions
        - one function for recursion
        - one function for wrapping the recursion function and to hold the necessary values required for recursion.

      Merits
      ------
        need not to pass all the necessary variables as argument as there is a wrapper function which could hold the values of any data type and its reference in it.

      Demerits
      --------
        generally, function invocation will always create new execution context.
        function might become little complex to understand as they are impure.
      
*/

// Example for Pure Recursive Function

  // factorial of given number

function recursivePureFactorial(val, num=1) {
  if(num >= val) {
    return val;
  }
  return num * recursivePureFactorial(val, num+1);
}

let result = recursivePureFactorial(6);
console.log(result);

// Example for Helper Recursive function
  
  // factorial of given number

function recursiveHelperFactorial(val) {
    if (val === 0) {
        return 0;
    }
    
    let sum = 1;
    let num = 1;

    function recursiveFactorial() {
      if (num >= val) {
        sum *= val;
        return;
      }
      sum *= num;
      num++;
      recursiveFactorial();
    }

    recursiveFactorial();
    return sum;
}

let result1 = recursiveHelperFactorial(6);
console.log(result1);
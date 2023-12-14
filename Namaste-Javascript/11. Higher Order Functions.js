/*

Higher Order Function
------ ----- --------

Functions which takes other functions as arguments
Functions which returns another function.

use-cases
---------
  helps achieving more re-usability, composing application structure.

  Caution 🚨
  ----------
    over-use ( abuse ) might end us up in unmaintainable code. 

*/

function sayHelloTo(getReferer) {
    return "hello "+ getReferer();
}

function sayWorld() {
    return "world";
}

console.log(sayHelloTo(sayWorld));

/*

  SayHelloTo is a higher order function which receives an function as argument ( getReferer )
  Explanation
  -----------

    Global Execution context with global object ( window ) is created

    Memory Allocation phase
    -----------------------
      sayHelloTo function is defined along with its code in global execution context.
      sayWorld function is defined along with its code in global execution context.

    Code Execution phase
    --------------------
      last line console.log(sayHello(sayWorld)) will invoke the function sayHelloTo passing sayWorld as argument.
      Execution context for sayHelloTo is created
         
        Memory Allocation phase of sayHelloTo
        ------------------------------------
          getReferer is declared and initialized with value undefined in the execution context of sayHelloTo.

        Code Execution phase of sayHelloTo
        ----------------------------------
          getReferer variable is assigned with sayWorld function which was passed as argument.
          return statement ( return "Hello "+ getReferer(); ) will invoke the sayWorld function.
          Execution context for sayWorld is created.

            Memory Allocation Phase of sayWorld
            -----------------------------------

            Code Execution phase of sayWorld
            --------------------------------
              return statement will return "world"
              once done, the execution context will be removed from call stack and garbage collected and passes the control back to parent execution context ( sayHelloTo )

          the value returned from sayWorld ( "world" ) is now concatenated to "Hello " -> "Hello world" is returned  
          once done, the execution context of sayHelloTo will be removed from call stack and garbage collected and passes the control back to parent execution context ( Global execution context ).
       
      the console.log(sayHelloTo(sayWorld)) will log the returned value ( "Hello world" ) in the console.
      once done, the global execution context is removed from the call stack and garbage collected. ( the global object would still be in the browser ) 


*/

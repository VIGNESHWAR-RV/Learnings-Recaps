/*

Hoisting
--------

In Memory Allocation phase, All the variables are declared and initialized with undefined and named functions gets defined before execution phase
which allows them to access them before their definition line. 

this phenomenon is known as hoisting. 

Due to Hoisting, one can access variables ( var type ) and invoke functions ( named ) before their definition.

*/

// Example

console.log( val );
console.log(sayHello());

var val = 6;

function sayHello () {
  return "Hello";
}

/*

 Explanation

    In Memory Allocation Phase
     - variable val is declared and initialized with undefined val
     - named function is declared and initialized with its code
     
    In Execution Phase
     - 1st line ( console.log(val) ) will get executed and log undefined in console.
     - 2nd line ( console.log(sayHello()) ) will get executed and log "hello" returned from sayHello function invocation in console.
     - 3rd line ( var val = 6 ) will get executed and variable val is assigned with 6.
 
*/

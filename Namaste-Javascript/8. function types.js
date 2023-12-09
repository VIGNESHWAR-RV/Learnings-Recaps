/*

  Function Statement / Function Declaration
  -----------------------------------------

    - functions defined ( or ) declared directly in the code ( named functions )
    - gets defined in the memory allocation phase of execution context ( so hoisted )

    function a() {

    };

  Function Expression
  -------------------

    - functions used as value and assigned to a variable
    - gets defined in the code execution phase of execution context ( so, not hoisted )
    
    var b = function () {

    };

  Named Function Expression
  -------------------------
     
    - function expressions with named functions like function statement 
    
    var c = function d() {

    };

    c();

    Note🚨
      - here reference 'd' won't get added in along with variable 'c' during memory allocation phase in global execution context.
        instead, it creates a reference 'd' in local memory space ( scope ) of execution context of variable 'c' invocation  


  Anonymous Function
  ------------------
      
      - functions defined without any reference is known as anonymous function
        mostly used as value/callback function and assigned to variable / passed to another function respectively
        
    Note🚨
      - JS engine throws syntax error if any function is defined without a reference. ( its execption for IIFE function )
        so anonymous function should either be assigned to a variable or passed as an argument.

  First Class Functions / Functions - First Class Citizens
  --------------------------------------------------------

    - Ability of functions to be assigned as value , passed as argument to another functions are the special abilities 
       which make functions as ( first class citizens / first class functions ) in Javascript

*/
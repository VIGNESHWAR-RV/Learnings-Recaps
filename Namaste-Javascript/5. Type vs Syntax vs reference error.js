
 /*

  Type Error
  ----------
    error thrown if different type of variable is used for different operations ( variable value use in in-appropriate way )
    error thrown on trying to change a value which cannot be changed ( const type variable values )
    error thrown if argument passed to function is incompatible with the type expected by the function

    note🚨
      if this error is unhandled ( uncaught ), JS engine would throw this error and stop executing scripts further.

 */

  // example

//   let a = 59;
//   console.log(a.split());

// const b = 100;
// b = 10000;


/*
  
  Syntax Error
  ------------
    error thrown when JS engine try to interpret syntactically invalid code

    note🚨
      if this error is present, JS engine wouldn't execute any code in the file. ( it doesn't matter which line has this error )

*/

  // example

// let c = 10; 
// let c = 20;

// const d;


/*
 
  Reference Error
  ---------------

    error thrown when a variable is not defined ( or not yet initialized ) in its current scope. 

    note🚨
      if this error is unhandled ( uncaught ), JS engine would throw this error and stop executing scripts further.
      
*/

  // example

//   console.log(e);
//   console.log(f);
//   let f = 40;




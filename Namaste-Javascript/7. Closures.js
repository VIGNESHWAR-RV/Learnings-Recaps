/*

  Closures
  --------

    function bundled with its lexical environment is known as ( closure )

    closure will only be created if variables outside the function ( function's lexical environment ) are accessed inside that function.
    Also closure is created with variables that are only accessed inside the function. ( other variables are smartly garbage collected as they have no reference to access )
    
    due to closure, a function can access variables and other functions in the execution context where it was defined.

*/

function a(g=2) {

    function b() {
        console.log(d, e, f, c, g);
    }

    function c() {
      
    }

    var d = 3;
    let e = 3;
    const f = 4;
 

    return b;

}

let b = a();

b();

/*

  Explanation 
  -----------

    - Global execution context is created with its global object ( window ).

      Memory Allocation phase
      -----------------------
        - function 'a' is defined in global memory space ( scope ) along with its code
        - variable 'b' is declared in script memory space ( scope ) and initialized with value undefined
    
      Code Execution phase
      --------------------
        - function 'a' invocation in line ( let b = a() ) is executed and separate execution context for 'a' is created
        
          Memory Allocation phase of 'a'
          ------------------------------
            - variable 'g' ( in the function a's parameter ) is declared and initialized with undefined in local memory space ( scope ) of 'a' execution context.
            - function 'b' is defined along with code in local memory space ( scope ) of 'a' execution context.
            - function 'c' is defined along with code in local memory space ( scope ) of 'a' execution context.
            - variable 'd' is declared and initialized with undefined in local memory space ( scope ) of 'a' execution context.
            - variable 'e' is declared and initialized with undefined in local memory space ( scope ) of 'a' execution context.
            - variable 'f' is declared and initialized with undefined in local memory space ( scope ) of 'a' execution context. 

          Code Execution phase of 'a'
          ---------------------------
            - variable 'g' is assigned with value 2 as no argument is passed during invocation.
            - variable 'd' in line ( var d = 3 ) is assigned with value 3.
            - variable 'e' in line ( let e = 3 ) is assigned with value 3.
            - variable 'f' in line ( const f = 4 ) is assigned with value 4.
            - return statement would return the function b's reference.

            once done the function a's execution context is removed from call stack and garbage collected.

        - In line ( let b = a() ) the returned reference of function b is now assigned to variable 'b' defined in the script memory space of global execution context
        - function 'b' invocation in last line ( b() ) is executed and separate execution context for function 'b' is created

          Memory Allocation phase of 'b'
          ------------------------------
            - the values accessed from scope ( local memory of space of 'a' ) where the function 'b' was defined initially, are added into closure memory space ( scope ) in 'b' execution context.

          Code Execution phase of 'b'
          ---------------------------
            - the console.log statement in line ( console.log(d, e, f, c, g) ) executes and logs (3, 3, 4, function c() {}, 2 ) in the console.
            
            once done, the function b's execution context is removed from call stack and garbage collected. 
        
        once done, the global execution context is removed from call stack and garbage collected.
*/

/*

  Block ( compound statement )
  -----
    block is a way to group statements as one where JS expects a single statement.

  Block Scope
  ----- -----
    memory space specifically created for holding variables ( let, const ) defined inside the block

    var type variables gets defined in the local memory space of execution context ( its global memory space incase of global execution context )

    nested block scope is also possible, we can create multiple block scope nested inside block scope. ( multiple block memory spaces will be created in same execution context  )

    block scope also follows scope chain in same manner.

    block memory space will be removed once the specific block statements are executed.
      

  Shadowing
  ---------
    Variables defined inside the block has more priority in pointing reference inside the block ( shadowing ) than variables defined outside the block.
    its due to being the closest scope ( memory ) available while accessing the variable.

    Note 🚨
    -------

    Illegal shadowing
    -----------------
    variables ( type let and const ) outside block get defined in the local memory space of execution context ( its script incase of global execution context )
      varibale ( type var ) inside block also get defined in the same local memory space of execution context ( its global incase of global execution context )
      so incase of same variable, it throws an error that variable is already defined ( as both are pointing to same memory space ( incase of global execution context, it checks script memory space for same variable ) ).

    variables ( var type ) outside block and variables ( type let and const ) inside block scope can be created without any such issue.
      they always point to local memory and block memory respectively.  

*/

function a() {
    let b = true;
    if (b) {
        let b = 1;
        const c = 2;
        var d = 3;

        {
            let b = 4;
            const c = 5;
            d = 6;
            console.log(b);
            console.log(c);
            console.log(d);
        }
        console.log(b);
        console.log(c);
        console.log(d);
    }
    console.log(b);
}

a();

/*
  Explanation
  -----------

    Global Execution context along with Global Object ( window ) is created.

    Memory Allocation phase
    -----------------------
      function a is defined along with its code.
    
    Code Execution phase
    --------------------
      function a invocation is executed and new execution context for function a is created

      Memory Allocation phase of function a invocation
      ------------------------------------------------
        variable 'b' in line ( let b = true ) is declared and initialized with undefined in local memory space ( scope ) of function a's execution context 
        variable 'b' in line ( let b = 1 ) inside if condition block is declared and initialized with undefined in block memory space ( scope ) of function a's execution context.
        variable 'c' in line ( const c = 5 ) inside if condition block is declared and initialized with undefined in block memory space ( scope ) of function a's execution context.
        variable 'd' in line ( var d = 3 ) inside if condition block is declared and initialized with undefined in local memory space ( scope ) of function a's execution context.
        
        variable 'b' in line ( let b = 4 ) inside the nested block is declared and initialized with undefined in a second block memory space ( scope ) of function a's execution context.
        variable 'c' in line ( const c = 5 ) inside the nested block is declared and initialized with undefined in a second block memory space ( scope ) of function a's execution context.
        
      Code Execution phase
      --------------------
        variable 'b' defined in the local memory space ( scope ) will be assigned with true ( let b = true )
        if block condition is validated ( b is true ) // since true, the inner codes will be executed
          variable 'b' defined in block memory space ( scope ) is assigned with 1 ( let b = 1 )
          variable 'c' defined in block memory space ( scope ) is assigned with 2 ( const c = 2 )
          variable 'd' defined in local memory space ( scope ) will be assigned with 3 ( var d = 3 )
  
          inner block starts to execute
            variable 'b' defined in the second block memory space ( scope ) will be assigned with 4 ( let b = 4 )
            variable 'c' defined in the second block memory space ( scope ) will be assigned with 5 ( const c = 5 )
            variable 'd' defined in local memmory space ( scope ) will be re-assigned from 3 to 6 ( d = 6 );
            line ( console.log(b) ) inside nested block will log 4 // nearest block value ( second block memory )
            line ( console.log(c) ) inside nested block will log 5 // nearest block value ( second block memory )
            line ( console.log(d) ) inside nested block will log 6 // local memory space value
          once inner block execution is completed , the second block memory space ( scope ) is removed and garbage collected.
          
          line ( console.log(b) ) inside the if block will log 1 // nearest block value ( first block memory )
          line ( console.log(c) ) inside the if block will log 2 // nearest block value ( first block memory )
          line ( console.log(d) ) inside the if block will log 6 // local space memory value
        
          once if block execution is completed, the first block memory space ( scope ) is removed and garbage collected.
        last line ( console.log(b) ) inside the function a will log true // local memory space value

        once function 'a' execution is completed, the execution context is removed from the stack and garbage collected.

*/
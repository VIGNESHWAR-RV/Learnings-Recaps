/*

  Lexical Environment 
  -------------------

    lexical means "heirarchy".
    
    Lexical environment of the execution context is its local memory space and lexical environment of its parent execution context.

    Lexical environment for global execution context is only its local memory space since it has no ( null ) parent further.

  Scope chain
  -----------

    Scope - place where to look up for variables and functions.

    scope chain - chain of lexical environments from the currently executing execution context to the global execution context.
    
    
  Why Scope Chain
  ---------------

    scope chain is useful to look up for variables and function that are present in parent execution context.

    without scope chain, every execution context should have all the variables and functions defined in them.
    

*/

function parent() {
    child();
    function child () {
        grandChild();
        function grandChild() {
            console.log(val);
        }
    }
}

var val = 6;

parent();

/*
 
  Explanation
  -----------

    Global Execution context along with global object ( window ) will be created.

    Memory Allocation phase
    -----------------------
        function parent is defined along its code
        variable val is declared and initialized with value undefined

    Code Execution Phase
    --------------------
        variable val is assigned with value 6
        function parent invocation is executed and execution context for function parent is created
       
        Parent's Execution Context
        ------------------------
            Memory Allocation Phase
            ----------------------
                function child is defined along with its code
            
            Code Execution Phase
            --------------------
                function child invocation is executed and execution context for function child is created.

                Child's Execution Context
                -----------------------
                    Memory Allocation Phase
                    -----------------------
                        function grandChild is defined along its code.
                    
                    Code Execution Phase
                    --------------------
                        function grandChild invocation is executed and execution context for function grandChild is created.
                        
                        grandChild's Execution Context
                        ------------------------------
                            Memory Allocation Phase
                            -----------------------
                                -
                            Code Execution Phase
                            --------------------
                                first line inside the grandChild ( console.log(val) ) is executed and JS engine looks up for variable val in grandChild's memory space
                                since val is not defined , JS engine will look for variable val in its parent lexical environment ( child's execution context memory space )
                                since val is not defined in child's execution context memory space, JS engine will look for variable val in its parent lexical environment ( parent's execution context memory space )
                                since val is not defined in parent's execution context memory space, JS engine will look for variable val in its parent lexical environment ( global execution context memory space )
                                as 6 is assigned to variable val, the val is logged as 6 in console.

                                ( this lookup is known as scope chain )

                               once done, the grandChild's execution context is removed from stack
                        once done, the child's execution context is removed from stack
                once done, the parent's execution context is removed from stack
        once done, the global execution context is removed from stack
        
                
*/
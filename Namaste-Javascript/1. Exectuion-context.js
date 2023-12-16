/*
  Execution-context is a environment 
  created in call-stack 
  to hold scope variables, function definitions and to execute code  

  it has two phase
   -  Memory creation ( Memory allocation phase )
   -  Thread of Execution ( code execution phase )

  on completion, the execution context will be removed from call-stack and garbage collected.
*/

/*
  Memory Allocation Phase
  ------ ---------- -----

  All variables within the scope environment are declared and initialized with undefined value;
  function definition ( only named functions ) && !( function expressions (anonymous) && arrow function && IIFE  ) are defined with the definition code

  Note 🚨
    Variable type ( var, let, const ) play major role in memory allocation phase
      var type variables
      ------------------
        Memory Allocation phase - variable is declared and initialized with undefiend value
        Code execution phase - variable is assigned with actual value
    
      let type variables
      ------------------
        Memory Allocation phase - variable is declared and initialized with undefined value in the same execution context. ( script scope incase of global execution context ) ( block scope incase theyare defined inside block )
          ----------- Temporal Dead Zone ------------- ( accessing varibales in this zone throws reference error ( "not defined" ) error )
        Code execution phase - variable is assigned with actual value

      const type variables
      --------------------
        Memory Alloction phase - variable is declared and initialized with undefined value in the same execution context. ( script scope incase of global execution context ) ( block scope incase theyare defined inside block )
          ----------- Temporal Dead Zone ------------- ( accessing variables in this zone throws reference error ( "not defined" ) error )
        Code execution phase - variable is assigned with actual value

       -- const type variables must be declared and initialized in same line 

*/ 

/*
  Code Execution Phase
  ---- --------- -----
  
  All the variables will be assigned with respective value and be used for exectuion
  all conditions, block statements and function calls will proceed to execute.

  Note🚨

    function calls will create new Execution-context with its own memory allocation phase and exectuion phase to execute its code
    block statements ( {} ) will execute in same execution context but creates a separate memory ( block ) for variables ( let type , const type ) inside them.
    
    nested execution-context will and can be invoked further and further until reaching the stack overflow limit
  
*/

// Example
  
let examArr = ["I am" , "recursively", "created", "exectuion-context"];

function recursion(arr, index=0) {
  if (index === (arr.length - 1)) {
    return arr[index];
  }
  return arr[index] + " " + recursion(arr, index+1);
};

let result = recursion(examArr);
console.log(result);

// Doubt
/*
  block statements ( {} ) create separate execution context ? 
    they might as they have separate block scoped variables
    they might not as they have no return statement defined in them to switch back the execution to parent execution context.

    Here followed with idea that they would create separate execution context.

    Ans: It executes in the same execution context but creates a separate memory ( block ) for let,const type variables 
*/ 

/*
Explanation - Please take a breadth 
-----------

i) Global Execution Context creation
   ---------------------------------
  
   Memory Allocation Phase
     - variable examArr gets declared and initialized with undefined ( examArr = undefined )
     - function recursion gets declared along with its code;
     - variable result gets declared and initialized with undefined ( result = undefined )  

   Code Execution Phase
     - Variable examArr gets assignes with its respective value ( examArr = ["I am" , "recursively", "created", "exectuion-context"] ) 
     - in order to assign value to result varibale, recursion function call will start to execute

        ii) Exectuion context creation for first recursion call
            ---------------------------------------------------
     
            Memory Allcoation Phase
              - variables defined in parameter ( arr,  index ) gets declared and initialized with undefined ( arr = undefined, index = undefined )
        
            Code Execution Phase
              - variabled defined in parameter ( arr, index ) gets assigned with respective value ( arr = ["I am" , "recursively", "created", "exectuion-context"] , index=0 // default value ) 
              - variables inside the if statement ( second line ) gets executed for boolean validation 
                index = 0; arr.length = 4
                (0 === (4 - 1)) // false 
              - Execution is switched backed to next line of parent execution context ( Exectuion context of first recursion call )   
              - recursion call in the return statement ( third line ) gets executed 
                    
                iii) Execution context creation for second recursion call 
                     ----------------------------------------------------
                    
                    Memory Allocation Phase
                      - variables defined in parameter ( arr,  index ) gets declared and initialized with undefined ( arr = undefined, index = undefined )

                    Code Execution Phase
                      - variabled defined in parameter ( arr, index ) gets assigned with respective value ( arr = ["I am" , "recursively", "created", "exectuion-context"] , index=1 ( 0 + 1 ) ) 
                      - variables inside the if statement (s econd line ) gets executed for boolean validation 
                        index = 1; arr.length = 4
                        (1 === (4 - 1)) // false 
                      - Execution is switched backed to next line of parent execution context ( Exectuion context of second recursion call )   
                      - recursion call in the return statement ( third line ) gets executed 
              
                        iv) Execution context creation for third recursion call 
                            ---------------------------------------------------
                  
                            Memory Allocation Phase
                              - variables defined in parameter ( arr,  index ) gets declared and initialized with undefined ( arr = undefined, index = undefined )
                    
                            Code Execution Phase
                              - variabled defined in parameter ( arr, index ) gets assigned with respective value ( arr = ["I am" , "recursively", "created", "exectuion-context"] , index=2 ( 1 + 1 ) ) 
                              - variables inside the if statement ( second line ) gets executed for boolean validation 
                                index = 2; arr.length = 4
                                (2 === (4 - 1)) // false 
                              - Execution is switched backed to next line of parent execution context ( Exectuion context of third recursion call )  
                              - recursion call in the return statement ( third line ) gets executed 
    
                                v) Execution context creation for fourth recursion call 
                                   ----------------------------------------------------
                          
                                   Memory Allocation Phase
                                     - variables defined in parameter ( arr,  index ) gets declared and initialized with undefined ( arr = undefined, index = undefined )
                       
                                   Code Execution Phase
                                     - variabled defined in parameter ( arr, index ) gets assigned with respective value ( arr = ["I am" , "recursively", "created", "exectuion-context"] , index=3 ( 2 + 1 ) ) 
                                     - variables inside the if statement ( second line ) gets executed for boolean validation 
                                       index = 3; arr.length = 4
                                       (3 === (4 - 1)) // true
                                     - Since if statement is true, it returns with arr[i] => arr[3] => "exectuion-context"
                                     - Execution is switched backed to parent execution context ( Exectuion context of third recursion call ) and this context gets destroyed and garbage collected.
                                                
                              - returned value from fourth recursion call is combined with arr[i] + " " // arr[i] => arr[2] => "created" // ( "created" + " " + "exectuion-context");
                              - Execution is switched backed to parent execution context ( Exectuion context of second recursion call ) and this context gets destroyed and garbage collected.
                                    
                     - returned value from third recursion call is combined with arr[i] + " " // arr[i] => arr[1] => "recursively" // ( "recursively" + " " + "created exectuion-context");
                     - Execution is switched backed to parent execution context ( Exectuion context of first recursion call ) and this context gets destroyed and garbage collected.
                
              - returned value from second recursion call is combined with arr[i] + " " // arr[i] => arr[0] => "I am" // ( "I am" + " " + "recursively created exectuion-context");
              - Execution is switched backed to parent execution context ( Global Execution context ) and this context gets destroyed and garbage collected.
        
     - the returned value from the first recursion call is now assigned to result variable. // result = "I am recursively created exectuion-context";
     - the last line ( console.log ) gets executed and logs the result in console. 
     
     - after executing all the statements , the global context also gets destroyed and garbage collected.
                                      
           
*/




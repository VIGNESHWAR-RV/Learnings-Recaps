
/*
  Function Execution
  ------------------

  Javascript Engine creates a global Execution context and global Object on every instance, initially

  For Every Tab in the browser 
    Javascript Engine creates a global Execution context and Global Object ( window ) even when there is no script to run
    ( window || globalThis || self || frames )
    Fun Fact - this global object also has properties ( window , globalThis, self, frames ) which refers to same global object 
    so,
      window.globalThis.self.frames === frames.self.globalThis.window  // true 😂
      also "this" keyword points to this global object 🤣 

  For Node Js,
    Javascript Engine ( v8 ) creates a global object named ( Global ).

  Memory Allocation phase
  -----------------------
    All the variables (var type) defined in global level ( variables not defined inside function ) will be declared and initialized with undefined
    All the named functions will be defined along with its code.

  Execution Phase
  ---------------
    code execution begins ( line by line ).
    variables will be assigned with their actual value.  
    if,elseif,else,switch ( block-level ) statements would be executed in same execution context. ( creates a separate memory ( block ) for let,const type variables ) 
    function invocations would be executed by creating a separate execution context.
    function invocations inside a function would also be executed by creating a separate execution context but will be scoped as closure. 

*/

console.log(x);

console.log(getName());

var x=6;

console.log(x);

function getName() {
    return "RV";
}

/*
  Explanation
  -----------

  Global Execution Context is created along with global object ( window ) 

  Memory Allocation phase
  -----------------------
    variable x is declared and defined with undefined
    function getName is defined with its code

  Code Execution phase
  --------------------
    first line ( console.log(x) ) is executed and x is logged as undefined
    second line ( console.log(getName()) ) is executed and getName is executed first which creates as separate execution context
      after executed getName function , the return value from getName ( "RV" ) is logged.
    third line variable x is assigned with value 6
    fourth line ( console.log(x) ) is executed and x is logged as 6

  once done, global execution context is removed from call-stack
*/
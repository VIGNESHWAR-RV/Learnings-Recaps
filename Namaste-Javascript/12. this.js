/*
  ( this ) pointer

  - this pointer inside function/method refers to the object on which the function/method is being called.
  - behaves differently for strict/non-strict modes
  
  in Global scope, 
    this keyword always refer to global object ( window in browsers || global in nodeJS ) ( in both strict and non-strict modes )

  inside function scope,
    ( non-strict mode )
     - if function is invoked with object reference, then this pointer inside function refers to that object 
     - if this pointer is defined as ( undefined or null ), it will always be replaced with global object. ( this substitution )
     - if the function is arrow function, this pointer will always refer to the enclosing lexical context of that function.
     - function invoked with new keyword ( constructor function ), it always creates a new object instance and this pointer will refer to that object.
    ( strict mode )
     - if function is invoked with object reference, then this pointer inside function refers to that object 
     - if function is invoked without object reference, this pointer will be undefined ( execption for arrow function and constructor function )
     - if the function is arrow function, this pointer will always refer to the enclosing lexical context of that function.
     - function invoked with new keyword ( constructor function ), it always creates a new object instance and this pointer will refer to that object.

    Note🚨
    ------
      Arrow functions cannot be invoked with new keyword ( would get type error -> "not a constructor" );

  Additionally this pointer reference can be changed with ( call, apply, bind ) methods

  if this keyword used in html dom elements, this pointer points the element in which the function is called



*/
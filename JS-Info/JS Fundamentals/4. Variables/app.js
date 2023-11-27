//  Variables - "named storage" for data

/*
  REAL LIFE ANALOGY
  -----------------

  variables are like boxes with labels 
    they can be used to store anything but we always refer the boxes with their labels

*/ 

/*

    DEFINITION  
    ----------

To define variables, we use three keywords

 var - ( old school ) ( global scope )
 let - ( block scope ) ( often used )
 const - ( block scope ) ( non-changing variables );

 ex: 
 -----------------------------------------------------------------------------------
  var message; ( old school😅 )

  let message;
  message = "hello JS!";
      
      (or)

  let message = "hello JS";

  const BIRTHDAY = "06/Aug/1999"; ( uppercase naming for constant unchanging values ) ( hardcoded values )
  const ageOfUser = 24; ( camelCase naming for temporary static variables );

  NOTE: 
    non-primitive data types are still mutable even when they are defined with const;
    const arr = [1,2,3,4];
    arr = [2,3,4,5]; // trhows error
    arr[0] = 2 // works
 ------------------------------------------------------------------------------------

  - ⚠️🚫☠️ defining variables without keywords under "use strict" throws error
          message = "hello JS";
        without "use strict"
          message = "hello JS";  --->  var message = "hello JS";
  - ⚠️🚫☠️ declaring same variable twice with let or const in same scope would throw error
          let message = "hello JS";
          let message = "hello JS";

*/ 

/*
   NAMING CONVENTION
   -----------------

   DO's
   ----
   - variable should contain only letters, numbers and some special characters ( $, _ );
   - recommended to follow camelCase ( thisIsCamelCaseTyping )
   - recommended to name the varaibale meaningfully in relation to the data it stores ( human-readable names, specific to its value )
   - variable are case sensitive ( apple & Apple & aPple & APPLE ...  are different )
   - separate variables for separate data and data-type
   - CAPITALIZED words with underscore for constant values ( CONSTANT_NAME )

    const COLOR_BLACK = "#000"; ( constant values determined before execution ) 
    const pageLoadTime = getTime(); ( constant values determined at run-time );

   DONT's
   ------
   - ⚠️should not start with numbers
         🚫 let 1b = "bus";
   - ⚠️not recommended to use letters from other langauges ( english is generalized )
         🚫 let имя = 'check';
   - ⚠️should not use reserved words - ( let, var, const, return , class , function , Number, String, Boolean, Array, Object, Symbol 
        switch, case, break and so on ) 
         🚫 let return = 5;
   - ⚠️Avoid declaring multiple variables in single line ( could be confusing )
         🚫 let name = "RV", age = 24, language = "tamil" 

*/ 





"use strict";

/* 

  Introduced in ES5 (2009) which added new features & also modified some existing one.
  it can be declared in top level of the file to enable JS execution in modern (ES5 and after) way.

*/

/* 
   DECLARATION

 1. should always be declared on top level to enable strict mode for entire script file.
 2. ⚠️ declaring in the middle won't enable strict mode. comments can be put above "use strict" keyword.
 3. ⚠️ No going back as "no strict mode", once declared then execution always behaves in modern way.
 4. declaring "use strict" above function enables strict mode for that function alone.

*/

/*
    NO NEED FOR EXPLICIT DECLARATION WHEN

    modern js supports classes and modules, for which "use strict" is enabled by default.
    so we can omit using "use strict", when using those advanced language structures

*/

/*
   NOTE
   
   developer console wont use strict mode by default.
      To enable, writing code with "use strict" in multi-line format should enable strict mode.
      (or)
      code covered with IIFE function and begining with "use strict" as first line inside IIFE
      would enable strict mode. ( old hack )

*/




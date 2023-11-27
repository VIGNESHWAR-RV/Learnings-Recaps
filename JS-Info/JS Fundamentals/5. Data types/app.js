//  Data Types in JavaScript

// values is javascript always has type definition.
// Totally, 8 data types is JS ( number, BigInt, string, boolean, null, undefined, object, symbol )
// In JS, variables can have any type at any time ( dynamic & weakly typed)
   // dynamic -- type of value in a variable is defined during the runtime ( on their execution )
   // weakly typed --  same variable can be initialized with values of different types, whenever needed 
/*
  ex: 
    let num = 6;
    num = "RV";
    num = false;

 */

/*
   Number
   -------
  
   let n = 123;
   n = 12.345;

   represents both integers and floating points
   also include special numerical values -> Infinity, -Infinity, NaN

   Infinity is special value greater than any Number ( 1/0 )
   -Infinity is special value less than any Number ( -1/0 )
   
   NaN - computational error 
   resulting in undefined mathematical operation ( 1 %% 2 )
   or mathematical operation on non-numeric values ( "Number" / 2 )

   NaN is sticky
   mathematical operations on NaN results again in NaN ( except NaN ** 0 is 1 ) ( ** - exponentiation )

   Doing Maths in JS is always safe since it wouldn't throw any fatal error
   At worst, it results in NaN ( sometimes might be difficult to debug )
   
*/

/*
   
  BigInt - recently added in JS ( ES2020 )
  ------

  JS cannot safely represent ( without precision error ) 
    for numbers > ( 2^53 - 1 ) &&  numbers < -(2^53 - 1)  // 2^53-1 = 9007199254740991

  but number type can actually store upto  ( 1.7976931348623157 * 10^308 )
    but outside safe integer range ( 2^53 - 1 ) , there will be precision error 
    as all digits would not fit into 64-bit storage. 
    so approximate value is stored.
  
  ex: 
    9007199254740991 + 1 = 9007199254740992
    9007199254740991 + 2 = 9007199254740992

   so all numbers > ( 2^53 - 1 ) cannot be stored at all in number type

   There are usecases of such big numbers in some areas
   e.g. 
      cryptography 
      microsecond-precision timestamps

   BigInt was introduced to represent numbers of arbitrary length.

   bigint value is created by adding "n" at the end of number
   eg: 
     let num1 = 9007199254740993n;
     let num2 = 6n;

   bigint is not supported in IE

*/

/*
 
  String
  ------

  -> surrounded by quotes( "", '', `` )

  -> single ('') and double ("") quotes are simple quotes and practically have no difference.
     it dont support embedding functionality

  -> backtics are extended functionality quotes.
      it enables to insert variables and expressions inside string by wrapping with ${}
      the expression is evaluated and result becomes part of the string.

  ex: 
    var RV = "Vigneshwar RV"
    alert('Hi' + RV);
    alert("Hi" + RV);
    alert(`Hi ${RV}`);

   Note⚠️
   ------
      There is no char type in JS.
      there are special character type for single character in Java and C , called "char"
      JS has only string type ( string ) and it may consist of zero (or) one (or) many characters.    

*/ 
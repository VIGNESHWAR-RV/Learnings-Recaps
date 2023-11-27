/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
   APPROACH 1 ( not working if there are multiple same characters )

   looping through the string t once, 
   we can find the characters present in string s
   then joining those found characters 
   if string of found characters is exactly equal to the string s
      return true; 
   else
      return false;


    APPROACH 2 ( working )

    looping through the string t once, 
    having a counter with 0 to start from s[counter]  i.e s[0] 
    incrementing counter with 1 on each matching character with s[counter] during loop i.e s[1], s[2]
    finally checking the counter with s.length 
      if equal 
         return true; 
      else 
         return false;
 */
    var isSubsequence = function(s, t) {
    
      const sLength = s.length; 
      const tLength = t.length;
      
      let sCount = 0; 
  
      for( let i=0; i < tLength; i++) {
          if (t[i] === s[sCount]) {
              sCount += 1;
          }
      }
  
      return sCount === sLength;   
      
    };

let s = "abc";
let t = "adbxc";
console.log(isSubsequence(s,t));
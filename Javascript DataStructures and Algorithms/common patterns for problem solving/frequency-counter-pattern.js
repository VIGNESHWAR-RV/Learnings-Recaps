/*
 Frequency Counter Pattern
 -------------------------

   Problem
   -------
      when we have to check for an element in two arrays, we end up looping second array inside the loop of first array ( O(n^2) )

   How this pattern helps
   ----------------------
      instead of nested looping, looping arrays individually to collect information of its element and its frequency ( repeatation ) in separate objects.
      then looping the properties of those objects ( any one ), to find whether the respective element ( property ) is present in both object with exact frequencies.
      
*/

// Example

/*
 Find if the two words are anagram?
   isAnagram("hello", "lohel"); // true
   isAnagram("", "") // true
   isAnagram("cat", "tab") // false

*/

// solution
// --------

   // Understand the problem
     
       // problem restate
          // to create isAnagram function which takes two strings as input and compares them for matching anagram and return Boolean value ( true, false )
          // what are the inputs that can be passed ? // strings
          // what are the output we should get ? // Boolean value
          // is inputs alone enough for output ? // yes

   // example
       // isAnagram("mat", "atm") // true
       // isAnagram("bat", "table") // false
       // isAnagram("true", true) // false
       // isAnagram("false") // false
       // isAnagram("Table", "Labet") // true

   // Break it down
      // check whether two inputs are sting, if not return false
      // check whether two inputs are of same length, if not return false
      // loop over first string to create object with properties as characters in string ( convert characters to lowerCase ) and its value as number of occurances
      // loop over second string to create object with properties as character in string ( convert characters to lowerCase ) and its value as number of occurances
      // loop over the properties of any one of the created object to check that property ( lowerCased character ) with exact value ( number of occurances ) exist in both the objects.
      // if not return false
      // return true at the end

   // solve/simplify
      function isAnagram(str1, str2) {
        if (typeof str1 !== 'string' || typeof str2 !== 'string') {
           return false;
        }

        if (str1.length !== str2.length) {
            return false; 
        }

        let str1Obj = {};
        let str2Obj = {};

        for(let i = 0; i < str1.length; i++) {
          str1Obj[str1[i].toLowerCase()] = (str1Obj[str1[i].toLowerCase()] || 0) + 1;
        }

        for(let j = 0; j < str2.length; j++) {
            str2Obj[str2[j].toLowerCase()] = (str2Obj[str2[j].toLowerCase()] || 0) + 1;
        }
        
        let keys = Object.keys(str1Obj);
        for(let k = 0; k < keys.length; k++) {
            if (!str2Obj[keys[k]]) {
                return false;
            }
            if (str2Obj[keys[k]] !== str1Obj[keys[k]]) {
                return false;
            }
        }

        return true;
      }

      console.log(isAnagram("More", "Rome"));
      console.log(isAnagram("Table", "Labet"));
      console.log(isAnagram("bat", "table"));

    // Loob back and refactor 

      // string type check and length check can be in single if condition
      // use ( for of ) loop for looping arrays & ( for in ) loop for looping objects would be much more readable ( Performance differs though )
       // note 🚨 -  using ( for in ) would also include properties that are declared enumerable true, so we have to use hasOwnProperty to validate that property again.
      // add toLowerCase() at top once to avoid using it two times

      function isAnagramV1(str1, str2) {
        if (typeof str1 !== 'string' || typeof str2 !== 'string' || str1.length !== str2.length) {
           return false;
        }

        let str1Obj = {};
        let str2Obj = {};

        for(let char of str1) {
          char = char.toLowerCase();
          str1Obj[char] = (str1Obj[char] || 0) + 1;
        }

        for(let char of str2) {
            char = char.toLowerCase();
            str2Obj[char] = (str2Obj[char] || 0) + 1;
        }
        
        for(let property in str1Obj) {
            if (str1Obj.hasOwnProperty(property) && !str2Obj.hasOwnProperty(property)) {
                return false;
            }
            if (str1Obj.hasOwnProperty(property) && str2Obj[property] !== str1Obj[property]) {
                return false;
            }
        }

        return true;
      }

      console.log(isAnagramV1("More", "Rome"));
      console.log(isAnagramV1("Table", "Labet"));
      console.log(isAnagramV1("bat", "table"));

        // what author Colt Steele did
          // used only two loops 🤯
            // one to add property ( character ) in obj ( incrementing its frequency ) 
            // one to decrement frequency of property ( character ) ( while decrement , he does a check whether property ( character ) exist in object with min frequency of 1, if not return false )
            // no ( for in ) loop ✅ 
            // also given good name for the Object ( lookUp ) 🫡
       
      function isAnagramV2(str1, str2) {
        if (typeof str1 !== 'string' || typeof str2 !== 'string' || str1.length !== str2.length) {
           return false;
        }
  
        let lookUp = {};
  
        for(let char of str1) {
          char = char.toLowerCase();
          lookUp[char] = (lookUp[char] || 0) + 1;
        }
  
        for(let char of str2) {
          char = char.toLowerCase();
          if(!lookUp[char]) {
            return false;
          } else {
            lookUp[char] -= 1; 
          }
        }
  
        return true;
      }

      console.log(isAnagramV2("More", "Rome"));
      console.log(isAnagramV2("Table", "Labet"));
      console.log(isAnagramV2("bat", "table"));

        
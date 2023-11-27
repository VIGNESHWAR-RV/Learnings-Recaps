/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
    APPROACH
    
storing each char of s with value as respective char of t in mapObj
storing each char of t with value as respective char of s in valObj
during loop,
   if (s[i] exists in mapObj and respective t[i] is not equal to value stored )
      false // since same character in "s" trying to map with two different characters in "t"  
   if ( t[i] exists in valObj and respective s[i] is not equal to value stored )
      false // since two different character in "s" trying to map same character in "t"

*/

var isIsomorphic = function(s, t) {
    
    if(s.length !== t.length) {
        return false;
    }

    let mapObj = {}
    let valObj = {};

    for (let i=0; i<s.length ; i++) {
        let sVar = s[i];
        let tVar = t[i];
        if(mapObj[sVar] && mapObj[sVar] !== tVar) {
            return false;
        } else if (valObj[tVar] && valObj[tVar] !== sVar) {
            return false;
        } else {
            mapObj[sVar] = tVar;
            valObj[tVar] = sVar;
        }
    }

    return true;
};

let s = "egg";
let t = "add";
console.log(isIsomorphic(s, t));
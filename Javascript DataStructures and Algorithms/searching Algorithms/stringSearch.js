

/* Naive String Search */


function stringSearch(str, chars) {

    let count = 0;

    for(let i=0; i<str.length; i++) {
        let matchingChars = 0;
        for(let j=0; j<chars.length; j++) {
          if(chars[j] === str[i+j]) {
            matchingChars++;
          } else {
            break;
          }
        }
        if(matchingChars === chars.length) {
            count++;
        }
    }

    return count;
};

console.log(stringSearch("Hi how are You", "how"));
/*

    APPROACH 2 ( working )

    looping through the string t once, 
    having a counter with 0 to start from s.charAt(counter)  i.e s.charAt(0) 
    incrementing counter with 1 on each matching character with s.charAt(counter) during loop 
       i.e s.charAt(1), s.charAt(2)
    finally checking the counter with s.length(); 
      if equal 
         return true; 
      else 
         return false;

 */

 /*
    NOTE: 
    ⚠️
    string out of range error possibilities in s.charAt(counter)
    so, counter < sLength check is made before.
    
  */

class Solution {
    public boolean isSubsequence(String s, String t) {
        
        int sLength = s.length();
        int tLength = t.length();

        int counter = 0;

        for(int i=0; i < tLength; i++) {
            if(counter < sLength && s.charAt(counter) == t.charAt(i)) {
                counter += 1;
            }
        }

        return (sLength == counter);
    }
}
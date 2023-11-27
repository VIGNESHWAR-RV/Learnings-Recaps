
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

/*

   NOTE
   using HashMap class in java as it supports default functionalities, while Object class don't.

 */


class Solution {
    public boolean isIsomorphic(String s, String t) {

        HashMap<Character, Character> mapObj = new HashMap<Character, Character>();
        HashMap<Character, Character> valObj = new HashMap<Character, Character>();

        int loopLength = s.length(); 
        for(int i=0; i < loopLength; i++) {
            char sVar = s.charAt(i);
            char tVar = t.charAt(i);
            if (mapObj.containsKey(sVar) && mapObj.get(sVar) != tVar) {
                return false;
            } else if (valObj.containsKey(tVar) && valObj.get(tVar) != sVar) {
                return false;
            } else {
                mapObj.put(sVar, tVar);
                valObj.put(tVar, sVar);
            }
        }

        return true;

    }
}
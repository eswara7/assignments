/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
  
function isAnagram(str1, str2) {
    if(Frequencey(str1)==Frequencey(str2)){
      return true;
    }
    return false;
  }
  function Frequencey(str0){
    for(i=0;i<str0.length;i++){
      if(f[str0[i]]==undefined){
        f[str0[i]]=1;
      }
      else{
        f[str0[i]]++;
      }}
      return f;
    }
module.exports = isAnagram;
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if(s.length != t.length){
        return false;
      }
      let map1 = new Map();
      let map2 = new Map();


      for(let char of s){
        map1.set(char,(map1.get(char)||0)+1)
      }
      for(let char of t){
        map2.set(char,(map2.get(char)||0)+1)
      }
                
     for (const [key, value] of map2) {
        const value1=map1.get(key)
        if(value1 != value ){
          return false
        }
     } 

     return true


    }

}

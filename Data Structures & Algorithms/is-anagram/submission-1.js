class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map1 = new Map();
        let map2 = new Map();

        if(s.length != t.length){
            return false
        }
      
        for(const char of s){
            map1.set(char,(map1.get(char) || 0)+1)
        }

        for(const char of t){
            map2.set(char,(map2.get(char) || 0)+1)
        }
    
        for(const [key,value] of map1){
           if (map2.get(key) !== value) {
            return false
           }
        }
        return true
    }
}

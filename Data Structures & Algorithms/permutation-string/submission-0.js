class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */



    checkInclusion(s1, s2) {
      if(s1.length>s2.length) return false;

      let freq1= new Map();
      let freq2= new Map();

      for(const ch of s1){
        freq1.set(ch,(freq1.get(ch)||0)+1)
      }

      let left=0;

      for(let right=0;right<s2.length;right++){
        freq2.set(s2[right],(freq2.get(s2[right])||0)+1)
        
        if(right-left+1>s1.length){
         freq2.set(s2[left],freq2.get(s2[left])-1);

         if(freq2.get(s2[left])==0){
            freq2.delete(s2[left]);
         }
         left++;
        }

        if(right-left+1 ==s1.length && this.isEqual(freq1,freq2)){
            return true
        }
      }
      return false;

      
    }



    isEqual(map1,map2){
        if(map1.size != map2.size) return false;

        for(const [key,value] of map1){
            if(map2.get(key)!== value ){
                return false
            }
        }
        return true
    }


}

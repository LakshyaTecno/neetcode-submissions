class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();
        let left=0,maxf=0;
        let res=0
        for(let right=0;right<s.length;right++){
            map.set(s[right],(map.get(s[right])||0)+1);
            maxf=Math.max(maxf,map.get(s[right]));
            while((right-left+1)-maxf>k){
                 map.set(s[left], map.get(s[left]) - 1);
                 left++
            }
            res=Math.max(res,right-left+1);
        }
        
        return res
    }
}

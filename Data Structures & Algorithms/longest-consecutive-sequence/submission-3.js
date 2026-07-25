class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let maxLength=0
        let set = new Set(nums)

        for(let num of set){

          if(!set.has(num-1)){
            let length =1;
            let current = num;
          
          while(set.has(current+1)){
            current++;
            length++
          }
        
        maxLength= Math.max(maxLength,length )
        
        }
      }

       return maxLength; 
      
    }
}

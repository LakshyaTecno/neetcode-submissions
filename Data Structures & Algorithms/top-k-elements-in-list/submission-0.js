class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      let map = new Map();
       for(let num of nums){
        map.set(num,(map.get(num)||0)+1)
       }
       console.log(map)
       return [...map.entries()]
       .sort((a, b) => b[1] - a[1]) // Sort by values in descending order
       .slice(0, k)                 // Take top `n` entries
       .map(([key, value]) => key); 
    }
}

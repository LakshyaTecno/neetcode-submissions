class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      let map= new Map();
      for(let num of nums){
        map.set(num, (map.get(num)|| 0)+1)
      }
      const sortedMap = new Map(
       [...map.entries()].sort((a, b) => b[1] - a[1]));
      const result =[];

    for (const [key] of sortedMap) {
       if(k==0){
        break
       }else{
        result.push(key)
        k--
       }
    }
    return result;

    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map =new Map();
        for (let num of nums){
            map.set(num,(map.get(num)||0)+1)
        }
        console.log(map)
        //return [...map.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k).map(([key,value])=>key)
       const bucket = Array.from({length:nums.length+1},()=>[])
       for(const [num,freq] of map){
         bucket[freq].push(num)
       }
       const result =[];
       for(let i=bucket.length-1;i>=0 &&result.length<k;i--)
       {
        for(const num of bucket[i]){
            result.push(num)
            if(result.length===k){
                break
            }
        }
       }
       return result;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // for (let i=0;i<nums.length-1;i++){
        //     let val=nums[i];
        //     for(let j=i+1;j<nums.length;j++){
        //       if(val+nums[j]==target){
        //         console.log(i,j)
        //         return [i,j]
        //       }
        //     }  
        // }
       // return [];
    const prevMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (prevMap.has(diff)) {
                return [prevMap.get(diff), i];
            }

            prevMap.set(nums[i], i);
        }

        return [];
        
    }
}

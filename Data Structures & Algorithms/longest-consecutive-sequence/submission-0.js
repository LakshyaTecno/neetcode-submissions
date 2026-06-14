class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // const stack= []
        //  stack.push(nums[0])
        //  console.log(stack[stack.length-1])
        // for(let i=1;i< nums.length;i++){
        //     if(stack[stack.length-1]<nums[i]){
        //         stack.push(nums[i])
        //     }else{
        //         while(stack[stack.length-1]>nums[i]){
        //           stack.pop()
        //         }
        //         stack.push(nums[i])
        //     }
        //     console.log(stack)
        // }
        // return stack.length
        let set =new Set(nums);
        let longest=0;
        for(let num of nums){
            if(!set.has(num-1)){
               let length=1
               while(set.has(num+length)){
                length++
               }
              longest = Math.max(longest, length);
            }
        }
        return longest
    }
}

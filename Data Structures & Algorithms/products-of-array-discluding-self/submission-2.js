class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    
  
     const prefix_prod_arr = new Array(nums.length).fill(1)
     const post_prod_arr = new Array(nums.length).fill(1)
      const res = new Array(nums.length).fill(1)
   
     for(let i=1;i<nums.length;i++){
       prefix_prod_arr[i]=prefix_prod_arr[i-1]*nums[i-1];
     }


     for(let i=nums.length-2;i>=0;i--){
       post_prod_arr[i]=post_prod_arr[i+1]*nums[i+1];
     }


    for(let i=0;i<nums.length;i++){
       res[i]=prefix_prod_arr[i]*post_prod_arr[i];
     }


    return res;
 
   
    }


}

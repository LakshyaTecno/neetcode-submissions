class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let low=0;
        let high= nums.length-1;
         let mid;

        console.log(mid)
            while(low<=high){

                 mid= Math.floor((low+high)/2);
                if(target== nums[mid]){
                    return mid;
                }else if(target>nums[mid]){
                low=mid+1;                
                } else{
                high=mid-1;               
            }
        }

    return -1;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low=0;
        let high=nums.length-1;
         let mid;
        while(low<=high){
             mid = Math.floor((low+high)/2);

            if(nums[mid]==target){
                return mid;
            }
            
            if(nums[low]<=nums[mid]){
                // Left part is sorted 
                if(nums[low]<=target && target<nums[mid]){
                    // target is in left half
                    high=mid-1;
                }else{
                     // target is in right half
                    low=mid+1
                }
              
            }else{
                 // Right part is sorted 
                if(nums[mid]<target && target<=nums[high]){
                    // target is in right half
                    low=mid+1;
                }else{
                   // target is in left half
                    high=mid-1
                }
                
            }
        }
        return -1
    }
}

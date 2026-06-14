class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    //     let result=[];
    //     for(let i=0;i<nums.length-1;i++){
    //         for(let j=i+1;j<nums.length-1;j++){
    //              for(let k=j+1;k<nums.length-1;k++){
    //                 if(nums[i]+nums[j]+nums[k]==0){ const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
    //                 result.push(triplet);
    //                 }
    //              }
    //         }
    //     }
    // let set = new Set(result.map(triplet => JSON.stringify(triplet)));
    // let finalResult = Array.from(set).map(str => JSON.parse(str));
    // return finalResult
    let result=[];
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>0)break;
        if(i>0 && nums[i]==nums[i-1]){
            continue;
        }
        let l=i+1;
        let r=nums.length-1
        while(l<r){
            let sum=nums[i]+nums[l]+nums[r]
            if(sum<0){
             l++
            }else if(sum>0){
              r--
            }else {
             result.push([nums[i],nums[l],nums[r]])
             l++;
             r--;
             while(l<r && nums[l]==nums[l-1]){
                l++
             }
            }
        }
    }
  return result;
 }
}

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let j=numbers.length-1,i=0;
        while(i<j){
            let sum =numbers[i]+numbers[j]
            console.log(sum)
            if(sum==target){
                return[i+1,j+1];
            }else if(sum>target){
              j--
            }else{i++}
        }
    }
}

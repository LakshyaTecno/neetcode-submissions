class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      let countSet = new Set(nums)
      return countSet.size != nums.length
    }
}



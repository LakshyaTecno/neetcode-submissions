class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // let countMap =new Map();
        // nums.forEach(item => {
        //     countMap.set(item,(countMap.get(item) ||0)+1)
        // })

    //     const entries = [...countMap.entries()];

    //      const duplicatesOnly = entries.filter(([key, count]) => count > 1);

    //    const duplicates = duplicatesOnly.map(([key]) => key);
     // const hasDuplicates = nums => new Set(nums).size !== arr.length;
      let countSet = new Set(nums)
      return countSet.size != nums.length
    }
}



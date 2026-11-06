class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dic={}
        for i in range(len(nums)):
            reciprocal=target-nums[i]
            if(reciprocal in dic):
                return [dic[reciprocal],i]
            else:
                dic[nums[i]]=i
        return []



        
class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left=0;
        let right=1
        let maxPro=0
        while(right<prices.length){
            let profit=prices[right]-prices[left];
            if(profit>0){
             maxPro=Math.max(profit,maxPro)
            }else{
                left=right
            }
            right++
        }
        return maxPro
    }
}

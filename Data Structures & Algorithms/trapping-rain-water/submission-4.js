class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n=height.length;
        let leftMaxArr= new Array(n).fill(0);
        let rightMaxArr= new Array(n).fill(0);

        leftMaxArr[0]=height[0];
        rightMaxArr[n-1]=height[n-1];
        let res=0;

        for(let i=1;i<=n-1;i++){
          leftMaxArr[i]=Math.max(leftMaxArr[i-1],height[i])
        }


        for(let i=n-2;i>=0;i--){
          rightMaxArr[i]=Math.max(rightMaxArr[i+1],height[i])
        }


        for(let i=0;i<n;i++){
         res+=Math.min(leftMaxArr[i],rightMaxArr[i])-height[i];
        }

        console.log(leftMaxArr,rightMaxArr)

        return res;
    }
}

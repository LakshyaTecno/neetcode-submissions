class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
    //  let n=height.length;
    //  if(n==0){
    //     return 0
    //  }

    //  let leftMax= new Array(n).fill(0);
    //  let rightMax=new Array(n).fill(0);

    //  leftMax[0]=height[0];
    //  rightMax[n-1]=height[n-1]

    //  for(let i=1;i<n;i++){
        
    //         leftMax[i]=Math.max(leftMax[i-1],height[i])
      
    //  }
    // for(let i=n-2;i>=0;i--){
      
    //         rightMax[i]=Math.max(rightMax[i+1],height[i])
        
    //  }

    //   let res=0;
    //    for (let i = 0; i < n; i++) {
    //         res += Math.min(leftMax[i], rightMax[i]) - height[i];
    //     }
    //     return res;
     if(!height || height.length===0){
        return 0
     }

     let l=0;
     let r=height.length-1;

     let leftMax=height[l];
     let rightMax=height[r];

     let res=0;
     while(l<r){
        if(leftMax<rightMax){
            l++;
            leftMax=Math.max(leftMax,height[l]);
            res+= leftMax-height[l];
        }else{
            r--;
            rightMax=Math.max(rightMax,height[r]);
            res+= rightMax-height[r];
        }
     }
  
    return res

    }
}

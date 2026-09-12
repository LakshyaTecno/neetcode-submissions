class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows= matrix.length;
        const cols= matrix[0].length;

        let low=0;
        let high=rows*cols-1;

        while(low<=high){
            let mid=Math.floor((low+high)/2);
            
            let row= Math.floor(mid/cols);
            let col=mid%cols


            let value=matrix[row][col]

            if(value == target){
                return true
            }else if( target>value){
               low=mid+1;
            }else{
               high=mid-1;
            }
        }
        return false;
    }
}

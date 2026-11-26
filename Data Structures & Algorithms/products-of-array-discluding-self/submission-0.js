class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let p=[];
        let s=[];
        let res=[];

        p[0]=1;
        s[n-1]=1;
        for(let i=1;i<n;i++){
            p[i] = nums[i-1]*p[i-1];
        }
        for(let i=n-2;i>=0;i--){
            s[i] = nums[i+1]*s[i+1];
        }

        for(let i=0;i<n;i++){
            res[i] = s[i]*p[i];
        }
        return res;
    }
}

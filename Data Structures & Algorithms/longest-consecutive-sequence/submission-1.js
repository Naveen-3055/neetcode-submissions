class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let n = nums.length;

        let set = new Set(nums);
        let maxLength=0

        for(let i=0;i<n;i++){
           if(!set.has(nums[i]-1)){
            let len = 1;
            while(set.has(nums[i]+len)){
                len++;
            }
            maxLength = Math.max(maxLength,len);
           }
        }
        return maxLength;
    }
}

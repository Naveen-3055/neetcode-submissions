class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let n = grid.length;
        let m = grid[0].length;

        let maxArea = 0;
        function dfs(r,c){
            let sum =1;
            if(r<0 || c<0 || r>=n || c>=m || grid[r][c]===0){
                return 0;
            }
           
             grid[r][c] = 0;

            sum += dfs(r+1,c);
            sum += dfs(r-1,c);
             sum +=dfs(r,c+1);
             sum += dfs(r,c-1);
             return sum;
        }

        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(grid[i][j] === 1){
                    maxArea = Math.max(maxArea, dfs(i,j))
                }
            }
        }

        return maxArea;
    }
}

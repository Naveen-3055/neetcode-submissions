class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let n = grid.length;
        let m = grid[0].length;
        let islands = 0;

        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(grid[i][j] === "1"){
                    dfs(i,j);
                    islands++;
                }
            }
        }

        function dfs(row,col){
            if(row<0 || col<0 || row>=n || col>=m || grid[row][col]==="0"){
                return;
            }

            grid[row][col] = "0";

            dfs(row+1,col);
            dfs(row-1,col);
            dfs(row,col+1);
            dfs(row,col-1);
        }
        return islands;
    }
}

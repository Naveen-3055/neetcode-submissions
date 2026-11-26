class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let n = strs.length;
        let obj = {};

        for(let str of strs){
            let key = str.split("").sort().join("");
            if(!obj[key]){
                obj[key] = [];
            }
            obj[key].push(str);
        }

        return Array.from(Object.values(obj));
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numdict = {}
        let verdict = false
        for(let i = 0; i < nums.length; i++){
            numdict[nums[i]] = (numdict[nums[i]] ?? 0) + 1
        }

        if(Object.keys(numdict).length != nums.length){
            verdict = true
        }
        return verdict
            
        }

        

        
    }


class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        
        let countarr = [0]
        let count = 0
        for (let i = 0; i < nums.length; i++){
            if(nums[i] === 0){
                count = 0
            }
            else if(nums[i] === 1){
                count++
                countarr.push(count)
            }
        }
        let max = countarr[0]
        for (let j = 1; j < countarr.length; j++){
            if(countarr[j] > max){
                max = countarr[j]
            }
        }

        return max
    }
}

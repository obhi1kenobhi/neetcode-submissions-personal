class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let leng = nums.length
        for (let i = 0; i < leng; i++){
            if(nums.indexOf(val) >= 0){
                nums.splice(nums.indexOf(val),1)
            }
        }

        return nums.length
    }
}

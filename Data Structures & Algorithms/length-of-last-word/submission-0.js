class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let strarr = [...s.trim()]
        let sum = 0
        for(let i = strarr.length - 1; i >= 0; i--){
            if(strarr[i] === ' '){
                break
            }
            sum+=1
            
        }
        return sum
    }
}

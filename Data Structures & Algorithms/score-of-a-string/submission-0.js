class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let asciiarr = Array.from(s).map(s => s.charCodeAt(0))
        let sum = 0
        for(let i = 0; i < asciiarr.length - 1; i++){
            sum = sum + Math.abs(Number(asciiarr[i]) - Number(asciiarr[i+1]))
        }

        return sum
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length){
            return false
        }
        else{
            let s2 = new Set([...s])
            let t2 = new Set([...t])
            let s3 = [...s]
            let t3 = [...t]
            let ssum = 0
            let tsum = 0

            for (let i = 0; i < s3.length; i++){
                ssum += s3[i].charCodeAt(0)
                tsum += t3[i].charCodeAt(0)
            }

            if(s2.size == t2.size && s2.isSubsetOf(t2) && t2.isSubsetOf(s2) && ssum == tsum){
                return true
            }
            else{
                return false
            }
            
           
            //
        }
    }
        

}

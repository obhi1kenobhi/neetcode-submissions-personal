class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let s2 = [...s]
        let t2 = [...t]
        if(s2.length == t2.length){
        for (let i = 0; i < s2.length; i++){
            
            if(t2.includes(s2[i])){
                t2.splice(t2.indexOf(s2[i]),1)
            }
        }
        if(t2.length == 0){
            return true
        }
        else{
            return false
        }
        }
    else{
        return false
    }

    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
         if(s.length > t.length){
            return false
         }
         else{
            let pos = 0
            let subs = []
            for (let i = 0; i < s.length; i++){
                for (let j = pos; j < t.length; j++){
                    if(s[i] == t[j]){
                        subs.push(t[j])
                        pos = j+1
                        break
                    }
                }
            }
            console.log(subs)
            console.log([...s])
            if(subs.length == [...s].length && subs.every((v,ind) => v === [...s][ind])){
                return true
            }
            else{
                return false
            }
         }
    }
}

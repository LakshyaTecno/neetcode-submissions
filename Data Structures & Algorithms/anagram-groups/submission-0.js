class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map =new Map()
        for (let word of strs){
          let key = word.split('').sort().join()
          if(!map.has(key)){
            map.set(key,[])
          }
          map.get(key).push(word)
        }
        console.log(map)
        // Map(3) {
//   'a,c,t' => [ 'act', 'cat' ],
//   'o,p,s,t' => [ 'pots', 'tops', 'stop' ],
//   'a,h,t' => [ 'hat' ]
//}
        return [...map.values()];
    }
}

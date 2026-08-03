class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let item of tokens )
        { 
            if(item =="+" ){
              stack.push(stack.pop()+stack.pop());
            }else if(item =="-")
            {  let b=stack.pop();
               let a=stack.pop()
              stack.push((a-b));
            }else if(item =="/")
            { 
               let b=stack.pop();
               let a=stack.pop()
              stack.push(Math.trunc(a/b));
            }else if(item =="*")
            {
              stack.push(stack.pop()*stack.pop());
            }else{
              stack.push(Number(item));
            }
        }
      return stack.pop()
    }
}




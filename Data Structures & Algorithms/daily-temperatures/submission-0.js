class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
     dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // indices of days still "waiting" for a warmerday

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0) {
          const j = stack[stack.length - 1]; // day index on top ofstack
          if (temperatures[j] >= temperatures[i]) break; // not warmstop
             stack.pop();
             result[j] = i - j;
        }
        stack.push(i); // today joins the waiting list
    }

    return result;
   
}
}

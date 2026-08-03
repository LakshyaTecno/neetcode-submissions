class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        if (t.length > s.length) return "";

        let need = new Map();
        let window = new Map();

        for (const ch of t) {
            need.set(ch, (need.get(ch) || 0) + 1);
        }

        let have = 0;
        let needCount = need.size;

        let left = 0;

        let minLength = Infinity;
        let start = 0;

        for (let right = 0; right < s.length; right++) {

            window.set(
                s[right],
                (window.get(s[right]) || 0) + 1
            );

            if (
                need.has(s[right]) &&
                window.get(s[right]) === need.get(s[right])
            ) {
                have++;
            }

            while (have === needCount) {

                if (right - left + 1 < minLength) {

                    minLength = right - left + 1;
                    start = left;
                }

                window.set(
                    s[left],
                    window.get(s[left]) - 1
                );

                if (
                    need.has(s[left]) &&
                    window.get(s[left]) < need.get(s[left])
                ) {
                    have--;
                }

                left++;
            }
        }

        return minLength === Infinity
            ? ""
            : s.substring(start, start + minLength);
    }
}


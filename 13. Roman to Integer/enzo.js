/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const numero = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let current = numero[s[i]];
        let next = numero[s[i + 1]];

        if (next > current) {
            total += (next - current);
            i++; // Skip the next character as it's already processed
        } else {
            total += current;
        }
    }
    return total;
};

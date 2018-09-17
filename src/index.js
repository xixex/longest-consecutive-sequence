module.exports = function longestConsecutiveLength(array) {
    array =  array.sort((a, b) => a - b);


    let count = 1;
    let maxLength = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] + 1 === array[i + 1]) {
            count++;
        }
        else if (array[i] === array[i + 1]) {
            continue;
        }
        else {
            if (count > maxLength) {
                maxLength = count;
            }
            count = 1;
        }
    }
    return maxLength;
};
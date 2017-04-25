const Path = require('path');
const swap = require(Path.join(__dirname, 'swap.js'));

function sort(arr) {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i; j < arr.length; ++j) {
            if (arr[i] > arr[j]) {
                swap(arr, i, j);
            }
        }
    }
}

function main() {

    const input = [1, 5, 88, 23, 64, 123, 22, 0, 3, 54, 3, 1, 1, 0];

    sort(input);

    console.log(`Sorted: ${input.join(',')}`);

}

main();
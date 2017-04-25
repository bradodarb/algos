const Path = require('path');
const swap = require(Path.join(__dirname, 'swap.js'));



function sort(arr) {

    for (let i = 1; i < arr.length; ++i) {
        let j = i - 1;
        let val = arr[i];

        while (j >= 0 && arr[j] > val) {

            arr[j + 1] = arr[j];
            --j;
        }
        arr[j + 1] = val;

    }
}

function main() {

    const input = [7, 1, 3, 5, 2, 10, 4, 9, 6, 8];

    sort(input);

    console.log(`Sorted: ${input.join(',')}`);

}

main();
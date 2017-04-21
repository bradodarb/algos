
function sort(arr, sorted) {
    let target = 0;
    for (let i = 1; i < arr.length; ++i) {
        if (arr[target] > arr[i]) {
            target = i;
        }
    }
    sorted.push(arr.splice(target, 1));
    if (arr.length > 0) {
        sort(arr, sorted);
    }
}

function main() {

    const input = [1, 5, 88, 23, 64, 123, 22, 0, 3, 54, 3, 1, 1, 0];
    const output = [];
    sort(input, output);

    console.log(`Sorted: ${output.join(',')}`);
}

main();
//# sourceMappingURL=recursive-selection-sort.js.map
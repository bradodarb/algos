function merge(arr, left, right) {

    const sizeL = left.length;
    const sizeR = right.length;

    let i, j = 0;
    let k = 0;
    while (i < sizeL && j < sizeR) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    //drain
    while (i < sizeL) {
        arr[k] = left[i];
        i++;
        k++;
    }
    while (j < sizeR) {
        arr[k] = right[j];
        j++;
        k++;
    }
}

function divide(arr) {
    const length = arr.length;
    if (length > 1) {

        const mid = Math.floor((length - 1) / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);


        merge(arr, divide(left), divide(right));
    }
}

function sort(arr, l, r) {
    if (l < r) {
        const m = Math.floor((l + r) / 2);
        sort(arr, l, m);
        sort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

function main() {
    const input = [1, 54, 23, 87, 0, 2, 123, 0, 12, 52, 48, 59, 73, 3];


    divide(input);

    console.log(`Sorted = ${input.join(',')}`);

}

main();

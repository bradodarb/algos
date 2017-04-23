function merge(arr, left, right) {

    const sizeL = left.length -1;
    const sizeR = right.length -1;

    let i = 0;
    let j = 0;
    let k = 0;

    while (i <= sizeL && j <= sizeR) {
        if (left[i] < right[j]) {
            arr[k] = left[i];
            ++i;
        } else {
            arr[k] = right[j];
            ++j;
        }
        k++;
    }

    //drain
    while (i <= sizeL) {
        arr[k] = left[i];
        i++;
        k++;
    }
    while (j <= sizeR) {
        arr[k] = right[j];
        j++;
        k++;
    }
    console.log(`Merge Result::  ${arr.join(',')}`)
    
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
    if (arr.length > 1 && l < r) {
        const m = Math.floor((r - l + 1) / 2);
        const left = arr.slice(0, m);
        const right = arr.slice(m);

        console.log(`sort left: ${left.join(',')}`);
        sort(left, 0, left.length - 1);
        console.log(`sort right: ${right.join(',')}`);
        sort(right, 0, right.length - 1);
        console.log(`merge: ${left.join(',')} and ${right.join(',')} on ${arr.join(',')}`);
        merge(arr, left, right);
    }
}

function main() {

    const input = [1, 7, 3, 5, 2, 10, 4, 9, 6, 8];
    sort(input, 0, input.length - 1);
    console.log(`Sorted = ${input.join(',')}`);
}

main();

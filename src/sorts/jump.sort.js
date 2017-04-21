// Jump sort


function search(arr, m, x) {
    let i = 0;
    let o = 0;
    while (i < arr.length) {
        if (arr[i] === x) {
            return i;
        }
        if (arr[i] > x) {
            o = i;
            i -= m;
            break;
        }
        i += m;
    }
    if (i >= arr.length - 1) {
        return -1;
    }
    while (i < o) {
        if (arr[i] === x) {
            return i;
        }
        i++;
    }
    return -1;
}

function main() {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 200, 212, 255, 332, 421, 444, 450, 470, 500, 510, 520, 555];
    const m = Math.floor(Math.sqrt(input.length));
    const x = 262;
    const idx = search(input, m, x);

    console.log(idx === -1 ? `Value ${x} not found in array` : `Value ${x} was found @ index ${idx}`);
}

main();

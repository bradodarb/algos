module.exports = function(arr, i, j) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}
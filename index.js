function findMinAndRemoveSorted(arr) {
    return arr.shift();
}

function merge(a, b) {
    const rez = [];
    while (a.length > 0 && b.length > 0) {
        rez.push(a[0] < b[0] ? a.shift() : b.shift());
    }
    return rez.concat(a).concat(b);
}

function mergeSort(arr) {
    return arr.length < 2 ? arr : merge(mergeSort(arr.slice(0, arr.length/2)), mergeSort(arr.slice(arr.length/2, arr.length)));
}

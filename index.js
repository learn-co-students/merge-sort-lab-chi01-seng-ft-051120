function findMinAndRemoveSorted(array) {
    return array.shift()
}

function merge(array1, array2) {
    let sorted = []
    while ((array1.length !== 0) && (array2.length !== 0)) {
        if (array1[0] < array2[0]) {
            sorted.push(findMinAndRemoveSorted(array1))
        } else {
            sorted.push(findMinAndRemoveSorted(array2))
        }
    }
    return sorted.concat(array1).concat(array2)
}

function mergeSort(array) {
    let midpoint = array.length / 2
    let array1 = array.slice(0, midpoint)
    let array2 = array.slice(midpoint)

    if (array.length < 2) {
        return array
    } else {
        return merge(mergeSort(array1), mergeSort(array2))
    }
}


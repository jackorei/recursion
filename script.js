//fib
function fibs(n) {
    let fibarray = [0, 1]

    for (let i = 2; i < n; i++) {
        let a = fibarray[i - 1]
        let b = fibarray[i - 2]
        fibarray.push(a + b)
    }
    return fibarray
}

function rfibs(n) {
    if (n === 1) {
        return [0]
    }
    else if (n === 2) {
        return [0, 1]
    }

    let prevArray = rfibs(n-1)
    console.log(prevArray)
    let nextNum = prevArray[prevArray.length - 1] + prevArray[prevArray.length - 2]
    prevArray.push(nextNum)
    console.log(prevArray)
    return prevArray
}



//mergesort
function mergeSort(array) {
    if (array.length === 1) {
        return array
    }

    let middle = Math.round(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle)

    let leftSorted = mergeSort(left)
    let rightSorted = mergeSort(right)

    return merge(leftSorted, rightSorted)
}

function merge(left, right) {
    let result = []

    while (left.length && right.length) {
        if (left[0] > right[0]) {
            result.push(right.shift())
        }
        else {
            result.push(left.shift())
        }
    }

    return result.concat(left, right)
}
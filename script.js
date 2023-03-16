const arr1 = [1,2]
const arr2 = [3,4]
const arr3 = [5,6]

const rule = (...arr) => {
    return [].concat(...arr)
}

const oneArray = rule(arr1, arr2)
const oneArray2 = rule(arr1, arr2, arr3)
console.log(oneArray)
console.log(oneArray2)
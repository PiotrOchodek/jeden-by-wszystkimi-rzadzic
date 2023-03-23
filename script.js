const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const rule = (...arr) => {
  return [...arr].flat();
};

const oneArray = rule(arr1, arr2);
const oneArray2 = rule(arr1, arr2, arr3);
const allArrays = oneArray.concat(oneArray2);
const allArrays2 = [...oneArray, ...oneArray2];
console.log(allArrays);
console.log(allArrays2);
console.log(oneArray);
console.log(oneArray2);

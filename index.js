"use strict";
// This function takes the parameter and return itself
function identity(param) {
    return param;
}
console.log(identity("hello"));
// This function takes an array of elements and return it in reverse order
function reverseArray(array) {
    return array.reverse();
}
const initalArray = ["a", "b", "c", "d"];
console.log("Reversed array: ", reverseArray(initalArray));
//Generic Object Mapper
function mapObject(obj, mapFunc) {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = mapFunc(obj[key]);
        }
    }
    return result;
}
const mappedObj = mapObject({ a: 1, b: 2 }, (x) => x.toString());
console.log("mappedObj", mappedObj);
//Generic Filtering
function filterArray(array, predicate) {
    return array.filter(predicate);
}
// Example usage
console.log(filterArray([1, 2, 3, 4], (x) => x % 2 === 0));

/**
 * Returns the input value as-is, preserving its type.
 * @param arg - The value of any type T
 * @returns The input value of the same type T
 * @typeParam T - The type of the input and output
 */
function identity<T>(param: T): T {
  return param;
}

console.log(identity("hello")); //example from assignment
// Test cases for identity function
console.log(identity<number>(1)); // Expected output: 1
console.log(identity<boolean>(true)); // Expected output: true

/**
 * Reverses the input array of elements of any type T.
 * @param array - An array of elements of type T
 * @returns A new array with the elements in reverse order
 * @typeParam T - The type of the elements in the input and output arrays
 */
function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}
const initalArray = ["a", "b", "c", "d"];

console.log("Reversed array: ", reverseArray(initalArray)); //assignment example
// Test cases for reverseArray function
console.log(reverseArray<number>([1, 2, 3, 4])); // Expected output: [4, 3, 2, 1]
console.log(reverseArray<string>(["a", "b", "c"])); // Expected output: ["c", "b", "a"]
console.log(reverseArray<boolean>([true, false, true])); // Expected output: [true, false, true]

/**
 * Maps over the values of an object and applies a mapping function to each value.
 * @param obj - The input object with keys of type K and values of type V
 * @param mapFunc - A function that maps a value of type V to type U
 * @returns A new object with the same keys but values of type U
 * @typeParam K - The type of the keys in the object
 * @typeParam V - The type of the values in the input object
 * @typeParam U - The type of the values in the output object
 */
function mapObject<K extends string | number | symbol, V, U>(
  obj: Record<K, V>,
  mapFunc: (value: V) => U
): Record<K, U> {
  const result: Record<K, U> = {} as Record<K, U>;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = mapFunc(obj[key]);
    }
  }
  return result;
}

const mappedObj = mapObject({ a: 1, b: 2 }, (x) => x.toString());
console.log("mappedObj", mappedObj);
// Test cases for mapObject function
console.log(mapObject({ x: 10, y: 20 }, (x) => x + 5)); // Expected output: { x: 15, y: 25 }
console.log(mapObject({ p: true, q: false }, (x) => !x)); // Expected output: { p: false, q: true }

/**
 * Filters elements of an array based on a predicate function.
 * @param array - An array of elements of type T
 * @param predicate - A function that returns a boolean for each element of type T
 * @returns A new array with elements that satisfy the predicate
 * @typeParam T - The type of the elements in the input and output arrays
 */
function filterArray<T>(array: T[], predicate: (value: T) => boolean): T[] {
  return array.filter(predicate);
}

console.log(filterArray<number>([1, 2, 3, 4], (x) => x % 2 === 0));
// Test cases for filterArray function
console.log(
  filterArray<string>(["apple", "banana", "avocado"], (x) => x.startsWith("a"))
); // Expected output: ["apple", "avocado"]
console.log(filterArray<boolean>([true, false, true], (x) => x)); // Expected output: [true, true]

// This function takes the parameter and return itself
function identity<T>(param: T): T {
  return param;
}
console.log(identity("hello"));

// This function takes an array of elements and return it in reverse order
function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}
const initalArray = ["a", "b", "c", "d"];
console.log("Reversed array: ", reverseArray(initalArray));

//Generic Object Mapper
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

//Generic Filtering
function filterArray<T>(array: T[], predicate: (value: T) => boolean): T[] {
  return array.filter(predicate);
}

console.log(filterArray<number>([1, 2, 3, 4], (x) => x % 2 === 0));

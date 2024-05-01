/*
Homework 5
Deadline: 2 May

Task 1: Advanced Array Filtering
Create a function called customFilterUnique that takes an array and a callback function as arguments. The customFilterUnique function should filter the array using the callback function to determine uniqueness. The resulting array should contain only unique elements based on the callback's logic.
Use the customFilterUnique function to filter an array of objects based on a specific property and return only unique objects.

Task 2: Array Chunking
Create a function called chunkArray that takes an array and a chunk size as arguments. The chunkArray function should divide the array into smaller arrays, each containing elements of the specified chunk size. The function should return an array of arrays.
Optimize the chunkArray function to minimize memory usage while chunking the array.

Task 3: Array Shuffling
Create a function called customShuffle that takes an array as an argument and returns a new array with its elements randomly shuffled.
Implement the customShuffle function using an efficient shuffling algorithm to achieve uniform randomness.

Task 4: Array Intersection and Union
Create a function called getArrayIntersection that takes two arrays as arguments and returns a new array containing the common elements between the two arrays.
Create a function called getArrayUnion that takes two arrays as arguments and returns a new array containing all unique elements from both arrays, without any duplicates.

Task 5: Array Performance Analysis
Implement a function called measureArrayPerformance that takes a function and an array as arguments. The measureArrayPerformance function should execute the provided function with the given array as input and measure the execution time.
Use the measureArrayPerformance function to compare the performance of built-in array methods (map, filter, reduce, etc.) against your custom array manipulation functions.
*/
//
//
// Task 1: Advanced Array Filtering
const customFilterUnique = (arrayOfObjects, callbackFn) => {
  const uniqueObjects = [];
  const uniqueObjectsSet = new Set();
  for (const obj of arrayOfObjects) {
    const filteredObj = callbackFn(obj);
    if (filteredObj) {
      const objString = JSON.stringify(filteredObj);
      if (!uniqueObjectsSet.has(objString)) {
        uniqueObjects.push(filteredObj);
        uniqueObjectsSet.add(objString);
      }
    }
  }
  return uniqueObjects;
};
//
//
// Task 2: Array Chunking
function chunkArray(array, chunkSize) {
  const chunkedArrays = [];
  let startIndex = 0;
  while (startIndex < array.length) {
    const chunk = array.slice(startIndex, startIndex + chunkSize);
    chunkedArrays.push(chunk);
    startIndex += chunkSize;
  }
  return chunkedArrays;
}
//
//
// Task 3: Array Shuffling
function customShuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
//
//
//Task 4: Array Intersection and Union
function getArrayIntersection(array1, array2) {
  const set1 = new Set(array1);
  const intersection = [];
  for (const element of array2) {
    if (set1.has(element)) {
      intersection.push(element);
    }
  }
  return intersection;
}
//
function getArrayUnion(array1, array2) {
  const set1 = new Set(array1);
  for (const element of array2) {
    set1.add(element);
  }
  return [...set1];
}
//
//
// Task 5: Array Performance Analysis
function measureArrayPerformance(fn, array) {
  const startTime = performance.now();
  fn(array);
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  return executionTime;
}
//
//
// Examples:
// Task 1: Advanced Array Filtering
console.log("// Testing - Task 1: Advanced Array Filtering");
console.log("// Testing - Task 1: Example 1");
let arrayOfObjects = [
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { a: 5, b: 6 },
  { e: 7, f: 8 },
  { g: 9, h: 0 },
];
const filterByPropertyA = (obj) => {
  if (!obj || typeof obj !== "object")
  throw new Error("pass an object as parameter");
return Object.keys(obj).includes("a") ? obj : undefined;
};
console.log(customFilterUnique(arrayOfObjects, filterByPropertyA));
// Output: [{ a: 1, b: 2 }, { a: 5, b: 6 }]
//
console.log("// Testing - Task 1: Example 2");
const arrayOfObjects2 = [
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Jane', age: 25, city: 'London' },
  { name: 'Bob', age: 35, city: 'New York' },
  { name: 'Alice', age: 28, city: 'Paris' },
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Jane', age: 25, city: 'London' },
  { name: 'John', age: 25, city: 'Paris' },
];
const filterByCity = (obj) => {
  if (!obj || typeof obj !== 'object') {
    throw new Error('Pass an object as a parameter');
  }
  return obj.city === 'New York' ? obj : undefined;
};
console.log(customFilterUnique(arrayOfObjects2, filterByCity));
//
console.log("// Testing - Task 1: Example 3");
const filterByAge = (obj) => {
  if (!obj || typeof obj !== 'object') {
    throw new Error('Pass an object as a parameter');
  }
  return obj.age === 25 ? obj : undefined;
};
console.log(customFilterUnique(arrayOfObjects2, filterByAge));
//
// Task 2: Array Chunking
console.log("// Testing - Task 2: Array Chunking");
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkSize = 3;
const chunkedArrays = chunkArray(originalArray, chunkSize);
console.log(chunkedArrays); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
//
//
// Task 3: Array Shuffling
console.log("// Testing - Task 3: Array Shuffling");
const shuffledArray = customShuffle(originalArray);
console.log(shuffledArray); // Output(example): [ 10, 2, 1, 5, 9, 8, 3, 4, 6, 7 ] (or any other random permutation)
//
//
// Task 4: Array Intersection and Union
console.log("// Testing - Task 4: Array Intersection and Union");
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const intersection = getArrayIntersection(array1, array2);
console.log(intersection); // Output: [4, 5]
//
const union = getArrayUnion(array1, array2);
console.log(union); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
//
//
// Task 5: Array Performance Analysis
console.log("// Testing - Task 5: Array Performance Analysis");
// Custom array manipulation function
function doubleElements(array) {
  return array.map((num) => num * 2);
}
// Built-in array method
function filterEvenNumbers(array) {
  return array.filter((num) => num % 2 === 0);
}
const largeArray = Array.from({ length: 1000000 }, () =>
  Math.floor(Math.random() * 1000)
);
const customFunctionTime = measureArrayPerformance(doubleElements, largeArray);
const builtInMethodTime = measureArrayPerformance(
  filterEvenNumbers,
  largeArray
);
console.log(
  `Custom function execution time: ${customFunctionTime.toFixed(2)} ms`
);
console.log(
  `Built-in method execution time: ${builtInMethodTime.toFixed(2)} ms`
);
/* Output(example): 
Custom function execution time: 8.43 ms
Built-in method execution time: 14.14 ms
*/

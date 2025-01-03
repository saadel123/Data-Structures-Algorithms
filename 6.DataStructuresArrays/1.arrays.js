const strings = ['a', 'b', 'c', 'd'];
const numbers = [1, 2, 3, 4, 5];

// Variable array is somewhere in memory, and the computer knows it.
// When I do array[2], I'm telling the computer, hey, go to the array and grab the 3rd item from where the array is stored.

// Push onto the end of the array
strings.push('e'); // O(1) - Adding an element to the end of the array is a constant time operation.

// Pop removes the last item from an array
strings.pop(); // O(1) - Removing the last element from the array is also a constant time operation.

// Unshift adds an element to the beginning of the arrays
strings.unshift('x'); // O(n) - Adding an element to the beginning of the array requires shifting all existing elements one position to the right.

// Shift removes the first item from an array
strings.shift(); // O(n) - Removing the first element from the array also requires shifting all existing elements one position to the left.

// Splice allows adding an element at a specific position in the array

strings.splice(2, 0, 'alien'); // O(n) - Adding an element at a specific index requires shifting elements to accommodate the new element. (استيعاب العنصر الجديد.)
//0 Used to mention how many element you want to remove from the array and it starts from 0

// Concatenation: Combines two or more arrays into a new array
const combinedArray = strings.concat(numbers); // O(m + n) - Creating a new array by combining two arrays has a time complexity proportional to the size of the resulting array.

// Slice: Extracts a portion of an array into a new array
const slicedArray = strings.slice(1, 3); // O(k) - Where k is the number of elements in the sliced portion.

// IndexOf: Finds the index of the first occurrence of an element in an array
const index = strings.indexOf('c'); // O(n) - In the worst case, it may need to search the entire array.

// Includes: Checks if an element exists in an array
const includesC = strings.includes('c'); // O(n) - In the worst case, it may need to search the entire array.

console.log(strings);
console.log(combinedArray);
console.log(slicedArray);
console.log(index);
console.log(includesC);



/*
Common Array Methods (Available in ES5 and ES6):

push(): Adds one or more elements to the end of an array.

pop(): Removes and returns the last element of an array.

unshift(): Adds one or more elements to the beginning of an array.

shift(): Removes and returns the first element of an array.

concat(): Combines two or more arrays into a new array.

slice(): Extracts a portion of an array into a new array.

indexOf(): Finds the index of the first occurrence of an element in an array.

includes(): Checks if an element exists in an array.

ES6 Array Methods (New in ES6):

find(): Returns the first element in an array that satisfies a provided testing function.

findIndex(): Returns the index of the first element in an array that satisfies a provided testing function.

forEach(): Calls a function for each element in the array.

map(): Creates a new array by applying a function to each element in the array.

filter(): Creates a new array with all elements that pass a provided test.

reduce(): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

reduceRight(): Similar to reduce(), but processes the array from right to left.

some(): Checks if at least one element in the array satisfies a provided test.

every(): Checks if all elements in the array satisfy a provided test.

sort(): Sorts the elements of an array in place and returns the sorted array.

reverse(): Reverses the order of the elements in an array in place.

join(): Joins all elements of an array into a string.

toString(): Returns a string representation of an array.

Array.from(): Creates a new array from an iterable object (e.g., array-like objects, maps, sets, etc.).

Array.of(): Creates a new array with the specified elements.

Array.isArray(): Checks if a value is an array.
*/
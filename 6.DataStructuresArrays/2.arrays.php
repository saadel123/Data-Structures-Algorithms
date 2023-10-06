<?php
$strings = ['a', 'b', 'c', 'd',5,9];
$numbers = [1, 2, 3, 4, 5];

// Variable array is somewhere in memory, and the computer knows it.
// When I do array[2], I'm telling the computer, hey, go to the array and grab the 3rd item from where the array is stored.

// Push onto the end of the array
array_push($strings, 'e'); // O(1) - Adding an element to the end of the array is a constant time operation.

// Pop removes the last item from an array
array_pop($strings); // O(1) - Removing the last element from the array is also a constant time operation.
array_pop($strings);

// Unshift adds an element to the beginning of the arrays
array_unshift($strings, 'x'); // O(n) - Adding an element to the beginning of the array requires shifting all existing elements one position to the right.

// Shift removes the first item from an array
array_shift($strings); // O(n) - Removing the first element from the array also requires shifting all existing elements one position to the left.

// Splice allows adding an element at a specific position in the array
array_splice($strings, 2, 0, 'alien'); // O(n) - Adding an element at a specific index requires shifting elements to accommodate the new element.

// Concatenation: Combines two or more arrays into a new array
$combinedArray = array_merge($strings, $numbers); // O(m + n) - Creating a new array by combining two arrays has a time complexity proportional to the size of the resulting array.

// Slice: Extracts a portion of an array into a new array
$slicedArray = array_slice($strings, 1, 2); // O(k) - Where k is the number of elements in the sliced portion.

// IndexOf: Finds the index of the first occurrence of an element in an array
$index = array_search('c', $strings); // O(n) - In the worst case, it may need to search the entire array.

// Includes: Checks if an element exists in an array
$includesC = in_array('c', $strings); // O(n) - In the worst case, it may need to search the entire array.

print_r($strings);
echo "\n"; // Line break
print_r($combinedArray);
echo "\n"; // Line break
print_r($slicedArray);
echo "\n"; // Line break
echo "Index of 'c': $index\n";
echo "Includes 'c': " . ($includesC ? 'true' : 'false') . "\n";
?>

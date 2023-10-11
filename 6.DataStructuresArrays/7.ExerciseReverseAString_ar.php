<?php

function reverseString($str)
{
  if (is_string($str) && strlen($str) >= 2) {
    $reversedWord = "";
    for ($i = strlen($str) - 1; $i >= 0; $i--) {
      $reversedWord .= $str[$i] . "";
    }
    echo $reversedWord. " -------- ";
  } else {
    return $str; // Return the input string for invalid input
  }
}

reverseString("Hello World i'm saad");


function reverseString2($str)
{
  // Check for valid input
  if (is_string($str) && strlen($str) >= 2) {
    // Split the string into an array of characters, reverse it, and then join it back into a string
    return implode('', array_reverse(str_split($str)));
  } else {
    return $str; // Return the input string for invalid input
  }
}

// Example usage see the comment for explnation:
$inputString = "Hello, World!";
$reversedString = reverseString2($inputString);
echo $reversedString;


/*
Certainly! Let's break down the line `return implode('', array_reverse(str_split($str)));` in PHP step by step:

1. `$str_split($str)`:
   - `str_split($str)` is a PHP function that takes a string `$str` and splits it into an array of characters.
   - For example, if `$str` is `"Hello"`, `str_split($str)` would produce an array `['H', 'e', 'l', 'l', 'o']`, where each character is a separate element in the array.

2. `array_reverse($array)`:
   - `array_reverse($array)` is another PHP function that takes an array `$array` and reverses the order of its elements.
   - For example, if you have an array `$array = [1, 2, 3]`, `array_reverse($array)` would produce `[3, 2, 1]`.

3. `implode('', $array)`:
   - `implode('', $array)` is a PHP function that takes an array `$array` and joins its elements into a single string, using an empty string `''` as the glue between the elements.
   - It essentially combines the characters in the reversed array into a single string.

   Example:
   $array = ['H', 'e', 'l', 'l', 'o'];

 Join the elements of the array into a single string using an empty string as the glue
$result = implode('', $array);

Output the result
echo $result; //Hello


So, when you put these functions together:

- `str_split($str)` splits the input string into an array of characters.
- `array_reverse()` reverses the order of the characters in the array.
- `implode('', ...)` joins the reversed characters back together into a single string.

Overall, the line `return implode('', array_reverse(str_split($str)));` effectively reverses the input string `$str` by splitting it into characters, reversing their order, and then joining them back into a string.
*/
/*
count():

Use count() when working with arrays, including indexed arrays, associative arrays, and multidimensional arrays.
It is commonly used to iterate through the elements of an array using a loop, such as a for loop or foreach loop.

Example:
php
$array = [1, 2, 3, 4, 5];
$count = count($array); // Gets the number of elements in the array
strlen():

Use strlen() when working with strings to determine the length of the string, which represents the number of characters in the string.
It is often used when manipulating or iterating over the characters of a string using a loop.

Example:
php
$str = "Hello, World!";
$length = strlen($str); // Gets the length (number of characters) of the string
In summary, use count() for arrays and strlen() for strings. They serve different purposes based on the data type you are working with.
*/

<?php

// $array1 = ['A', 'B', 'C'];
// $array2 = ['D', 'E', 'F', 'C'];

function commonItem($array1, $array2)
{
    // Validate input arrays
    if (!is_array($array1) || count($array1) === 0 || !is_array($array2) || count($array2) === 0) {
        echo "Please provide valid arrays";
        return false;
    }

    $checkItem = [];

    // Populate the map with elements from $array1
    for ($i = 0; $i < count($array1); $i++) {
        $checkItem[$array1[$i]] = true;
    }

    // Check for common items in $array2
    for ($j = 0; $j < count($array2); $j++) {
        // Use isset() to avoid warnings for non-existent keys
        if (isset($checkItem[$array2[$j]])) {
            echo "Common item found: " . $array2[$j] . "\n";
            return true;
        }
    }

    echo "No common items found\n";
    return false;
}

// Example Usage:
$array1 = ['a', 'b', 'c'];
$array2 = ['d', 'e', 'f', 'c'];

commonItem($array1, $array2);




// Check for common items
// common($array1);
// $commonItems = containsCommonItem2($array1, $array2);

// if ($commonItems) {
//     echo "There are common items between the arrays.\n";
// } else {
//     echo "There are no common items between the arrays.\n";
// }


// function containsCommonItem2($array1, $array2)
// {
//     $map = [];
//     for ($i = 0; $i < count($array1); $i++) {
//         $map[$array1[$i]] = true;
//     }
//     for ($j = 0; $j < count($array2); $j++) {
//         if (isset($map[$array2[$j]])) {
//             //or if ($map[$array2[$j]] == true) {
//             echo "Common item found " . $map[$array2[$j]];
//             return;

//         }
//     }
//     echo "No item found";
// }

// //the same methode using foeach
// function containsCommonItem($array1, $array2)
// {
//     // Step 1: Convert the first array into a hash map
//     $hashMap = [];
//     foreach ($array1 as $item) {
//         $hashMap[$item] = true; // Store the item as a key in the hash map
//     }

//     // Step 2: Check if any element of the second array exists in the hash map
//     foreach ($array2 as $item2) {
//         if (isset($hashMap[$item2])) { // Check if the item is in the hash map
//             return true;
//         }
//     }

//     return false;
// }




// // Test data
// $array1 = ['A', 'B', 'C'];
// $array2 = ['D', 'E', 'F', 'C'];

// function common($array1, $array2)
// {
//     $hashmap = [];
//     foreach ($array1 as $item) {
//         $hashmap[$item] = true;
//     }

//     foreach ($array2 as $item2) {
//         if ($hashmap[$item2] = true) {
//             echo "Common item was found!";
//             return true;
//         }
//         echo "No Common item found!";
//         return false;
//     }
// }

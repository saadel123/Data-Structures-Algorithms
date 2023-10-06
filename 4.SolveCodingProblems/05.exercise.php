<?php
// run php server https://www.youtube.com/watch?v=zT6QrGIfXaU

function containsCommonItem2($array1, $array2)
{
    for ($item = 0; $item < count($array1); $item++) {
        for ($item2 = 0; $item2 < count($array2); $item2++) {
            if ($array1[$item] === $array2[$item2]) {
                return true;
            }
        }
    }
    return false;
}

// Function to check for common items
// function containsCommonItem3($arr1, $arr2)
// {
//     foreach ($arr1 as $item) {
//         if (in_array($item, $arr2)) {
//             return true;
//         }
//     }
//     return false;
// }

// function containsCommonItem2($array1, $array2) {
//     $commonItems = array_intersect($array1, $array2);
//     return !empty($commonItems);
// }


// Test data
$array1 = ['A', 'B', 'C'];
$array2 = ['K', 'L', 'B'];

// Check for common items
$commonItems = containsCommonItem2($array1, $array2);

if ($commonItems) {
    echo "There are common items between the arrays.\n";
} else {
    echo "There are no common items between the arrays.\n";
}

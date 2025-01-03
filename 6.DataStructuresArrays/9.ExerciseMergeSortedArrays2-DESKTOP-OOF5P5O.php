<?php

// [0>3 ? 3 ]
function mergeSortedArrays($array1, $array2)
{
    $mergedArray = array_merge($array1, $array2);
    // sort($mergedArray);
    $newArray = [];
    for ($i = 0; $i < count($mergedArray) - 1; $i++) {
        if ($mergedArray[$i] > $mergedArray[$i + 1]) { //0 > 3 = ! - 3 > 2 = 3 -  >  = ! -  >  = ! -
            $newArray[$i] = $mergedArray[$i + 1];
        } else {
            $newArray[$i] = $mergedArray[$i]; //0 - ! - - - -
        }
    }
    return $newArray;

}

function mergeSortedArrays2($array1, $array2)
{
    $mergedArray = [];
    $array1Item = $array1[0] ?? null;
    $array2Item = $array2[0] ?? null;
    $i = 1;
    $j = 1;

    if (count($array1) === 0) {
        return $array2;
    }
    if (count($array2) === 0) {
        return $array1;
    }

    while ($array1Item !== null || $array2Item !== null) {
        if ($array2Item === null || ($array1Item !== null && $array1Item < $array2Item)) {
            $mergedArray[] = $array1Item;
            $array1Item = $array1[$i] ?? null;
            $i++;
        } else {
            $mergedArray[] = $array2Item;
            $array2Item = $array2[$j] ?? null;
            $j++;
        }
    }
    return $mergedArray; // Return the complete merged array
}

$array1 = [0, 3, 10, 1, 2];
$array2 = [4, 6, 5];
$result = mergeSortedArrays2($array1, $array2);
print_r($result);

?>
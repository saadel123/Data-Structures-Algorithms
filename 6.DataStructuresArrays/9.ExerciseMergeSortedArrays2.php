<?php
$array1 = [0, 3, 10, 1, 2];
$array2 = [4, 6, 5];
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
    $array1Item = $array1[0];
    $array2Item = $array2[0];
    $i = 0;
    $j = 0;
    if (strlen($array1) < 0) {
        return $array2;
    }
    if (strlen($array2) < 0) {
        return $array1;
    }
    while ($array1Item || $array2Item) {
        if (isset($array2Item) ||  $array1Item > $array2Item) {
            array_push($mergedArray, $array1Item);
            $array1Item = $array1[$i];
            $i++;
        } else {
            array_push($mergedArray, $array2Item);
            $array2Item = $array2[$j];
            $j++;
        }
    }
}




$result = mergeSortedArrays2($array1, $array2);
print_r($result);

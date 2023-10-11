<?php

function mergeSortedArrays2($array1, $array2)
{
  $mergedArray = [];
  $i = 0;
  $j = 0;

  if (count($array1) === 0) {
    return $array2;
  }
  if (count($array2) === 0) {
    return $array1;
  }

  while ($i < count($array1) || $j < count($array2)) {
    if ($j >= count($array2) || ($i < count($array1) && $array1[$i] < $array2[$j])) {
      $mergedArray[] = $array1[$i];
      $i++;
    } else {
      $mergedArray[] = $array2[$j];
      $j++;
    }
  }

  return $mergedArray;
}

$array1 = [1, 3, 5];
$array2 = [2, 4, 6];
$result = mergeSortedArrays2($array1, $array2);
echo implode(", ", $result) . "\n";
print_r($result);


function mergeSortedArrays3($array1, $array2)
{
  $mergedArray = array_merge($array1, $array2);
  sort($mergedArray);
  return $mergedArray;
}

$array1 = [1, 3, 2, 5, 4];
$array2 = [6, 8, 10, 7, 9];
$result = mergeSortedArrays3($array1, $array2);
print_r($result);

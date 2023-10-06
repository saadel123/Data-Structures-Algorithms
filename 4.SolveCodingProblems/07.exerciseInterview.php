<?php

function HasPairWithSum($data, $sum)
{
    $low = 0;
    $hi = count($data) - 1;
    while ($low < $hi) {
        $pair = $data[$low] + $data[$hi];
        if ($pair === $sum) {
            return true;
        }
        $low++;
        $hi--;
    }

    return false;
}

function hasPairWithSum2($arr, $sum) {
  $mySet = [];
  $len = count($arr);
  for ($i = 0; $i < $len; $i++) {
    if(isset($mySet[$arr[$i]])){ //myset[1]
      return true;
    }
    $mySet[$sum - $arr[$i]] = true;
  }
  return false;
}

// Test data
$data = [1, 2, 3, 4];
$sum = 6;

// Check for common items
$pairWithSum = HasPairWithSum($data, $sum);

if ($pairWithSum) {
  echo "There are a pair items between the arrays.\n";
} else {
  echo "There are no pair items between the arrays.\n";
}

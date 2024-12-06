<?php

//this is my example and not working
// function HasPairWithSum($data, $sum)
// {
//   $addition = 0;
//   for ($i = 1; $i < count($data); $i++) {
//     if ($data[$addition] + $data[$i] == $sum) {
//       echo "There are a pair items between the arrays.\n";
//       return true;
//     }else{
//       $addition++;
//     }
//   }
//   echo "There are no pair items between the arrays.\n";
//   return false;
// }
// function HasPairWithSum($data, $sum)
// {
//   for ($i = 0; $i < count($data); $i++) {
//     for ($j = $i+1; $j < count($data); $j++) {
//       if ($data[$i] + $data[$j] == $sum) {
//         echo "There are a pair items between the arrays.\n";
//         return true;
//       }
//     }
//   }
//   echo "There are no pair items between the arrays.\n";
//   return false;
// }


// function HasPairWithSum($data, $sum)
// {
//     $low = 0;
//     $hi = count($data) - 1;
//     while ($low < $hi) {
//         $pair = $data[$low] + $data[$hi];
//         if ($pair === $sum) {
//             return true;
//         }
//         $low++;
//         $hi--;
//     }

//     return false;
// }

// function hasPairWithSum2($arr, $sum)
// {
//   $mySet = [];
//   for ($i = 0; $i < count($arr); $i++) {
//     if (isset($mySet[$arr[$i]])) { //myset[1]
//       return true;
//     }
//     $mySet[$sum - $arr[$i]] = true; // 4 = true , 5 = true, 3 = true, 2 = true
//   }
//   return false;
// }



//The logic used in this function is called the "Hash Set" approach or "Hash Map" technique.
function HasPairWithSum($data, $sum)
{
  $checkPair = [];
  for ($i = 0; $i < count($data); $i++) {
    if (isset($checkPair[$data[$i]])) {
      echo "There are a pair items between the arrays.\n";
      return true;
    }
    $checkPair[$sum - $data[$i]] = true; // 5 = true , -1 = true , 3= true (here 3 is already in the $data[$i] so its true and it will return true and stop the lopp)
  }
  echo "There are no pair items between the arrays.\n";
  return false;
}




// Test data
$data = [1, 7, 3, 4];
$sum = 6;

// Check for common items
$pairWithSum = HasPairWithSum($data, $sum);

// if ($pairWithSum) {
//   echo "There are a pair items between the arrays.\n";
// } else {
//   echo "There are no pair items between the arrays.\n";
// }

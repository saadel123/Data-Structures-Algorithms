// Naive
// function hasPairWithSum(arr, sum) {
//   var len = arr.length;
//   for (var i = 0; i < len - 1; i++) {
//     for (var j = i + 1; j < len; j++) {
//       if (arr[i] + arr[j] === sum) return true;
//     }
//   }

//   return false;
// }

// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      let isset = true
      console.log(isset)
      break;
    }
    mySet.add(sum - arr[i]); // 3,5,6,7,8,2
  }
  return false;
}

console.log(hasPairWithSum2([2, 4, 7, 3, 5], 9)); //7 , 5 , 2

/*
Initialization:

$mySet = []: We start with an empty associative array.
$len = count($arr) calculates the length of the input array, which is 5 in this case.
Loop Iteration 1 (i = 0):

$i is 0, so we're looking at the first element of $arr, which is 2.
We check if 2 exists as a key in $mySet, which it doesn't because $mySet is empty.
We calculate the complement of 2 with respect to the target sum $sum (i.e., $sum - $arr[0] = 9 - 2 = 7) and add it as a key to $mySet. So, $mySet becomes ['7' => true].
Loop Iteration 2 (i = 1):

$i is 1, so we're looking at the second element of $arr, which is 4.
We check if 4 exists as a key in $mySet, which it doesn't.
We calculate the complement of 4 with respect to the target sum $sum (i.e., $sum - $arr[1] = 9 - 4 = 5) and add it as a key to $mySet. So, $mySet becomes ['7' => true, '5' => true].
Loop Iteration 3 (i = 2):

$i is 2, so we're looking at the third element of $arr, which is 7.
We check if 7 exists as a key in $mySet, and it does! This means that we've found a pair of elements (4 and 7) that add up to the target sum (9).
Since we found a pair, the function returns true.
*/


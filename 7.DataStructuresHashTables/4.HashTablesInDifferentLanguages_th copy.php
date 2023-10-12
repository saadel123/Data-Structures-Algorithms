<?php
/*
PHP does not have built-in native Set and Map data structures like JavaScript
*/
// Using an associative array to simulate a Map
$map1 = [
  'a' => 1,
  'b' => 2,
  'c' => 3,
];

//PHP_EOL It is used to insert a line break or newline character in text output
echo $map1['a'] . PHP_EOL; // Expected output: 1

$map1['a'] = 97;

echo $map1['a'] . PHP_EOL; // Expected output: 97

echo count($map1) . PHP_EOL; // Expected output: 3

unset($map1['b']);

echo count($map1) . PHP_EOL; // Expected output: 2

// Using an array to simulate a Set
$mySet1 = [];

$mySet1[] = 1; // Set(1) { 1 }
$mySet1[] = 5; // Set(2) { 1, 5 }
$mySet1[] = 5; // Set(2) { 1, 5 }
$mySet1[] = "some text"; // Set(3) { 1, 5, 'some text' }
$o = ['a' => 1, 'b' => 2];
$mySet1[] = $o;

print_r($mySet1);
?>

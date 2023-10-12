<?php
$user = [
  'age' => 22,
  'name' => 'Ahmed',
  'magic' => true,
  'scream' => function () {
    echo 'ahhhhhhhhhh!';
  },
];

echo $user['age']; // O(1)
echo $user['name']; // O(1)
$user['spell'] = 'huuryaa!'; // O(1)
echo $user['spell']; // O(1)

// Call the scream function
$screamFunction = $user['scream'];
$screamFunction();
?>


<!-- Hash tbales sometimes might lead to collisions (diffrent data sorted at the same key) and it slows down reading and writing with a hash table with 0(n/k) = o(n) -->
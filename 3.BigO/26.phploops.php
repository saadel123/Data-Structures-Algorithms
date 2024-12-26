<?php

$fish = ['dory', 'bruce', 'marlin', 'nemo'];

// Traditional for loop
function findNemo($fish) {
    for ($i = 0; $i < count($fish); $i++) {
        if ($fish[$i] === 'nemo') {
            echo "Found NEMO!\n";
        }
    }
}

// Using foreach loop
$findNemo2 = function ($array) {
    foreach ($array as $fish) {
        if ($fish === 'nemo') {
            echo "Found Nemo 2\n";
        }
    }
};

// Using for-each-like iteration with arrow functions (PHP 7.4+)
$findNemo3 = fn($array) => array_map(
    fn($fish) => $fish === 'nemo' ? print("Found Nemo 3\n") : null,
    $array
);

// Calling the functions
findNemo($fish);
$findNemo2($fish);
$findNemo3($fish);

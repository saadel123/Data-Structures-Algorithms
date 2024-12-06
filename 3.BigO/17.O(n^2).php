<?php

//Log all pairs of array
$numbers = [1, 2, 3, 4, 5];
function calc($numbers){
    for ($i=0; $i < count($numbers) ; $i++) {
        for ($j=0; $j < count($numbers); $j++) {
            echo $numbers[$i] .",".  $numbers[$j]."\n";
        }
    }
}

//Methode 2
$numbers = [1, 2, 3, 4, 5];

function calc2($numbers) {
    $length = count($numbers);
    $totalPairs = $length * $length;

    for ($k = 0; $k < $totalPairs; $k++) {
        $i = floor($k / $length);
        $j = $k % $length;
        echo $numbers[$i] . "," . $numbers[$j] . "\n";
    }
}

//Methode 3
function calc3($numbers) {
    $length = count($numbers);

    for ($k = 0; $k < $length * $length; $k++) {
        $i = intdiv($k, $length);
        $j = $k % $length;
        echo $numbers[$i] . "," . $numbers[$j] . "\n";
    }
}

calc($numbers);


calc2($numbers);


calc3($numbers);



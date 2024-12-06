<?php


//
function printFirstItemThenFirstHalfThenSayHi100Times($item)
{
    echo $item[0] . "\n";

    $firsthalf = floor(count($item) / 2);
    echo "First half is".$firsthalf. "\n";
    $index = 0;
    while ($index < $firsthalf) {
        echo $item[$index] . "\n";
        $index++;
    }
    $i = 1;
    while($i<=100){
        echo "Hello".$i. "\n";
        $i++;
    }

    // echo $firsthalf;
}
$item = [4, 5, 4, 5, 6];

printFirstItemThenFirstHalfThenSayHi100Times($item);



<?php
$nemo = ['SAAD', 'Nemo'];
$nemo2 = ['SAAD', 'Nemo'];


//Answer of 12-03-24
//Here the best if nemo is at array of the loop worst case is if nemo at the end of the array
function findNemo3($nemo)
{
    $name = "Nemo";

    //Method2
    for ($i = 0; $i < count($nemo); $i++) {
        if ($nemo[$i] == $name) {
            return "Nemo found!"; //it's important to stop the lop from being continue working
        }
    }
    return "Nemo not found :(";

    //Method2
    if (array_search($name, $nemo)) {
        return "Nemo found!";

    } else {
        return "Nemo not found :(";

    }

}

echo findNemo($nemo);
//end answer
function findNemo($data)
{
    foreach ($data as $nemo) {
        // if (strcasecmp($nemo, "Nemo") === 0) { // Case-insensitive compariso
        if ($nemo == "Nemo") {
            echo "Nemo found!";
            return;
        }
    }
    echo "Nemo not found!";
}

//Example 2
function findNemo2($data)
{
    if (in_array("Nemo", $data, true)) {
        echo "Nemo found!";
    } else {
        echo "Nemo not found!";
    }
}

findNemo($nemo);
findNemo2($nemo);
?>
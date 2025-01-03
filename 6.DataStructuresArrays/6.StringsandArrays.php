<?php
// "Immer, wenn wir eine Frage über Strings erhalten, sollten wir als Erstes daran denken, den String in ein Array zu konvertieren. explode()/split()"
//Meine Version
$value = "Hi my Name is saad"; // LENGTH = 5 words (indexed 0 bis 4)
function reverseString($value)
{
    if (empty($value) || !is_string($value) || strlen($value) < 2) { // strlen fängt mit 0 an
        return $value;
    }

    $array = explode(" ", $value);
    $reversedArray = [];
    $index = 0;
    for ($i = count($array) - 1; $i >= 0; $i--) {  //$i=4 ..
        $reversedArray[$index] = $array[$i];
        $index++;
    }
    return implode(" ", $reversedArray);
}

//Chatgpt Versionen
function reverseString2($value)
{
    // Splitte den String in ein Array von Wörtern
    $words = explode(" ", $value);

    // Initialisiere einen leeren String, um den umgekehrten String zu halten
    $reversedString = "";

    // Iteriere durch das Array der Wörter in umgekehrter Reihenfolge
    for ($i = count($words) - 1; $i >= 0; $i--) {
        // Hänge jedes Wort an den String und füge ein Leerzeichen hinzu
        $reversedString .= $words[$i] . " ";
    }

    return $reversedString;
}


function reverseString3($value)
{
    // Split the string into an array of words
    $array = explode(" ", $value);

    // Reverse the array using array_reverse() function
    return implode(" ", array_reverse($array)); // Join the reversed array into a string
}

function reverseString4($str)
{
  if (is_string($str) && strlen($str) >= 2) {
    $reversedWord = "";
    for ($i = strlen($str) - 1; $i >= 0; $i--) {
      $reversedWord .= $str[$i];
    }
  } else {
    return $str; // Return the input string for invalid input
  }
}

$arrayResult = reverseString4($value);
echo $arrayResult;
//Falls wir Array statt String haben, mussen wir print_r() verwenden
// print_r($arrayResult);


?>
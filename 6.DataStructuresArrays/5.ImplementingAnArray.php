<?php
class MyArray
{
  private $length = 0;
  private $data = [];

  public function get($index)
  {
    return isset($this->data[$index]) ? $this->data[$index] : null; //isset : Checks if a key exists and if its value is not null.
  }
  //or
  public function get2($index)
  {
    return array_key_exists($index, $this->data) ? $this->data[$index] : null; //Checks if a key exists in an array, regardless of its value (even if the value is null).
  }


  public function push($item)
  {
    $this->data[$this->length] = $item;
    //or
    // $this->data[$this->length] = $item;
    $this->length++;
    return $this->length;
  }

  public function pop()
  {
    if ($this->length === 0) {
      return null;
    }
    $lastItem = $this->data[$this->length - 1];
    unset($this->data[$this->length - 1]);
    $this->length--;
    return $lastItem;
  }


  /* Nehmen wir an, wir haben dieses Array [1,2,3,4,5]. Wir möchten delete(2) ausführen,
   das bedeutet, dass die 3 gelöscht wird. So funktioniert es: */
  // [1,2,4,4,5]
  // [1,2,4,5,5]

  public function delete($index)
  {
    // Wir verwenden hier length-1, weil length bei 1 beginnt und nicht bei 0.
    for ($i = $index; $i < $this->length - 1; $i++) {
      $this->data[$i] = $this->data[$i + 1]; // Verschiebt die Werte nach links (z.B. 3 = 4)
    }
    // Als Ergebnis erhalten wir [1,2,4,5,5], aber wir möchten das letzte Element im Array löschen.
    // Dafür benötigen wir diese Logik:
    unset($this->data[$this->length - 1]);
    $this->length--;
  }

  //12-26-24
  public function delete3($index)
  {
    $newArray = [];
    // $deleteItem = $this->data[$index]; //this is wrong because this hold the value and not the index
    for ($i = 0; $i < count($this->data); $i++) {
      if ($i !== $index) {
        $newArray[] = $this->data[$i];
      }
    }

    $this->length--;
    // return $newArray;
  }


  public function __toString()
  {
    return json_encode($this->data);
  }
}

$newArray = new MyArray();
$newArray->push("Hello");
$newArray->push("Hi");
$newArray->push("Deleted");
// $newArray->pop();
$newArray->delete3(1);
echo $newArray;

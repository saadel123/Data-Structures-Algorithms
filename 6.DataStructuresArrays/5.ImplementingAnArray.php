<?php
class MyArray {
  private $length = 0;
  private $data = [];

  public function get($index) {
    return isset($this->data[$index]) ? $this->data[$index] : null;
  }

  public function push($item) {
    $this->data[$this->length] = $item;
    $this->length++;
    return $this->length;
  }

  public function pop() {
    if ($this->length === 0) {
      return null;
    }
    $lastItem = $this->data[$this->length - 1];
    unset($this->data[$this->length - 1]);
    $this->length--;
    return $lastItem;
  }

  public function delete($index) {
    if ($index >= 0 && $index < $this->length) {
      for ($i = $index; $i < $this->length - 1; $i++) {
        $this->data[$i] = $this->data[$i + 1];
      }
      unset($this->data[$this->length - 1]);
      $this->length--;
    }
  }

  public function __toString() {
    return json_encode($this->data);
  }
}

$newArray = new MyArray();
$newArray->push("Hello");
$newArray->push("Hi");
$newArray->push("Deleted");
// $newArray->pop();
$newArray->delete(1);
echo $newArray;

const array = [4, 1, 5, 2, 3, 283, 55];

function BubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        // 4 < 1 ? true
        //Swap numbers
        let temp = array[j]; //4
        array[j] = array[j + 1]; // 4 = 1
        array[j + 1] = temp; //1 = 4
      }
    }
  }
}
BubbleSort(array);
console.log(array);

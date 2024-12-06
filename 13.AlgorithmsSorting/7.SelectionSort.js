//useful channel to undrestand how they work = https://www.youtube.com/watch?v=Xw2D9aJRBY4&list=PLcX11VWS1PdA4dSPip8-1JfKxFa32X53y
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i; //0
    let temp = array[i]; //99
    for (let j = i + 1; j < length; j++) {
      //first j=1
      // iterate over the remaining elements to find the minimum
      if (array[j] < array[min]) {
        // 44 < 99
        //update minimum if current is lower that what we had previously
        min = j; //min= 1
      }
    }
    // swap the values at indices i and min
    array[i] = array[min]; //
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);

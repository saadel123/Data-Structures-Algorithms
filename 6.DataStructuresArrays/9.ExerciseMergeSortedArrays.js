function mergeSortedArrays(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    let concat = arr1.concat(arr2);
    let newArray = [];
    for (let index = 0; index < concat.length; index++) {
      if (
        newArray.length === 0 ||
        newArray[newArray.length - 1] <= concat[index]
      ) {
        newArray.push(concat[index]);
      }
    }
    console.log(newArray);
  }
}

// mergeSortedArrays([0, 3, 5, 6], [4, 2, 1, 7]);

function mergeSortedArrays2(array1, array2) {
  const mergedArray = [];
  let arrayItem1 = array1[0];
  let arrayItem2 = array2[0];
  let i = 0;
  let j = 0;

  if (array1.length === 0) {
    return console.log(array2);
  }
  if (array2.length === 0) {
    return console.log(array1);
  }

  while (arrayItem1 !== undefined || arrayItem2 !== undefined) {
    if (!arrayItem2 || arrayItem1 < arrayItem2) { //i use this "!arrayItem2" to avoid indefined when comapring two valaues
      mergedArray.push(arrayItem1);
      arrayItem1 = array1[i]; //array1[1++]
      i++;
    } else {
      // arrayItem2 < arrayItem1
      mergedArray.push(arrayItem2);
      arrayItem2 = array2[j];
      j++;
    }
  }
  return mergedArray;
}

// console.log(mergeSortedArrays2([0, 3, 5, 6,9], [4, 2, 1, 7]));


function mergeSortedArrays3(array1, array2) {
    const mergedArray = array1.concat(array2);
    mergedArray.sort((a, b) => a - b); //b - a asc desc wech tjiblik men sghir wla l3aks
    return mergedArray;
  }

  console.log(mergeSortedArrays3([1, 3, 2, 5, 4], [6, 8, 10, 7, 9]));


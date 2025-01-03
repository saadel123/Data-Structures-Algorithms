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

function  mergeSortedArrays2(array1, array2){
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if(array1.length === 0) {
    return array2;
  }
  if(array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item){
      console.log(array1Item+ '  '+ array2Item);
   if(array2Item === undefined || array1Item < array2Item){
     mergedArray.push(array1Item);
     array1Item = array1[i];
     i++;
   }
   else {
     mergedArray.push(array2Item);
     array2Item = array2[j];
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


// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false
// function checkCommonItems(array1, array2) {
//   let Iscommon = false;
//   for (let item = 0; item < array1.length; item++) {
//     for (let item2 = 0; item2 < array2.length; item2++) {
//       if (array1[item] === array2[item2]) {
//         Iscommon = true;
//         break;
//       }
//     }
//     return Iscommon;
//   }
// }

// const checkCommonItems = (array1, array2) => {
//   let hasCommonItem = false;
//   array1.forEach((item1) => {
//     array2.forEach((item2) => {
//       if (item1 === item2) {
//         hasCommonItem = true;
//       }
//     });
//     if (hasCommonItem) {
//       return true; // This will exit the outer forEach loop
//     }
//   });
//   return hasCommonItem;
// };

// const result = checkCommonItems(["A", "B", "C"], ["K", "L", "A"]);
// console.log(result);

//So the above code will return time complexty of O(n*m) which means nested loop and this is not the best practise that's why we should think about another solution
//space complexity of this function is O(1) because we are not creating any varaibles data structure...

/*
So another solution we could is define an object an store the value of the first array inside it like this example
arrayl ==> obj {
a:true,
b:true,
c:true,
x:true
}
array2 [index] === obj.properties
*/

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  // can we assume always 2 params?
  //can i use spesific names for the variable instead i and j
  //let should be use only when we want to reassign  a variable while const is stable it cannot be reassigned
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[array1[i]]) {
      //Here the first result is a
      map[array1[i]] = true; //we want to fill the object with true values
    }
  }
  // console.log(map);
  for (j = 0; j < arr2.length; j++) {
    if (map[array2[i]]) {
      return true;
    }
  }
}
//O(a + b) Time Complexity
//O(a) Space Complexity it's more heavy for the memory because we are using variables


function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

// containsCommonItem2(array1, array2)

containsCommonItem3(array1, array2);

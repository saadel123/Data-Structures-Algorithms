//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  if (!str || typeof str != "string" || str.length < 2) return str;
  let arry = str.split("");
  let reversed = [];

  //   for (let i = 1; i <= arry.length; i++) {
  //     reversed.push(arry[arry.length - i]);
  //   }
  //   or
  for (let i = arry.length - 1; i >= 0; i--) {
    reversed.push(arry[i]);
  }

  return reversed.join(""); //onvert the array back to a string
}

console.log(reverseString("yoyo mastery"));

//Methode 2
function reverseString2(str) {
  return str.split("").reverse().join("");
}

//andrea solution with recusion

function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

reverseString("yoyo master");

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseStringRecursive("yoyo master");

//M not working
// function reverseStringRecusive(str) {
//     if (str.length === 0) {
//         return reversed;
//       }
//   let i = 0;
//   let arry = str.split("");
//   let reversed = reverseStringRecusive(str.length - i);
//   reversed.push(arry[arry.length - i]);
//   i++;

//   return reversed;
// }

// console.log(reverseStringRecusive("yoyo mastery"));

// When it comes to reversing a string, using a simple iterative approach is often more efficient in terms of both time and space complexity compared to a recursive solution.
//  Iterative solutions are generally more straightforward and use less memory overhead.

// This iterative approach has a time complexity of O(n) where n is the length of the string,
// and it has a space complexity of O(1) since it only uses a constant amount of additional space.

// On the other hand, the recursive solution, while elegant, may have a higher space complexity due to the recursive call stack,
// potentially leading to a stack overflow for very long strings. The time complexity is still O(n),
// but the constant factors involved in function calls may make it less efficient.

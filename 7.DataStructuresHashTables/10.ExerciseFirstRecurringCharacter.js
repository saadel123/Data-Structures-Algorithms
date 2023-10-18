/*
Checking if a key exists in an object can be done in a few equivalent ways in JavaScript:
obj[key] - Returns the value if key exists, undefined if not. Works like the code provided.
obj.hasOwnProperty(key) - Returns true if the key exists as an own property.
"key" in obj - Returns true if the key exists anywhere in the object or prototype chain.
*/

// function FirstRecurringChar1(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       //Had kat7ayedlik hadak l'elemnt li9arna bih wkatzid 3lih 1
//       if (array[i] === array[j]) {
//         return array[i];
//       }
//     }
//   }
//   return undefined;
// }//O(n*n)

// FirstRecurringChar1([2, 5, 1, 8, 4, 7]);

function FirstRecurringChar(array) {
  if (Array.isArray(array) && array !== []) {
    const savedRecurring = {};
    for (let i = 0; i < array.length; i++) {
      num = array[i];
      if (savedRecurring[array[i]]) {
        console.log(array[i]);
        return true;
      }
      savedRecurring[num] = true; // 2: true
    }
    console.log("There's no recurring chatacter");
    return false;
  }
  console.log("Please provide a valid array");
  return false;
}

FirstRecurringChar([2, 5, 5, 2, 4, 7]);

//A better version using set instead of object
// function firstRecurringChar(array) {
//   if (!Array.isArray(array) || array.length === 0) {
//     console.log("Please provide a valid non-empty array");
//     return;
//   }

//   const charSet = new Set();

//   for (let i = 0; i < array.length; i++) {
//     const char = array[i];

//     if (charSet.has(char)) {
//       console.log(char);
//       return char;
//     }

//     charSet.add(char);
//   }

//   console.log("No recurring character found");
// }

// FirstRecurringChar(["a", "s", "d", "v", "a"]);

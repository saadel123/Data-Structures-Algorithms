const letters = ["a", "e", "c", "d", "r"];
const basket = [2, 65, 34, 3, 2, 1, 7];

console.log(letters.sort());
console.log(basket.sort());

//[1,  2, 2, 3,34, 65, 7] the result is because the sort code is based on the unicode characters for each character that's why in javascript sort
//not working properly with numbers or letters such ñ ü ä because they have diffrent unicode characters

// here's how it works
console.log("65".charCodeAt(0)); //will get 54 in unicode table

//and here's how to fix it
console.log(basket.sort());

basket.sort(function (a, b) {
  return a - b;
});


const german = ["montag", "übrigens", "äpfel", "august"];

console.log(german.sort()); //this is the resul [ 'august', 'montag', 'äpfel', 'übrigens' ]
// to fix we have to do something like

german.sort(function (a, b) {
  return console.log(a.localeCompare(b));
});


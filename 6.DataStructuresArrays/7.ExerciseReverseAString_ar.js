//My solution
function reverse(string) {
  let reversedWord = ""; //O(1)
  for (let index = string.length - 1; index >= 0; index--) {
    // console.log(index)
    reversedWord += string[index] + " ";
  }
  console.log(reversedWord); // Output: "saad i'm World Hello"
}

//Another solution
function reverse1(str) {
    if (!str || typeof str != "string" || str.length < 2) return str;

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
      backwards.push(str[i]);
    }
    return backwards.join(""); // Join the array into a string
  }


function reverse2(str) {
  //check for valid input
  return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");

reverse("Hello World i'm saad");
reverse1("Hello World i'm saad");
reverse2("Hello World i'm saad");
reverse3("Hello World i'm saad");

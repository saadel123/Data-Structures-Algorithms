//1: When the interviewer says the question, write down the key points at the top (i.e. sorted1.array). Make sure you have all the details. Show how organized you are.

// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

//2: Make sure you double check: What are the inputs? What are the outputs?
// 2 parameters - arrays - no size limit (we can also ask the intreview are they alawys going to be arrays ? is it possible that the input might be not arrays, maybe objct, string?)
// return true or false

//3: What is the most important value of the problem? Do you have time, and space and memory, etc.. What is the main goal?
//is time compexty more important or space complexty or these two arrays will always have the same lenght

//4: Don't be annoying and ask too many questions (we have time imit avoid asking small little questions)

//5: Start with the naive/brute force approach. First thing that comes into mind. It shows that5. you’re able to think well and critically (you don't need to write this code, just speak about it)
//in our case we can say this look like a nested loop where we're comparing A with Z then A with A... we are comparing two arrays (but we should say we should avoid nested loop O(n*2)) )

//6: Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)
//i our case we sau that the code might be not efficient or we might have not readable or a code that is going to be really compcated and hard to read for other developpers
//we can give example if we have enough time like this
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
//O(a*b)
//O(1) space complexity

//7: Walk through your approach, comment things and see where you may be able to break things..Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information
//the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on that. Sometimes this occurs with repeated work as well.


//8: Before you start coding, walk through your code and write down the steps you are going to follow.

//9: Modularize your code from the very beginning. Break up your code into beautiful small pieces and add just comments if you need to
//here's an example :
// function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  // can we assume always 2 params?
  //can i use spesific names for the variable instead i and j
  //let should be use only when we want to reassign  a variable while const is stable it cannot be reassigned
// }



//10:Start actually writing your code now. Keep in mind that the more you prepare and understand what you need to code, the better the whiteboard will go. So never start a whiteboard
//interview not being sure of how things are going to work out. That is a recipe for disaster. Keep in mind: A lot of interviews ask questions that you won’t be able to fully answer on time.
//So think: What can I show in order to show that I can do this and I am better than other coders. Break things up in Functions (if you can’t remember a method, just make up a function
//and you will at least have it there. Write something, and start with the easy part.

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
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

containsCommonItem2(array1, array2);

//11: Think about error checks and how you can break this code. Never make assumptions about the input. Assume people are trying to break your code and that Darth Vader is using your
//function. How will you safeguard it? Always check for false inputs that you don’t want. Here is a trick: Comment in the code, the checks that you want to do... write the function,
//then tell the interviewer that you would write tests now to make your function fail (but you won't need to actually write the tests)

//We want to start thinking about how errors might airse so we have to improve the above funtions to make it more as error free as possible
//so we can ask the interviewer can we assume always 2 params? since we don't have much time
//can i use spesific names for the variable instead i and j
//let should be use only when we want to reassign  a variable while const is stable it cannot be reassigned


//12: Don’t use bad/confusing names like i and j. Write code that reads well.
//forloop we can use i and j there's no problem but we can rename arr1 and arr2 in something else more meaningful this help to show the interviewr your thinking skills

//13: est your code: Check for no params, 0, undefined, null, massive arrays, async code, etc... Ask the interviewer if we can make assumption about the code. Can you make the answer return
//an error? Poke holes into your solution. Are you repeating yourself?

//we can do that to test the arrays with the different input like string number [] null:
// const array1 = [1, null, [], "x"];
// const array2 = ["z", null, "a"];


//14: Finally talk to the interviewer where you would improve the code. Does it work? Are there different approaches? Is it readable? What would you google to improve? How can
// performance be improved? Possibly: Ask the interviewer what was the most interesting solution you have seen to this problem

//we should talk to interviewer how we can improve the code to be more readable as the example at the bottom :

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

containsCommonItem3(array1, array2);

//15: If your interviewer is happy with the solution, the interview usually ends here. It is also common that the interviewer asks you extension questions, such as how you would handle the
// problem if the whole input is too large to fit into memory, or if the input arrives as a stream. This is a common follow-up question at Google, where they care a lot about scale.
// The answer is usually a divide-and-conquer approach — perform distributed processing of the data and only read certain chunks of the input from disk into memory,
// write the output back to disk and combine them later


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
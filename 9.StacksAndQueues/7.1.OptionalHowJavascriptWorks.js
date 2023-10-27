/*Global variables are bad because if we don't forget to clean up after ourselves, we fill up this memory (memory leak) */
const a = 1;
const b = 10;
const c = 100;

//Synchronous programming simply meansline one gets executed, then line two gets executed, and then line three get executed
console.log("1");
console.log("2");
console.log("3");

//call stack (first in last out)
const one = () => {
  const two = () => {
    console.log("4");
  };
  two();
};

one();
//so let's break out this function and see why javascript is a single threaded language that can be non blocking ?
//this function work in this order
//console.log('4')
//two()
//one()
// and after that it will remove eveything

//Recursion
// function foo() {
//   foo();
// }

// foo();

//synschr

console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);

//what is diffrent between asynchronous or a asynchrounos program. or how does javascript work
//JavaScript is a single threaded language that can be non blocking. it has one call stack and it does one thing at time in order to not block singe thread
//It can be asynchronous with callback functions and these callback functions gets run in the background
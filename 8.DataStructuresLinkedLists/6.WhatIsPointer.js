/* A pointer is simply a refrece to something else that exsit in memory */

let obj1 = { a: true };
let obj2 = obj1;
obj1.a = "booya";
delete obj1;
obj2.a = "Hello";

console.log(obj2);
console.log(obj1);
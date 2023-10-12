const user = {
  age: 22,
  name: "Ahmed",
  magic: true,
  scream: function () {
    console.log("ahhhhhhhhhh!");
  },
};

console.log(user.age); // O(1)
console.log(user.name); //O(1)
user.spell = 'huuryaa!'; //O(1)
console.log(user.spell); //O(1)

//Hash tbales sometimes might lead to collisions (diffrent data sorted at the same key) and it slows down reading and writing with a hash table with 0(n/k) = o(n)
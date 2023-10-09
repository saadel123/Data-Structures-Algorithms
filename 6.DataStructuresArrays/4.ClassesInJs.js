/**********reference type**********/
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
if (object1 == object3) {
  console.log("True");
} else {
  console.log("false"); //will return false
}
/**********Context vs scope**********/
//this means the object enveremont that we are in (window)
//this.alert("Hello") = window.alert("Hello");

const object4 = {
  a: function () {
    console.log(this); //this will return the current object (a)
  },
};

/**********Intantiation**********/

class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type); // Pass the arguments to the super constructor
  }
  play() {
    console.log(`Hurryyyaaa! I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Saad', 'Healer');
const wizard2 = new Wizard('Ahmed', 'Dark Magic');


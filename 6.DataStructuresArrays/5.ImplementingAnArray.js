class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
// console.log(myArray); //the first things runs by default is the    constructor MyArray { length: 0, data: {} }
// console.log(myArray.get(0)); //undefined default with no value affected
newArray.push("Hello"); //
newArray.push("Hi"); //
newArray.push("Deleted"); //
// newArray.pop();
// newArray.pop();
newArray.delete(1);
console.log(newArray); //

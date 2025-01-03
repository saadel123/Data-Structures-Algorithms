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
  /* let's assume that we have this array [1,2,3,4,5]  we want to delete(2) so we will be deleting 3 here how it works  */
  /// [1,2,4,4,5]
  /// [1,2,4,5,5]
  delete(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    //as result we will have this [1,2,4,5,5] but we want to get rid of the last item from the array so we should do this logic
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

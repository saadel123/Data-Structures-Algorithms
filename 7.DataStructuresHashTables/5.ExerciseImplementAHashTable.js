class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    // '_'    this is means that it is a private methode i shouldn't be accessing this
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } //O(1) because it happens so fast

  set(key, value) {
    // If nothing at index, insert at that slot
    let index = this._hash(key);
    // If nothing at index, insert at that slot
    if (!this.data[index]) {
      //beause we have collisions so we want to make sure if the index it's not been used before
      this.data[index] = [];
    }
    // Otherwise we have a collision,
    // insert into linked list at that slot
    this.data[index].push([key, value]);
    console.log(this.data);
  } //O(1)

  get(key) {
    let index = this._hash(key);
    const currentBucket = this.data[index]; //We are storing the array element (bucket) that found in the index
    // console.log(currentBucket);
    if (this.data[index]) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  } //O(1)

  keys(){
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++){
      if(this.data[i]){
        console.log(this.data[i]);
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 20000);
myHashTable.set("apple",20);
myHashTable.set("orange",10);
console.log(myHashTable.get("grapes", 10000));
console.log(myHashTable.keys());

// myHashTable.set("asdas", 10000);
// console.log(myHashTable);
// myHashTable.get("grapes");
// myHashTable.set("apples", 9);
// myHashTable.get("apples");

// Our hash table is an array of 5 "buckets"
// const hashTable = [null, null, null, null, null];

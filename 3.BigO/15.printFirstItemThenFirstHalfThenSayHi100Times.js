function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}
// O(1+ n/2 + 100)
// O(n/2 + 1)
// O(n/2)
// O(n) This is the most important in an interview and that's what means 'Remove Constants'

function compressBoxesTwice(boxes){
    boxes.forEach(function(boxes) {
    console. log( boxes ) ;
    }
    boxes.forEach(function(boxes) {
    console. log( boxes ) ;
    }
}
// The resul of this function is O(2n) but in interview it doesn't matter we drop the constans and it will be O(n)
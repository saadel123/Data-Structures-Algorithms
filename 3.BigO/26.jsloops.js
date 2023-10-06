const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10000).fill('nemo');

function findNemo(fish) {
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo(everyone)

const findNemo2 = array => {
    array.forEach(fish => {
        if(fish === 'nemo'){
            console.log('Found Nemo 2');
        }
    });
}

const findNemo3 = array => {
    for(let fish of array) {
        if(fish === 'nemo'){
            console.log('Found Nemo 3 ');
        }
    };
}


findNemo2(everyone)
findNemo3(everyone)
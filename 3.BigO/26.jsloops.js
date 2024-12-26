const fish = ['dory', 'bruce', 'marlin', 'nemo'];


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


findNemo(everyone)
findNemo2(everyone)
findNemo3(everyone)
const array = ["Twit1", "Twit2", "Twit3", "Twit4", "Twit5"];

//This methode is not good the time complexty will be o(N)
function findTwit(data) {
  FirstTwit = "";
  LastTwit = "";
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      FirstTwit = data[i];
    } else if (i === data.length - 1) {
      LastTwit = data[i];
    }
  }
  console.log(`first twit is ${FirstTwit} and the last twit is ${LastTwit}`);
}

findTwit(array);
//Instead we can simple use this code
array[0];
array[array.length - 1];

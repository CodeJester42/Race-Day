let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;
let runnerAge = 18;

if (runnerAge > 18 && earlyRegister === true) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyRegister === true) {
  console.log(`You will be racing at 9:30 am and your race number is ${raceNumber}`);
} else if
  (runnerAge > 18 && earlyRegister != true) {
    console.log(`You will be racing at 11:00 am and your race number is ${raceNumber}`);
} else if
  (runnerAge < 18) {
    console.log(`You will be racing at 12:30 pm and your race number is ${raceNumber}`);
} else {
  (runnerAge = 18) 
    console.log(`Please see the registration desk`);
}

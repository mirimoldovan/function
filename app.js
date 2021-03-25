// exercise 1
const Kelvin = 293; // const variable is not going to change it's value
function kelvinToFahrenheit(kelvin) {
    const celsius = Kelvin - 273; 
    return Math.floor(celsius* (9/5)+ 32);
}

console.log('The temperature is' + kelvinToFahrenheit(kelvin) + 'degrees Fahrenheit');

//exercise 2

let myAge = 27;
const myName = 'Miriam'.toLowerCase();
function humanAgeInDogYears (myAge) {
    let earlyYears = 2 * 10.5;
    let laterYears = (myAge - 2) * 4;
    return earlyYears + laterYears;

}
console.log (`My name is ${myName}. I am ${myAge} years old in human years which is ` + humanAgeInDogYears(myAge) + `years old in dog years.`);

//exercise 3
let userName = '';
const userQuestion = 'How many years need somebody to learn code?';
if (!userName) {userName = 'USER'};
  
function answerMyQuestion (userName, userQuestion) {
    let eightBall = '';
    let randomNumber = Math.floor(Math.random()* 8);

    switch(randomNumber) {
        case  0:
        console.log('It is certain');
        break;
        case 1:
        console.log('It is decidedly so');
        break;
        case 2:
        console.log('Reply hazy try again');
        break;
        case 3:
        console.log('Cannot predict now');
        case 4:
        console.log('Do not count on it');
        break;
        case 5:
        console.log('My sources say no');
        break;
        case 6:
            console.log('Outlook not so good');
            break;
         case 7:
             console.log('Signs point to yes');
             break;
           default:
               console.log('Invalid question');
               break;
             
}
console.log(`Hello ${userName} !\n${userQuestion}\n${eightBall}`);
}
answerMyQuestion (userName, userQuestion);

//exercise 4
let registeredEarly = true;
let userAge = 19;
function raceTime(userAge, registeredEarly) {
    let raceNumber = Math.floor(Math.random()*1000);
    if (userAge >= 18 && registeredEarly) {
        raceNumber += 1000;
        console.log (`Your race starts at 9.30 and your race number is: ${raceNumber}`);
    } else if  (userAge >= 18 && !registeredEarly){
        console.log(`Your race starts at 11:00 and your race number is: ${raceNumber}`);
    } else if (userAge < 18) {
        console.log(`Your race starts at 12:30 and your race number is: ${raceNumber}`);
    }
 
    raceTime(userAge, registeredEarly); }

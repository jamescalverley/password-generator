// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var lowerString = "abcdefghijklmnopqrstuvwxyz";
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberString = "0123456789";
var specialString = "!@#$%^&*()_+";

var charRequired = 10   //set this to input

var lowerRequired = true;
var upperRequired = true;
var numberRequired = true;
var specialRequired = true;
var blankString = "";
var passwordString = "";

function createString(){
  if( lowerRequired == true){
    var passwordString = blankString.concat(lowerString); 
  } if( upperRequired == true){
    var passwordString = lowerString.concat(upperString);
  }
  console.log(`this is the new password string: ${passwordString}`)
}


// generate password 
// pull one random character from 

var newPassword = ""



var randomIndex = Math.floor(Math.random() * charRequired)
console.log(`${randomIndex}`)

// var newPassword = newPassword += lowerString[randomIndex]
// console.log(`${newPassword}`)

function generatePassword(){
  for(i=0; i < 10; i++){
    newPassword += lowerString[randomIndex] 
  }
  console.log(`Password: ${newPassword}`)
}
console.log(`Password: ${newPassword}`)
///TEST 

// var string1 = "abcde"
// var string2 = "adwioed"

// var string3 = string1 + string2
// console.log(`${string3}`)







///// STARTING FRESH

//Work 





function genPass(){
  // for( i=0; i < 10; i++ ){
    usingSets.toString(newPassword);
  // }
  console.log(`this is the new password ${newPassword}`)
  
}


var testArray = ['1', 'B', '%', 'h']
var testString = testArray.toString()

var testString2 = "abcdefgjt";
var blankString = "";
var xString = blankString.concat(testString2[3])




function genTest(){

  var testString = testString.push(testArray[2])

  console.log(testString);
}




//[Math.floor(Math.random() * 10]);



// need to put the arrays that you want to call together


// clicked U & L
// determine which sets of characters to use - value will then push to usingSets >>> usingSets will then pull which sets to use >>> run random operator
// var usingSets = [];
// if( document.querySelector('#upperCase').checked ) usingSets.push(0);
// if( document.querySelector('#lowerCase').checked ) usingSets.push(1);
// if( document.querySelector('#upperCase').checked ) usingSets.push(2);
// if( document.querySelector('#upperCase').checked ) usingSets.push(3);


// var randomSet = usingSets[Math.floor(Math.random()*usingSets.length)];
// var randomChar = Math.floor(Math.random()*sets[randomSet].length);
// sets[randomSet][randomChar]
// console.log(arrayUpper);
// console.log(arrayLower);
// console.log(arrayNumber);
// console.log(arraySpecial);

// // RANDOM 

// var randomUpper = arrayUpper[Math.floor(Math.random() * arrayUpper.length)];
// var randomLower = arrayLower[Math.floor(Math.random() * arrayLower.length)];
// var randomNumber = arrayNumber[Math.floor(Math.random() * arrayNumber.length)];
// var randomSpecial = arraySpecial[Math.floor(Math.random() * arraySpecial.length)];

// var randomIndex = Math.floor(Math.random()*26);
// console.log(randomIndex)

// // var randomUpper2 = arrayUpper[randomIndex]
// // console.log(`Upper2: ${randomUpper2}`)

// console.log(`This is the random UPPER: ${randomUpper}`)
// console.log(`This is the random LOWER: ${randomLower}`)
// console.log(`This is the random NUMBER: ${randomNumber}`)
// console.log(`This is the random SPECIAL: ${randomSpecial}`)




// var passwordArray = [];

// console.log(`${passwordArray}`);

// function passwordIndex(){
//   for(i=0; i < 10; i++){
//     passwordArray.push(Math.floor(Math.random() * 4));
//   }
//   console.log(`${passwordArray}`);
// }

// var newPassword = passwordIndex();

// console.log(`${newPassword}`);



// !!! create password character selector array by creating a blank array with random values * the number of character needed

// passwordArray.forEach(charSelector);
// console.log(`These is the array index: ${passwordArray}`)



// !!!! change randomIndex to run for length of array, rather than hard coding
// !!! use .join() to move from array to string

// GET INPUTS


// var charNum = 0

// function getCharNum (event){
//   event.preventDefault();
//   character: document.getElementById("charNeeded").value;
//   charNum.push(character);
// }

// document.getElementById("submitButton").addEventListener('click', getCharNum );

// function getCharNum(){
//   var charNum = document.getElementById('charNeeded').value;
// }

// document.getElementById('submitButton').addEventListener('click', getCharNum );



// console.log(`Characters needed: ${charNum}`)


// https://www.youtube.com/watch?v=NxVCq4p0Kb0
// https://www.youtube.com/watch?v=6BlaKlmeWGk


// SIMPLE INPUT AND BUTTON TEST

// var characters = 0

// function getCharacter(){
//   var characters = querySelector("#input1");
// }

// var characters = document.querySelector("#input1");

// characters.addEventListener("click", getCharacter);

// console.log(`Here is the number: ${characters}`)
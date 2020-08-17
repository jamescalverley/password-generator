
//! Todo's
//* COMPLETE add checkboxes
//* COMPLETE change generateCharSet function to take charNeeded from checkboxes
//* COMPLETE display new password somewhere
//* add slider for required characters
// add reset function for slider and checkboxes
// display character required
// add copy button
// clean up code

// look at window objects



let newPassword = "";
let passArray = [];
const lowerString = "abcdefghijklmnopqrstuvwxyz";
const upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberString = "0123456789";
const specialString = "!@#$%^&*()_+";

let reqChar = {
    lower: true, 
    upper: false, 
    numbers: false, 
    special: false
};

let lowerCheck = document.getElementById('lowerCheck');
let upperCheck = document.getElementById('upperCheck');
let numbersCheck = document.getElementById('numbersCheck');
let specialCheck = document.getElementById('specialCheck');
let slider = document.getElementById('charNeededSlider');
let charDisplay = document.getElementById('charDisplay');
let newPasswordDisplay = document.getElementById('new-password-display');


slider.addEventListener('change', function(event){
    charDisplay.innerHTML = slider.value;
});

charDisplay.innerHTML = slider.value;

// function charactersNeeded(){
//     let charNeeded = document.getElementById('charNeeded').value;
//     if( charNeeded < 8 ){
//         console.log("ADD ALERT: charNeeded below 8")
//     } else if( charNeeded > 128){
//         console.log("ADD ALERT: charNeeded above 128")
//     } else {
//         console.log(`Characters needed ${charNeeded}`);
//     return charNeeded
//     };
// };

function generateCharSet(){
    let charSet = "";
    if( lowerCheck.checked ){
        reqChar.lower = true;
        charSet += lowerString;
    } else {
        reqChar.lower = false;
    };
    if( upperCheck.checked){
        reqChar.upper = true;
        charSet += upperString;
    } else {
        reqChar.upper = false;
    };
    if( numbersCheck.checked ){
        reqChar.numbers = true;
        charSet += numberString;
    } else {
        reqChar.numbers = false;
    };
    if( specialCheck.checked ){
        reqChar.special = true;
        charSet += specialString;
    } else {
        reqChar.special = false;
    };
    return charSet
};

function generatePassword( charNeeded, charSet ){
    let characters = charSet;
    let setLength = characters.length;
    let count = 0;
    if(passArray.length > 0 ) {
        console.log("** passArray length is greater than zero")
        passArray = []
    };
    while (count < charNeeded){
        let index = Math.floor(Math.random() * setLength)
        passArray.push(characters[index])
        count ++
    };
    newPassword = passArray.join('');
    newPasswordDisplay.innerHTML = newPassword;
    return newPassword
};

function handleClick(){
    if( 
        !lowerCheck.checked && 
        !upperCheck.checked && 
        !numbersCheck.checked && 
        !specialCheck.checked ){
        alert("At least one character set must be selected!")
    return 
    } else {
        generatePassword( slider.value, generateCharSet() );
    };  
};

document.getElementById('generate').addEventListener('click', handleClick );










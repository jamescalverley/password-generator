// add lists of #, a, b, c
// add math random function
// add function to add desired number of characters to password string
// add alerts if charNeeded is below 8 or over 128



// adding characters x number of times
// each time adding a random character (index must be between 0 and string.length)

//! Todo's
//* COMPLETE add checkboxes
//* COMPLETE change generateCharSet function to take charNeeded from checkboxes
// display new password somewhere



let newPassword = "";
let passArray = [];
const lowerString = "abcdefghijklmnopqrstuvwxyz";
const upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberString = "0123456789";
const specialString = "!@#$%^&*()_+";

let needLower = true;
let needUpper = false;
let needNumbers = false;
let needSpecial = false;

let lowerCheck = document.getElementById('lowerCheck');
let upperCheck = document.getElementById('upperCheck');
let numbersCheck = document.getElementById('numbersCheck');
let specialCheck = document.getElementById('specialCheck');
let newPasswordDisplay = document.getElementById('new-password-display');

function charactersNeeded(){
    let charNeeded = document.getElementById('charNeeded').value;
    if( charNeeded < 8 ){
        console.log("ADD ALERT: charNeeded below 8")
    } else if( charNeeded > 128){
        console.log("ADD ALERT: charNeeded above 128")
    } else {
        console.log(`Characters needed ${charNeeded}`);
    return charNeeded
    };
};

function generateCharSet(){
    let charSet = "";
    if( lowerCheck.checked ){
        needLower = true;
        charSet += lowerString;
        console.log("+++Lower case needed");
    } else {
        needLower = false;
    };
    if( upperCheck.checked){
        needUpper = true;
        charSet += upperString;
        console.log("+++Upper case needed")
    } else {
        needUpper = false;
    };
    if( numbersCheck.checked ){
        needNumbers = true;
        charSet += numberString;
        console.log("+++Numbers needed")
    } else {
        needNumbers = false;
    };
    if( specialCheck.checked ){
        needSpecial = true;
        charSet += specialString;
        console.log("+++Special characters needed")
    } else {
        needSpecial = false;
    };
    
    console.log("working set", charSet)
    return charSet
};

function generatePassword( charNeeded, charSet ){
    let characters = charSet;
    console.log('[generatePassword] using characters >>', characters);
    let setLength = characters.length;
    console.log("charSet length:::", setLength);

    let count = 0;
    while (count < charNeeded){
        let index = Math.floor(Math.random() * setLength)
        passArray.push(characters[index])
        count ++
    };
    console.log(`test array: ${passArray}`)
    newPassword = passArray.join('');
    console.log(`converted to string: ${newPassword}`)

    newPasswordDisplay.innerHTML = newPassword;


    
    return newPassword
};

function handleClick(){
    console.log("Generate btn clicked...")
    if( 
        !lowerCheck.checked && 
        !upperCheck.checked && 
        !numbersCheck.checked && 
        !specialCheck.checked ){
        alert("At least one character set must be selected!")
    return 
} else {
    generatePassword( charactersNeeded(), generateCharSet() );
};  
};

document.getElementById('generate').addEventListener('click', handleClick );









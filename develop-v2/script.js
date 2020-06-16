
//! Todo's
//* COMPLETE add checkboxes
//* COMPLETE change generateCharSet function to take charNeeded from checkboxes
//* COMPLETE display new password somewhere
//* add slider for required characters
// add reset function for slider and checkboxes
// display character required
// add copy button
// clean up code



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
let slider = document.getElementById('charNeededSlider');
let charDisplay = document.getElementById('charDisplay');
let newPasswordDisplay = document.getElementById('new-password-display');

console.log(`Slider value: ${slider.value}`)
slider.addEventListener('change', function(event){
    console.log(`the slider value has changed ${event.target.value}`)
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
    console.log(`characters needed = ${charNeeded}`)

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
        //generatePassword( charactersNeeded(), generateCharSet() );
        generatePassword( slider.value, generateCharSet() );
    };  
};

document.getElementById('generate').addEventListener('click', handleClick );











let newPassword = "";
let passArray = [];
const lowerString = "abcdefghijklmnopqrstuvwxyz";
const upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberString = "0123456789";
const specialString = "!@#$%^&*()_+";

const reqChar = {
    lower: true, 
    upper: false, 
    numbers: false, 
    special: false
};

const lowerCheck = document.getElementById('lowerCheck');
const upperCheck = document.getElementById('upperCheck');
const numbersCheck = document.getElementById('numbersCheck');
const specialCheck = document.getElementById('specialCheck');
const slider = document.getElementById('charNeededSlider');
const charDisplay = document.getElementById('charDisplay');
const newPasswordContainer = document.querySelector('.new-password');
const newPasswordDisplay = document.getElementById('new-password-display');
const passwordCopy = document.getElementById('password-copy');


slider.addEventListener('change', function(event){
    charDisplay.innerHTML = slider.value;
});

charDisplay.innerHTML = slider.value;

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
        passArray = []
    };
    while (count < charNeeded){
        let index = Math.floor(Math.random() * setLength)
        passArray.push(characters[index])
        count ++
    };
    newPassword = passArray.join('');
    newPasswordContainer.style.visibility = 'visible';
    newPasswordDisplay.innerHTML = newPassword;
    passwordCopy.innerHTML = newPassword;
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

function copyPassword(){
    const copyText = document.getElementById('password-copy');
    copyText.select();
    copyText.setSelectionRange(0,9999);
    document.execCommand("copy");
    displayAlert();
};

function displayAlert(){
    $(".alert").show();
    setTimeout( () => $(".alert").hide(), 3000)
};

document.getElementById('generate').addEventListener('click', handleClick );

document.getElementById('copy').addEventListener('click', copyPassword );

newPasswordContainer.style.visibility = 'hidden';














// add lists of #, a, b, c
// add math random function
// add function to add desired number of characters to password string
// add alerts if charNeeded is below 8 or over 128



// adding characters x number of times
// each time adding a random character (index must be between 0 and string.length)

const lowerString = "abcdefghijklmnopqrstuvwxyz";
const upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberString = "0123456789";
const specialString = "!@#$%^&*()_+";

let newPassword = "";
let passArray = [];

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

function addCharacters( charNeeded ){
    console.log(`adding character... ${charNeeded} needed`)
    
    let count = 0;
    while (count < charNeeded){
        passArray.push(lowerString[1])
        count ++
    };
    console.log(`test array: ${passArray}`)
    newPassword = passArray.join('');
    console.log(`converted to string: ${newPassword}`)
    
    return newPassword
    
}

let numArray = [];
function randomNum(){
    let num = Math.floor(Math.random()*50)
    console.log(`Random number: ${num}`)
    return num
};


function generatePass(){
    console.log("Generate btn clicked...")
    charactersNeeded();
    randomNum();
    addCharacters( charactersNeeded() );
};

document.getElementById('generate').addEventListener('click', generatePass );





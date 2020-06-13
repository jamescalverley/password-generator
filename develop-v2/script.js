// add lists of #, a, b, c
// add math random function
// add function to add desired number of characters to password string
// add alerts if charNeeded is below 8 or over 128



// adding characters x number of times
// each time adding a random character (index must be between 0 and string.length)



let newPassword = "";
let passArray = [];
const lowerString = "abcdefghijklmnopqrstuvwxyz";
const upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberString = "0123456789";
const specialString = "!@#$%^&*()_+";

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
    let needLower = true;
    let needUpper = true;
    let needNumber = true;
    let needSpecial = true;
    let charSet = "";
    if( needLower == true ){
        console.log("lowercase is needed")
        charSet += lowerString;
    }if( needUpper == true ){
        console.log("uppercase is needed")
        charSet += upperString;
    } if( needNumber == true ){
        console.log("numbers are needed")
        charSet += numberString;        
    } if( needSpecial == true ){
        console.log("special char needed")
        charSet += specialString;   
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
    
    return newPassword
}




function handleClick(){
    console.log("Generate btn clicked...")
    //charactersNeeded();
    generatePassword( charactersNeeded(), generateCharSet() );
};

document.getElementById('generate').addEventListener('click', handleClick );





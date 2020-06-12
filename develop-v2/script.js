// add lists of #, a, b, c
// add math random function
// add function to add desired number of characters to password string
// add alerts if charNeeded is below 8 or over 128

const lowerString = "abcdefghijklmnopqrstuvwxyz";
const upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberString = "0123456789";
const specialString = "!@#$%^&*()_+";

let newPassword = "";

function charactersNeeded(){
    let charNeeded = document.getElementById('charNeeded').value;
    if( charNeeded < 8 ){
        console.log("ADD ALERT: charNeeded below 8")
    } else if( charNeeded > 128){
        console.log("ADD ALERT: charNeeded above 128")
    } else {
        console.log(`Characters needed ${charNeeded}`);
    };

    
};


function generatePass(){
    console.log("Generate btn clicked...")
    charactersNeeded();
};

document.getElementById('generate').addEventListener('click', generatePass );

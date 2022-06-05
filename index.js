let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")


const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


function generatePassword(length) {
    let result = ' ';
    for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    return result
    }



function displayPasswords() {
    box1.textContent = generatePassword(14);
    box2.textContent = generatePassword(14);
    box3.textContent = generatePassword(14);
    box4.textContent = generatePassword(14);
}

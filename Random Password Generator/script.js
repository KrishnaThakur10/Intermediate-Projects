const button = document.getElementById("button")
const passwordBox = document.getElementById("Password")
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const symbol = "~!@#$%^&*()_+-={}[]:;<,>.?/|"
const number = "1234567890"
const allChar = upperCase + lowerCase + number + symbol;

function newPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while(lenght>password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
    
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

button.addEventListener("click", ()=> {
    newPassword()
})


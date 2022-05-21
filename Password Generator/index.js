let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")
let passwordThreeEl = document.getElementById("password-three-el")
let passwordFourEl = document.getElementById("password-four-el")

let array = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i",
            "J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S",
            "s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z","1","2","3","4",
            "5","6","7","8","9","0","?","!","£","$","%","<",">","/","&","*","(",")","@"]


function generatePasswords() {
    let password = ""

    for (let i = 0; i < 8; i++) {
    let randomIndex = Math.floor (Math.random() * array.length)
    password += array[randomIndex]
    }
    
    return password
}

function renderPasswords() {

    passwordOneEl.textContent = generatePasswords()
    passwordTwoEl.textContent = generatePasswords()
    passwordThreeEl.textContent = generatePasswords()
    passwordFourEl.textContent = generatePasswords()
}
const pwd = document.getElementById('pwd_txt');
const generate = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');
const pwd_length = document.getElementById('range-slider');
const copy_text = document.getElementById('copy_text');
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789";

generate.addEventListener("click", () => {
    let password = "";
    let checked = document.getElementById('checkbox').checked;
    let final_characters = characters;

    if(checked) {
        final_characters += "@#$%^&*/=+?";
    }

    for(let i = 0; i < pwd_length.value; i++) {
        let pwd = final_characters[Math.floor(Math.random() * final_characters.length)];
        password += pwd;
    }

    pwd.innerText = password;
    final_characters = characters;
});

clipboard.addEventListener("click", () => {
    navigator.clipboard.writeText(pwd.innerText);
    copy_text.textContent = "Password Copied!";
    copy_text.style.display = "block";
    setTimeout(() => {
        copy_text.style.display  = "none";
    }, 2000);
});


  

characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?",
"/"];

let btn_icon= document.getElementById("btn_icon")

let disp_btn1 = document.getElementById("pass_btn1")
let disp_btn2 = document.getElementById("pass_btn2")


btn_icon.addEventListener("click", function() {

    let randomIndexOne= Math.floor( Math.random() * characters.length )
    let randomIndexTwo= Math.floor( Math.random() * characters.length )
    disp_btn2.textContent=(characters [randomIndexOne])
    disp_btn1.textContent=(characters [randomIndexTwo])
    
})

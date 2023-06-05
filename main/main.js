
const cajita1 = document.getElementById("1");
const cajita2 = document.getElementById("2");
const cajita3 = document.getElementById("3");
const cajita4 = document.getElementById("4");
const cajita5 = document.getElementById("5");
const cajita6 = document.getElementById("6");
const cajita7 = document.getElementById("7");
const cajita8 = document.getElementById("8");
const cajita9 = document.getElementById("9");
const cajita10 = document.getElementById("10");
const fin = document.querySelector(".fin");
const boton = document.querySelector("button");
const speack = document.querySelector(".speack");
const text = document.querySelector("textarea");
let contadorSpan = document.querySelector("#contador");
let contador = 0;

contadorSpan.innerText = contador;
function changeColor(cajita){
    cajita.addEventListener("click", ()=>{
        cajita.style.background = "red";
        contador++;
        contadorSpan.innerText = contador;
        let sonar = new SpeechSynthesisUtterance(contador);

        speechSynthesis.speak(sonar);
        console.log(contador)
        if (contador == 10) {
    
            fin.style.display =  "flex";
        }
        

    });
}

changeColor(cajita1);
changeColor(cajita2);
changeColor(cajita3);
changeColor(cajita4);
changeColor(cajita5);
changeColor(cajita6);
changeColor(cajita7);
changeColor(cajita8);
changeColor(cajita9);
changeColor(cajita10);

boton.addEventListener("click", ()=>{
    location.reload();
});


speack.addEventListener("click", ()=>{
    let sonar = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(sonar);
}) 
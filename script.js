const colors = document.getElementById("colors");
const choice = document.getElementById("choice");
const body = document.getElementById("body");


colors.addEventListener("change",()=>{
    let val = colors.value;
    let name = " ";
    choice.innerText = colors.value;
    body.style.backgroundColor = colors.value;
})
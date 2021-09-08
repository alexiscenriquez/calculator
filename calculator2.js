let val = document.getElementsByClassName("squares");
let screen = document.getElementById("one");
let clear = document.getElementById("two");
let output = document.querySelectorAll("#one")
let toEvaluate
let num
for (let i = 0; i < val.length; i++) {
    val[i].addEventListener("click", () => {
        console.log(val[i].value)
        screen.textContent += val[i].value;
        toEvaluate += val[i].value;
    })
}
clear.addEventListener("click", () => {
    screen.textContent = "";
})

let evaluate = document.getElementById("equals");
evaluate.addEventListener("click", () => {
    num = toEvaluate.slice(9)
    screen.textContent = eval(num);
    if (screen.length >= 8) {
        Math.ceil(screen.value)
    }
}
)
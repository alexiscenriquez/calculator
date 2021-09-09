let val = document.getElementsByClassName("squares");
let screen = document.getElementById("one");
let clear = document.getElementById("two");
let output = document.querySelectorAll("#one")
let toEvaluate=""
let num = 0
let calculation
let evaluate = document.getElementById("equals");
for (let i = 0; i < val.length; i++) {
    val[i].addEventListener("click", () => {
        console.log(val[i].value)
        screen.textContent += val[i].value;
        toEvaluate += val[i].value;

      
      
        return toEvaluate
    })
}

evaluate.addEventListener("click", () => {
    num = toEvaluate
    calculation = eval(num)
    screen.textContent = calculation;
    toEvaluate = calculation;
    return calculation;
}
)
clear.addEventListener("click", () => {
    toEvaluate = "";
    screen.textContent = ""
    return toEvaluate;
})



/*function clr() {
    toEvaluate = 0;
    screen.textContent = ""
    return toEvaluate;
}*/
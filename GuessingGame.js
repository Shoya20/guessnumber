const input = document.getElementById("input");
const buttons = document.querySelectorAll("#num");
let result = document.getElementById("result");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        input.value = button.textContent;
    });
});
const reset = document.getElementById("reset");
let random = Math.floor(Math.random() * 10) + 1;
const guess = document.getElementById("guess");
guess.addEventListener("click", function () {
    if (input.value == random) {
        result.innerHTML = "Correct!";
    }
    else if (input.value > random) {
        result.innerHTML = "Wrong! try lower number";
    }
    else if (input.value < random) {
        result.innerHTML = "Wrong! try higher number";
    }
}
);
function Reset() {
    input.value = "";
    result.innerHTML = "";
}

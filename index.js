
let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

let array = Array.from(buttons);
array.forEach(button => {
    button.addEventListener("click", (e) => {
        handleInput(e.target.innerHTML);
    });
});

document.addEventListener("keydown", (e) => {
    let key = e.key; 

    if (!isNaN(key) || key === '.') {
        handleInput(key);
    } else if (key === 'Enter' || key === '=') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('DEL');
    } else if (key === 'Escape') {
        handleInput('AC');
    } else if (key === '+' || key === '-' || key === '*' || key === '*' || key === '%') {
        handleInput(key);
    }
});

function handleInput(inputValue) {
    if (inputValue == "=") {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } else if (inputValue == "AC") {
        string = "";
        input.value = string;
    } else if (inputValue == "DEL") {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += inputValue;
        input.value = string;
    }
}

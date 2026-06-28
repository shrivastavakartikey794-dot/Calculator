const display = document.getElementById('display');

function clearDisplay(){
    display.value = "";
}

function appendValue(input){
    display.value += input;
}

function backspace(){
    display.value = display.value.slice(0 , -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event) {
    let key = event.key;

    // Numbers + operators
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendValue(key);
    }

    // Enter = calculate
    else if (key === "Enter") {
        calculate();
    }

    // Backspace = delete last
    else if (key === "Backspace") {
        backspace();
    }

    // Escape = clear
    else if (key === "Escape") {
        clearDisplay();
    }
});

// load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// toggle + save
function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    let btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {
        btn.innerText = "☀️";
    } else {
        btn.innerText = "🌙";
    }
}
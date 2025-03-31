let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    let input = display.value.trim();

    if (input.startsWith("http") || input.includes(".")) {
        window.location.replace(input.includes("://") ? input : "https://" + input);
    } else {
        try {
            display.value = eval(input);
        } catch {
            display.value = "Error";
        }
    }
}

// PWA Install Prompt
let installBtn = document.getElementById("installBtn");
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.hidden = false;
});

installBtn.addEventListener("click", () => {
    deferredPrompt.prompt();
});

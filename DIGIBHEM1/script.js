const inputValue = document.getElementById("user-input");

// Handle number button clicks
document.querySelectorAll(".numbers").forEach(function(item) {
    item.addEventListener("click", function(e) {
        if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

// Handle operations
document.querySelectorAll(".operations").forEach(function(item) {
    item.addEventListener("click", function(e) {
        const operation = e.target.innerHTML.trim();
        let lastValue = inputValue.innerText.slice(-1);

        if (operation === "=") {
            try {
                // Evaluate the expression safely
                inputValue.innerText = Function(`'use strict'; return (${inputValue.innerText})`)();
            } catch {
                inputValue.innerText = "NaN"; // Handle invalid expressions
            }
        } else if (operation === "AC") {
            inputValue.innerText = "0"; // Reset to default
        } else if (operation === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1) || "0"; // Remove last character or reset to 0
        } else if (!isNaN(lastValue) || lastValue === "%") {
            // Append operation if the last character is a number or valid operator
            inputValue.innerText += operation;
        }
    });
});
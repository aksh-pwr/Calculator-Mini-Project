// Select display input and all buttons
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

// Variable to store the current expression
let currentExpression = "";

// Add click event listener to each button
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const value = button.getAttribute("data-value");

        if (value === "AC") {
            currentExpression = "";
            display.value = "";
        } else if (value === "DEL") {
            currentExpression = currentExpression.slice(0, -1);
            display.value = currentExpression;
        } else if (value === "=") {
            try {
                currentExpression = eval(currentExpression).toString();
                display.value = currentExpression;
            } catch (error) {
                display.value = "Error";
                currentExpression = "";
            }
        } else {
            currentExpression += value;
            display.value = currentExpression;
        }
    });
});

// Function to append a value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        // Get the expression from the display
        const expression = document.getElementById('display').value;
        // Evaluate the expression and update the display with the result
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        // Handle any errors and display an error message
        document.getElementById('display').value = 'Error';
    }
}

// Function to append value to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Event listener for keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Handle the clear operation
    if (key === 'c' || key === 'C' || key === 'Escape') {
        clearDisplay();
    }
    // Handle number and operator keys
    else if (/\d|\+|\-|\*|\//.test(key)) {
        appendToDisplay(key);
    }
    // Handle the equals key
    else if (key === 'Enter') {
        calculateResult();
    }
    // Handle the backspace key
    else if (key === 'Backspace') {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1); // Remove last character
    }
});

// Toggle theme function
const themeSwitch = document.querySelector('.switch');
const calculator = document.querySelector('.calculator');
const display = document.getElementById('display');
const body = document.body;

themeSwitch.addEventListener('click', () => {
    calculator.classList.toggle('dark');
    body.classList.toggle('dark'); // Toggle the body background color
});

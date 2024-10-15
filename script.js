function convert() {
    // Get the input value
    let inputValue = document.getElementById("inputValue").value;

    // Check if the input is empty
    if (inputValue === "") {
        alert("You must enter the value first!");
        return;
    }

    // Try to convert the input value to a decimal number
    let decimalValue = parseInt(inputValue, 10);
    if (isNaN(decimalValue)) {
        alert("Invalid value!");
        return;
    }

    // Display the converted results
    document.getElementById("binaryResult").innerText = "Binary: " + decimalValue.toString(2);
    document.getElementById("decimalResult").innerText = "Decimal: " + decimalValue;
    document.getElementById("octalResult").innerText = "Octal: " + decimalValue.toString(8);
    document.getElementById("hexResult").innerText = "Hexadecimal: " + decimalValue.toString(16).toUpperCase();
}

function clearForm() {
    // Clear the input field and results
    document.getElementById("inputValue").value = "";
    document.getElementById("binaryResult").innerText = "Binary: ";
    document.getElementById("decimalResult").innerText = "Decimal: ";
    document.getElementById("octalResult").innerText = "Octal: ";
    document.getElementById("hexResult").innerText = "Hexadecimal: ";
}

function confirmExit() {
    // Confirm if the user wants to exit
    let confirmExit = confirm("Are you sure you want to exit?");
    if (confirmExit) {
        window.close();  // Close the browser window
    }
}
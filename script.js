function validateNumber() {
    let input = document.getElementById("numberInput").value.trim();
    let message = document.getElementById("message");

    let scientificPattern = /^[+-]?\d+(\.\d+)?(e[+-]?\d+)?$/i;

    if (scientificPattern.test(input)) {
        message.textContent = "Yes, it is a number";
        message.style.color = "green";
    } else {
        message.textContent = "No, it is not a number";
        message.style.color = "red";
    }
}

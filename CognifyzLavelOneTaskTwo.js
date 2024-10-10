let BtnEl = document.getElementById("Btn");

function check() {
    BtnEl.style.backgroundColor = "#96acf2";
    BtnEl.style.color = "#0e099e";
    let inputoneEl = parseFloat(document.getElementById("inputone").value);

    let inputtwoEl = parseFloat(document.getElementById("inputtwo").value);

    let resultEl = document.getElementById("result");

    if (isNaN(inputoneEl) || isNaN(inputtwoEl)) {
        alert("Please enter a valid number");
        return;
    }
    let sum = inputoneEl + inputtwoEl;
    resultEl.textContent = sum;

    let presentHour = new Date().getHours();
    let greet;
    if (presentHour < 12) {
        greet = "Good Morning!";
    } else if (presentHour < 18) {
        greet = "Good Afternoon!";
    } else {
        greet = "Good Evening!";
    }
    alert(greet);
}
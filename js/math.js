function calculateReplicator() {
    const inputValue = parseFloat(prompt("Enter the weight in lbs:"));

    if (!isNaN(inputValue) && inputValue > 0) {
        const x = (45 * inputValue) / 2;
        const resultElement = document.getElementById("result");
        resultElement.textContent = `$${x.toFixed(2)}`;
    } else {
        const resultElement = document.getElementById("result");
        resultElement.textContent = "Please enter a valid weight";
    }
}
function calculateMethodX() {
    const mass = parseFloat(prompt("Mass of PLA in grams:"));
    const pvamass = parseFloat(prompt("Mass of PVA in grams:"));
    const resultElement = document.getElementById("result");

    if (!isNaN(mass) && mass >= 0 && !isNaN(pvamass) && pvamass >= 0) {
        const plaprice = (68 * mass) / 907;
        const pvaprice = (84 * pvamass) / 453;
        const finalprice = pvaprice + plaprice;

        resultElement.innerHTML = `PLA Price: $${plaprice.toFixed(2)}<br>PVA Price: $${pvaprice.toFixed(2)}<br>Total Price: $${finalprice.toFixed(2)}`;
    } else {
        resultElement.innerHTML = "Please enter valid mass values";
    }
}


function calculateFormlabs() {
    const inputValue = parseFloat(prompt("Enter the mass in grams:"));

    if (!isNaN(inputValue) && inputValue > 0) {
        const x = (249 * inputValue) / 1100;
        const resultElement = document.getElementById("result");
        resultElement.textContent = `$${x.toFixed(2)}`;
    } else {
        const resultElement = document.getElementById("result");
        resultElement.textContent = "Please enter a valid weight";
    }
}
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
    const mass = prompt("Mass of Pla in grams:");
    const pvamass = prompt("Mass of Pva in grams:");
    const plaprice = (72 * parseFloat(mass)) / 750;
    const pvaprice = (84 * parseFloat(pvamass)) / 450;
    const finalprice = pvaprice + plaprice;
    output.innerHTML = `PLA Price: $${plaprice.toFixed(2)}<br>PVA Price: $${pvaprice.toFixed(2)}<br>Total Price: $${finalprice.toFixed(2)}`;
}

function calculateFormlabs() {
    const volume = prompt("Volume of Resin in ml:");
    const price = (0.025 * parseFloat(volume)) + 15;
    output.innerHTML = `Price: $${price.toFixed(2)}`;
}
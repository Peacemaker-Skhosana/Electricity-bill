function calculateBill() {
    let units = document.getElementById("units").value;
    let rate = document.getElementById("rate").value;

    if (units === "" || rate === "" || units < 0 || rate < 0) {
        document.getElementById("billResult").innerHTML = "Please enter valid numbers.";
        return;
    }

    let totalBill = units * rate;
    document.getElementById("billResult").innerHTML = `Your electricity bill is: R${totalBill.toFixed(2)}`;

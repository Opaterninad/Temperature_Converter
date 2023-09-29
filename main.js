document.getElementById("celcius").addEventListener("input", function() {
    let celcius = parseFloat(this.value);
    let fahcel = celcius*(9/5)+32;
    let kelcel = celcius + 273.15;
    document.getElementById("fahrenheit").value = fahcel.toFixed(2);
    document.getElementById("kelvin").value = kelcel.toFixed(2);
});

document.getElementById("fahrenheit").addEventListener("input", function() {
    let fahrenheit = parseFloat(this.value);
    let kelFah = fahrenheit + (459.67)*(5/9);
    document.getElementById("kelvin").value = kelFah.toFixed(2);
    let celFah = (fahrenheit - 32)*(5/9);
    document.getElementById("celcius").value = celFah.toFixed(2);
})

document.getElementById("kelvin").addEventListener("input", function() {
    let kelvin = parseFloat(this.value);
    let fahkel =  (kelvin- 273.1) * 9/5 + 32;
    document.getElementById("fahrenheit").value = fahkel.toFixed(2);
    let celkel = kelvin - 273.15;
    document.getElementById("celcius").value = celkel.toFixed(2);
})
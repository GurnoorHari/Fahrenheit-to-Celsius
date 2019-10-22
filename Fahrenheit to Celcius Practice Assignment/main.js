document.getElementById("btn").addEventListener('click', CONVERT)

function CONVERT() {

    let num1 = Number(document.getElementById("input").value);
    let num2 = 32;
    let num3 = num1 - num2;
    let num4 = num3*5;
    let num5 = num4/9;

    document.getElementById("output").innerHTML = num5;

}
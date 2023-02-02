function LaskeYhteen() {
    var numero1 = Number(document.getElementById("num1").value);
    var numero2 = Number(document.getElementById("num2").value);
    var summa = numero1 + numero2;
    document.getElementById("summa").innerHTML = summa;
}
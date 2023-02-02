function LaskeYhteen() {
    var num1 = parseInt(document.getElementById("myform").elements["num1"].value);
    var num2 = parseInt(document.getElementById("myform").elements["num2"].value);
    document.getElementById("summa").innerHTML = num1 + num2;
}
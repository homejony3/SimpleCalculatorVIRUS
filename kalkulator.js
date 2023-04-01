function calculate() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var operator = document.getElementById("operator").value;

    if (a == "" || b == "") {
        alert("Please enter a number");
        return;
    } else if (isNaN(a) || isNaN(b)) {
        alert("Please enter a number");
        return;
    } else if (operator == "") {
        alert("Please select an operator");
        return;
    }

    switch (operator) {
        case "add":
            document.getElementById("result").innerHTML = Number(a) +Number(b);
            break;
        case "subtract":
            document.getElementById("result").innerHTML = Number(a) - Number(b);
            break;
        case "multiply":
            document.getElementById("result").innerHTML = Number(a) * Number(b);
            break;
        case "divide":
            if (b == 0) {
                alert("Cannot divide by zero");
                return;
            }
            document.getElementById("result").innerHTML = Number(a) / Number(b);
            break;
        default:
            alert("Please select an operator");
            break;
    }

    localStorage.setItem("a", a);
    localStorage.setItem("b", b);
    localStorage.setItem("operator", operator);
    localStorage.setItem("result", document.getElementById("result").innerHTML);
}

function clearInput() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("result").innerHTML = "0";
    localStorage.removeItem("a");
    localStorage.removeItem("b");
    localStorage.removeItem("operator");
    localStorage.removeItem("result");
    document.location.reload();
}

window.onload = function() {
    var muska = document.getElementById("muska");
    muska.play();
    muska.volume = 0.1;
    muska.loop = true;
}


var a = localStorage.getItem("a");
var b = localStorage.getItem("b");
var operator = localStorage.getItem("operator");
var result = localStorage.getItem("result");

if (a !== null) {
    document.getElementById("a").value = a;
}
if (b !== null) {
    document.getElementById("b").value = b;
}
if (operator !== null) {
    document.getElementById("operator").value = operator;
}
if (result !== null) {
    document.getElementById("result").innerHTML = result;
}
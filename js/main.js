
var DivPer = document.getElementById('divper'),
    DivF = document.getElementById('divf'),
    DivRed = document.getElementById('divred'),
    DivBlue = document.getElementById('divblue'),
    DivGreen = document.getElementById('divgreen'),
    DivYellow = document.getElementById('divyellow'),
    DivBlack = document.getElementById('divblack'),
    H2 = document.getElementById('h2'),
    Input = document.getElementById('input'),
    Button = document.getElementById('button'),
    Textt = document.getElementById('text'),
    Icons = document.getElementById('icons');

// **********


Icons.ondblclick = function () {
    DivF.style.display = "none";
    H2.style.display = "none";
    DivRed.style.display = "none";
    DivBlue.style.display = "none";
    DivGreen.style.display = "none";
    DivYellow.style.display = "none";
    DivBlack.style.display = "none";
    Input.style.display = "none";
    Button.style.display = "none";
}

Icons.onclick = function () {
    Textt.innerHTML = "";
    Textt.style.background = '';
    Input.style.background = "#fff";
    Input.style.border = "none";
    DivF.style.background = "#fff";
    H2.style.color = "#fff";
}

// *****************

DivRed.onclick = function () {
    DivF.style.background = "red";
    H2.style.color = "red";
    Textt.innerHTML = "";
    Textt.style.background = '';
    Input.style.background = "#fff";
    Input.style.border = "none";
}


DivBlue.onclick = function () {
    DivF.style.background = "blue";
    H2.style.color = "blue";
    Textt.innerHTML = "";
    Textt.style.background = '';
    Input.style.background = "#fff";
    Input.style.border = "none";
}

DivGreen.onclick = function () {
    DivF.style.background = "green";
    H2.style.color = "green";
    Textt.innerHTML = "";
    Textt.style.background = '';
    Input.style.background = "#fff";
    Input.style.border = "none";
}

DivYellow.onclick = function () {
    DivF.style.background = "YELLOW";
    H2.style.color = "YELLOW";
    Textt.innerHTML = "";
    Textt.style.background = '';
    Input.style.background = "#fff";
    Input.style.border = "none";
}

DivBlack.onclick = function () {
    DivF.style.background = "BLACK";
    H2.style.color = "BLACK";
    Textt.innerHTML = "";
    Textt.style.background = '';
    Input.style.background = "#fff";
    Input.style.border = "none";
}

// ****************

Button.onclick = function () {
    if (Input.value == "") {
        Input.style.border = "2px solid red";
        Textt.style.color = 'red';
        Textt.style.background = 'rgba(255, 183, 183, 0.767)';
        Textt.innerHTML = 'wrong message ! Sorry, data must be entered !!';
        DivF.style.background = "#fff";
        H2.style.color = "#fff";
    } else {
        DivF.style.background = Input.value;
        H2.style.color = Input.value;
        Textt.innerHTML = "";
        Textt.style.background = '';
        Input.style.background = "#fff";
        Input.style.border = "none";
    }
}



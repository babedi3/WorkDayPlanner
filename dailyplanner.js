function save9() {
    event.preventDefault();
    var txt9 = document.getElementById("9am").value;
    localStorage.setItem('txt9', JSON.stringify(txt9));
}
document.getElementById("9am").innerHTML = JSON.parse(localStorage.getItem("txt9"));

function save10() {
    event.preventDefault();
    var txt10 = document.getElementById("10am").value;
    localStorage.setItem('txt10', JSON.stringify(txt10));
}
document.getElementById("10am").innerHTML = JSON.parse(localStorage.getItem("txt10"));

function save11() {
    event.preventDefault();
    var txt11 = document.getElementById("11am").value;
    localStorage.setItem('txt11', JSON.stringify(txt11));
}
document.getElementById("11am").innerHTML = JSON.parse(localStorage.getItem("txt11"));

function save12() {
    event.preventDefault();
    var txt12 = document.getElementById("12pm").value;
    localStorage.setItem('txt12', JSON.stringify(txt12));
}
document.getElementById("12pm").innerHTML = JSON.parse(localStorage.getItem("txt12"));

function save1() {
    event.preventDefault();
    var txt1 = document.getElementById("1pm").value;
    localStorage.setItem('txt1', JSON.stringify(txt1));
}
document.getElementById("1pm").innerHTML = JSON.parse(localStorage.getItem("txt1"));

function save2() {
    event.preventDefault();
    var txt2 = document.getElementById("2pm").value;
    localStorage.setItem('txt2', JSON.stringify(txt2));
}
document.getElementById("2pm").innerHTML = JSON.parse(localStorage.getItem("txt2"));

function save3() {
    event.preventDefault();
    var txt3 = document.getElementById("3pm").value;
    localStorage.setItem('txt3', JSON.stringify(txt3));
}
document.getElementById("3pm").innerHTML = JSON.parse(localStorage.getItem("txt3"));

function save4() {
    event.preventDefault();
    var txt4 = document.getElementById("4pm").value;
    localStorage.setItem('txt4', JSON.stringify(txt4));
}
document.getElementById("4pm").innerHTML = JSON.parse(localStorage.getItem("txt4"));

function save5() {
    event.preventDefault();
    var txt5 = document.getElementById("5pm").value;
    localStorage.setItem('txt5', JSON.stringify(txt5));
}
document.getElementById("5pm").innerHTML = JSON.parse(localStorage.getItem("txt5"));





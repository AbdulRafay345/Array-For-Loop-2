let originalString = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"]


// alert

function simpleAlert() {

    document.getElementById("result").innerHTML = ""
    alert("A Simple Alert.")

}


// print my name 

function print() {

    document.getElementById("result").innerHTML = ""
    let name = document.getElementById("input").value;

    if (!name) {
        alert("Enter your Name.")
        return;
    }
    document.getElementById("result").innerHTML = name

}


// all cities

let cities = originalString;

function allCities() {

    document.getElementById("result").innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1
        document.getElementById("result").innerHTML += num + ") " + cities[i] + "<br />"
    }

}


// add cities

function addCities() {

    let city = document.getElementById("input").value;
    if (!city) {
        alert("Enter Your City.")
        return;
    }
    document.getElementById("result").innerHTML = "";
    let addNewCities = cities.push(city);
    document.getElementById("result").innerHTML = '<span class="fs-5 text-success">"' + city + '"</span> has been successfully added into list.'

}


// table

function generateTable() {

    let number = document.getElementById("input").value;

    if (!number) {
        alert("Please a enter number");
        return;
    }

    let limit = +prompt('Table Upto?')
    document.getElementById("result").innerHTML = "";

    for (let i = 1; i <= limit; i++) {
        document.getElementById("result").innerHTML += number + " * " + i + " = " + number * i + '<br />'
    }

}

// clear input
function clearInput() {
    document.getElementById("input").value = "";
}

// clear statement
function clearOutput() {
    document.getElementById("result").innerHTML = "";
}
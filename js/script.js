var BIOGRAPHY_TEXT = "Text";
var EMAIL = "joelact13@outlook.pt";

window.onload = function initialize() {
    try {
        document.getElementById("biography-text").innerHTML = BIOGRAPHY_TEXT;
        document.getElementById("email").innerHTML = EMAIL;
    } catch (err) {
        alert("Illegal Argument");
    }
}
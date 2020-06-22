 // LOADER

var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 2400);
}

function showPage() {
    document.getElementById("load").style.display = "none";
    document.getElementById("mainBod").style.display = "block";
}
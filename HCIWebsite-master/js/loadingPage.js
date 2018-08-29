function loader() {
    var param = document.URL.split('?')[1];
    if (param !== "home") {
        myVar = setTimeout(showPage, 3000);
    } else {
        showPage();
    }
}
    
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "block";
}
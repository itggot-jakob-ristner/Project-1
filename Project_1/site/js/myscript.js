function myFunction() {
    var x = document.getElementById("list");
    if (x.className === "list") {
        x.className = "none";
    } else {
        x.className = "list";
    } 

    x = document.getElementById("information"); 
    if (x.className === "none") {
        x.className = "information";
    } else {
        x.className = "none"
    }
    
}
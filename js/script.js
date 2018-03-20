function openNav() {
    
    var x = document.getElementById("navigation");
    console.log(x);
    if (x.className === "navigation") {
        x.classList.add("menujs");
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
        
    } else {
        x.className = "navigation";
        document.getElementById("threeline-icon").innerHTML = "&#9776;";
    }
}
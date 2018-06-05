var $li = document.querySelector('[data-js="threeline-icon"]');

function openNav() {
    
    var $navigation = document.getElementById("navigation");
    if ($navigation.className === "navigation") {
        $navigation.classList.add("menujs");
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
        
    } else {
        $navigation.className = "navigation";
        document.getElementById("threeline-icon").innerHTML = "&#9776;";
    }
}


$li.addEventListener("click", openNav);

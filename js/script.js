var $li = document.querySelector("threeline-icon");

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

$li.addEventListiner("click", openNav);
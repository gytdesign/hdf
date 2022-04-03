/* show/hide an element */
function showHide(elementName) {
    var target = document.getElementById(elementName); // store element in variable
    if (target.style.display == "block") {
        target.style.display = "none"; // hide the visible element
    } else {
        target.style.display = "block"; // show the invisible element
    }
}

/* animate the Side Navigation */
function toggleSidenav() {
    if (sideNav.style.width > "0%") {
        sideNav.style.width = "0%"; // hide the visible sideNav
    } else {
        sideNav.style.width = "250px"; // show the hidden sideNav
    }
}

/* show/hide an element using transparency */
function toggleTransparency(elementName) {
    var target = document.getElementById(elementName); // store element in variable
    if (target.style.opacity == "100%") {
        target.style.opacity = "0%"; // hide the visible element
    } else {
        target.style.opacity = "100%"; // show the invisible element
    }
}
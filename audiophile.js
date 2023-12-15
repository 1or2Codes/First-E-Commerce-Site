const hamburgerDetails = document.querySelector(".hamburger-details");
const hamburger = document.querySelector(".hamburger")


function displayNavBar() {
    hamburgerDetails.classList.toggle("show-nav")
}

hamburger.addEventListener("click", displayNavBar)

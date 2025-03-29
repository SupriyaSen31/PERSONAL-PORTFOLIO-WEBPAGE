function openmenu() {
    document.querySelector(".items").classList.add("active");
    document.querySelector(".fa-bars").style.display = "none";
    document.querySelector(".fa-xmark").style.display = "block";
}

function closemenu() {
    document.querySelector(".items").classList.remove("active");
    document.querySelector(".fa-bars").style.display = "block";
    document.querySelector(".fa-xmark").style.display = "none";
}
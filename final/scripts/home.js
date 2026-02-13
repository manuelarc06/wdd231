const menuButton = document.getElementById("menu-button");
const nav = document.querySelector(".header-nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.innerHTML = nav.classList.contains("open") ? "&#215;" : "&#9776;";
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

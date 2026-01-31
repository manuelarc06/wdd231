document.getElementById("timestamp").value = new Date().toISOString();

const menuButton = document.getElementById("menu-button");
const nav = document.querySelector(".header-nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.innerHTML = nav.classList.contains("open") ? "&#215;" : "&#9776;";
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);

    const scrollY = window.scrollY;

    modal.showModal();

    window.scrollTo({
        top: scrollY,
        behavior: "instant"
    });
}


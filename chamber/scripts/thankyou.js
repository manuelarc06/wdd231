const menuButton = document.getElementById("menu-button");
const nav = document.querySelector(".header-nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.innerHTML = nav.classList.contains("open") ? "&#215;" : "&#9776;";
});

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    // Capturar los valores
    const fname = params.get("fname") || "";
    const lname = params.get("lname") || "";
    const email = params.get("email") || "";
    const phone = params.get("phone") || "";
    const business = params.get("business") || "";
    const timestamp = params.get("timestamp") || "";

    // Mostrar en la página
    document.getElementById("display-fname").textContent = fname;
    document.getElementById("display-lname").textContent = lname;
    document.getElementById("display-email").textContent = email;
    document.getElementById("display-phone").textContent = phone;
    document.getElementById("display-business").textContent = business;

    // Formatear fecha legible
    if (timestamp) {
        const date = new Date(timestamp);
        document.getElementById("display-timestamp").textContent = date.toLocaleString();
    }
});

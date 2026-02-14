document.addEventListener("DOMContentLoaded", () => {
    const momentCards = document.querySelectorAll(".moment-card");

    momentCards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.transition = "all 0.5s ease";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 200); 
    });

    const toast = document.getElementById("welcome-toast");
    const closeBtn = toast.querySelector(".toast-close");

    closeBtn.addEventListener("click", () => {
        toast.style.display = "none";
    });

    setTimeout(() => {
        toast.style.display = "none";
    }, 5000);
});
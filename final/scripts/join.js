document.addEventListener("DOMContentLoaded", () => {
    const programSelect = document.getElementById("program");
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const age = document.getElementById("age");
    const comments = document.getElementById("comments");

    if (localStorage.getItem("selectedProgram")) {
        programSelect.value = localStorage.getItem("selectedProgram");
    }
    if (localStorage.getItem("fullname")) {
        fullname.value = localStorage.getItem("fullname");
    }
    if (localStorage.getItem("email")) {
        email.value = localStorage.getItem("email");
    }
    if (localStorage.getItem("age")) {
        age.value = localStorage.getItem("age");
    }
    if (localStorage.getItem("comments")) {
        comments.value = localStorage.getItem("comments");
    }

    programSelect.addEventListener("change", () => {
        localStorage.setItem("selectedProgram", programSelect.value);
    });
    fullname.addEventListener("input", () => {
        localStorage.setItem("fullname", fullname.value);
    });
    email.addEventListener("input", () => {
        localStorage.setItem("email", email.value);
    });
    age.addEventListener("input", () => {
        localStorage.setItem("age", age.value);
    });
    comments.addEventListener("input", () => {
        localStorage.setItem("comments", comments.value);
    });

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

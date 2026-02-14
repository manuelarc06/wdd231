const container = document.getElementById("programs-container");
const modal = document.getElementById("program-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".close-button");

async function loadPrograms() {
    try {
        const response = await fetch("data/programs.json"); 
        if (!response.ok) throw new Error("Failed to fetch programs.json");
        const programs = await response.json();

        programs.forEach(program => {
            const card = document.createElement("div");
            card.className = "program-card";

            card.innerHTML = `
                <img src="${program.image}" alt="${program.title}">
                <div class="program-info">
                    <h3>${program.title}</h3>
                    <p>${program.description}</p>
                    <button>Learn More</button>
                </div>
            `;

            const button = card.querySelector("button");
            button.addEventListener("click", () => {
                modal.classList.add("show");
                modalTitle.textContent = program.title;
                modalDescription.textContent = program.detailed;
                document.getElementById("modal-duration").textContent = program.duration;
                document.getElementById("modal-level").textContent = program.level;
                document.getElementById("modal-schedule").textContent = program.schedule;
                document.getElementById("modal-price").textContent = program.price;
            });

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading programs:", error);
        container.innerHTML = "<p>Sorry, programs could not be loaded at this time.</p>";
    }
}

loadPrograms();

closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});
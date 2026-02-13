const menuButton = document.getElementById("menu-button");
const nav = document.querySelector(".header-nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.innerHTML = nav.classList.contains("open") ? "&#215;" : "&#9776;";
});


const membersContainer = document.getElementById("members");
const gridBtn = document.getElementById("gridView");
const listBtn = document.getElementById("listView");

let membersData = [];

async function getMembers() {
    try {
        const response = await fetch("data/members.json");
        const data = await response.json();
        membersData = data;
        displayGrid(membersData);
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

function displayGrid(members) {
    membersContainer.innerHTML = "";
    membersContainer.className = "grid-view";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        membersContainer.appendChild(card);
    });
}

function displayList(members) {
    membersContainer.innerHTML = "";
    membersContainer.className = "list-view";

    members.forEach(member => {
        const row = document.createElement("div");
        row.classList.add("member-row");

        row.innerHTML = `
            <span class="col name">${member.name}</span>
            <span class="col address">${member.address}</span>
            <span class="col phone">${member.phone}</span>
            <span class="col website">
                <a href="${member.website}" target="_blank">Website</a>
            </span>
        `;

        membersContainer.appendChild(row);
    });
}

gridBtn.addEventListener("click", () => {
    displayGrid(membersData);
});

listBtn.addEventListener("click", () => {
    displayList(membersData);
});

getMembers();
document.addEventListener("DOMContentLoaded", () => {
    const formDataDiv = document.getElementById("form-data");

    const params = new URLSearchParams(window.location.search); 
    let html = "<ul>";

    if (params.toString()) {
        params.forEach((value, key) => {
            const fieldName = key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
            html += `<li><strong>${fieldName}:</strong> ${value || "N/A"}</li>`;
        });
    } else {
        const fields = ["fullname", "email", "age", "program", "comments"];
        fields.forEach(field => {
            const value = localStorage.getItem(field) || "N/A";
            const fieldName = field.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
            html += `<li><strong>${fieldName}:</strong> ${value}</li>`;
        });
    }

    html += "</ul>";
    formDataDiv.innerHTML = html;
});

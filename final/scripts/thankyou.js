document.addEventListener("DOMContentLoaded", () => {
    const formDataDiv = document.getElementById("form-data");

    const params = new URLSearchParams(window.location.search); 

    if (!params.toString()) {
        formDataDiv.innerHTML = "<p>No form data found.</p>";
    } else {
        let html = "<ul>";
        params.forEach((value, key) => {
            const fieldName = key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
            html += `<li><strong>${fieldName}:</strong> ${value}</li>`;
        });
        html += "</ul>";
        formDataDiv.innerHTML = html;
    }
});

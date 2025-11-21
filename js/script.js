// window.onload = function () {
//     const userName = prompt("Masukkan nama kamu:");
//     const welcomeText = document.getElementById("welcomeText");

//     // Kalau user cancel / kosong → fallback
//     welcomeText.textContent = userName || "Tamu";
// };

if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {

    window.onload = function () {
        let userName = prompt("Insert Your Name:");
        
        // kode ini anggap ga ada aja ya kak hhe
        if (userName && userName.toLowerCase() === "yessi") {
            userName = "Baby";
        }

        const welcomeText = document.getElementById("welcomeText");

        if (welcomeText) {
            welcomeText.textContent = userName || "Guest";
        }
    };
}

document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector("input[name=gender]:checked").value;
    const msg = document.getElementById("msgtext").value;

    const now = new Date().toString();

    document.getElementById("resultBox").innerHTML = `
        <p><strong>Current Time:</strong><br>${now}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Message:</strong> ${msg}</p>
    `;
});
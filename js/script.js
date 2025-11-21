// window.onload = function () {
//     const userName = prompt("Masukkan nama kamu:");
//     const welcomeText = document.getElementById("welcomeText");

//     // Kalau user cancel / kosong → fallback
//     welcomeText.textContent = userName || "Tamu";
// };

// if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {

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
// }

document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector("input[name=gender]:checked").value;
    const msg = document.getElementById("messageText").value;

    const now = new Date().toString();

    document.getElementById("resultBox").innerHTML = `
        <p><strong>Current Time:</strong><br>${now}</p>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${dob}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${msg}</p>
    `;
});
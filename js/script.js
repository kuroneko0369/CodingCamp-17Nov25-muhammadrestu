// window.onload = function () {
//     const userName = prompt("Masukkan nama kamu:");
//     const welcomeText = document.getElementById("welcomeText");

//     // Kalau user cancel / kosong → fallback
//     welcomeText.textContent = userName || "Tamu";
// };

if (window.location.pathname.endsWith("index.html") || window.location.pathname === "") {

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
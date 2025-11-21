// window.onload = function () {
//     const userName = prompt("Masukkan nama kamu:");
//     const welcomeText = document.getElementById("welcomeText");

//     // Kalau user cancel / kosong → fallback
//     welcomeText.textContent = userName || "Tamu";
// };

if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    window.onload = function () {
        const userName = prompt("Insert Your Name:");
        const welcomeText = document.getElementById("welcomeText");

        if (welcomeText) {
            welcomeText.textContent = userName || "Guest";
        }else if (welxomeText) {
          welcomeText.textContent = "Yessi" || "guest";
        }
    };
}
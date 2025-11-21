// if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
//     let username = prompt("Masukkan nama kamu:");

//     if (username && username.trim() !== "yessi") {
//         document.getElementById("welcomeText").innerText = `Halo babyy, Selamat Datang Di Website Aku`;
//     }
//     else (username && username.trim() !== "") {
//         document.getElementById("welcomeText").innerText = `Halo ${username}, Selamat Datang Di Website`;
//     }
// }
// Welcome popup jadul tapi manjur
window.onload = function () {
    const userName = prompt("Masukkan nama kamu:");
    const welcomeText = document.getElementById("welcomeText");

    // Kalau user cancel / kosong → fallback
    welcomeText.textContent = userName || "Tamu";
};
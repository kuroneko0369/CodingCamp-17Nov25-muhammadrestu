if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    let username = prompt("Masukkan nama kamu:");

    if (username && username.trim() !== "yessi") {
        document.getElementById("welcomeText").innerText = `Halo babyy, Selamat Datang Di Website Aku`;
    }
    else (username && username.trim() !== "") {
        document.getElementById("welcomeText").innerText = `Halo ${username}, Selamat Datang Di Website`;
    }
}

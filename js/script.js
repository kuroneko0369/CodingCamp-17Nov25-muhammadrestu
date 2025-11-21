if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    let username = prompt("Masukkan nama kamu:");

    if (username && username.trim() !== "") {
        document.getElementById("welcomeText").innerText = `Hi ${username}, Selamat Datang Di Website`;
    }
}
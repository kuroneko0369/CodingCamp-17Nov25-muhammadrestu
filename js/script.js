if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {

    const modal = document.getElementById("nameModal");
    const input = document.getElementById("modalNameInput");
    const saveBtn = document.getElementById("saveNameBtn");
    const welcomeText = document.getElementById("welcomeText");

    let savedName = localStorage.getItem("username");


    if (!savedName) {
        modal.classList.add("show");
    } else {
        welcomeText.innerText = `Hi ${savedName}, Welcome To Website`;
    }


    saveBtn.addEventListener("click", () => {
        let name = input.value.trim();

        if (name !== "") {
            localStorage.setItem("username", name);
            welcomeText.innerText = `Hi ${name}, Welcome To Website`;
            modal.classList.remove("show");
        }
    });


    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            saveBtn.click();
        }
    });
}
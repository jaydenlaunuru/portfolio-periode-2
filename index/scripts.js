window.onload = function() {
    let cookiePopup = document.getElementById("cookie-popup");
    let acceptBtn = document.getElementById("accept");
    let rejectBtn = document.getElementById("reject");


    if (localStorage.getItem("cookieconsent") !== "accepted" && localStorage.getItem("cookieconsent") !== "rejected") {
        cookiePopup.style.display = "flex";
    }


    acceptBtn.onclick = function() {
        localStorage.setItem("cookieconsent", "accepted");
        cookiePopup.style.display = "none";
    }


    rejectBtn.onclick = function() {
        localStorage.setItem("cookieconsent", "rejected");
        cookiePopup.style.display = "none";
    }
}








let modetogglebutton = document.getElementById("mode-toggle");

modetogglebutton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
});
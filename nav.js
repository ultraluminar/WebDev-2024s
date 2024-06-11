document.addEventListener("DOMContentLoaded", async function () {
    const icon = document.getElementById("burger-menu");
    const nav = document.getElementById("mobile-side-nav");

    icon.addEventListener("click", () => {
        icon.classList.toggle('open');
        nav.classList.toggle('open');
    });
});
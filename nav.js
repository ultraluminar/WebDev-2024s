const icon = document.getElementById("burger-menu");
const nav = document.getElementById("mobile-side-nav");
const filter = document.getElementById("mobile-nav-filter");

function toggleNav() {
    icon.classList.toggle('open');
    nav.classList.toggle('open');
    filter.classList.toggle('open');
}

icon.addEventListener("click", () => {
    toggleNav();
});

filter.addEventListener("click", () => {
    toggleNav();
});

// Get the navbar
let navbar = document.getElementById("navbar");

// Set the initial scroll position
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down - hide the navbar
        navbar.style.top = "-80px";
    } else {
        // Scrolling up - show the navbar
        navbar.style.top = "0";
    }
    // Update the last scroll position
    lastScrollTop = scrollTop;
});

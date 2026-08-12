/* =================================
   LUMIN LOADING SCREEN
   ================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("loaded");
    }, 700);

});


/* =================================
   CUSTOM CURSOR
   ================================= */

const cursor = document.querySelector(".custom-cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (event) => {

    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

    cursorDot.style.left = `${event.clientX}px`;
    cursorDot.style.top = `${event.clientY}px`;

});


/* Make the cursor react to clickable elements */

const interactiveElements = document.querySelectorAll(
    "a, button, .project-card, .skills span"
);

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
    });

    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
    });

});

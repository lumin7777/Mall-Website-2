document.addEventListener("DOMContentLoaded", () => {

    /* CUSTOM CURSOR */

    const cursor = document.querySelector(".custom-cursor");
    const cursorDot = document.querySelector(".cursor-dot");

    if (!cursor || !cursorDot) return;

    document.addEventListener("mousemove", (event) => {

        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;

        cursorDot.style.left = `${event.clientX}px`;
        cursorDot.style.top = `${event.clientY}px`;

    });


    /* CURSOR HOVER EFFECT */

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

});

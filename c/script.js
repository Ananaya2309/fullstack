const canvas = document.getElementById("drawArea");
const ctx = canvas.getContext("2d");

let isDrawing = false;

// Mouse down → start drawing
canvas.addEventListener("mousedown", () => {
    isDrawing = true;
    ctx.beginPath();
});

// Mouse move → draw line
canvas.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
});

// Mouse up → stop drawing
canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});

// Mouse leave canvas → stop drawing
canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
});

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("mouseenter", () => {
  button1.classList.add("button-hover-1");
});

button1.addEventListener("mouseleave", () => {
  button1.classList.remove("button-hover-1");
});

button2.addEventListener("mouseenter", () => {
  button2.classList.add("button-hover-2");
});

button2.addEventListener("mouseleave", () => {
  button2.classList.remove("button-hover-2");
});

const open = document.getElementById("open");
const nav = document.querySelector("nav");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  nav.classList.add("open-nav");
  open.style.display ="none";
  close.style.display ="block";

  });

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
  close.style.display ="none";
  open.style.display ="block";
});

document.getElementById("year").textContent = new Date().getFullYear();

const splash = document.querySelector(".splash");
if (splash) {
  if (document.documentElement.classList.contains("no-splash")) splash.remove();
  else {
    splash.addEventListener("animationend", (e) => { if (e.animationName === "splash-close") splash.remove(); });
    setTimeout(() => splash.remove(), 6000);
  }
}

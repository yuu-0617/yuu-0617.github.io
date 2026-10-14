document.getElementById("year").textContent = new Date().getFullYear();

const splash = document.querySelector(".splash");
if (splash) {
  if (document.documentElement.classList.contains("no-splash")) splash.remove();
  else {
    splash.addEventListener("animationend", (e) => { if (e.animationName === "splash-close") splash.remove(); });
    setTimeout(() => splash.remove(), 6000);
  }
}

const reveals = document.querySelectorAll(".rv");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in"));
}

const phone = document.querySelector(".device img");
if (phone && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let ticking = false;
  const update = () => {
    const r = phone.parentElement.getBoundingClientRect();
    const p = (r.top + r.height / 2) / innerHeight - 0.5;
    phone.style.setProperty("--lift", `${Math.max(-1, Math.min(1, p)) * 36}px`);
    ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

document.body.style = "background-color: var(--bs-dark);transition: 0.5s;";
const sun = "/img/sun.svg";
const moon = "/img/moon.svg";

var theme = "dark";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);

function setTheme() {
  switch (theme) {
    case "dark":
      setLight();
      theme = "light";
      break;
    case "light":
      setDark();
      theme = "dark";
      break;
  }
}
function setLight() {
  root.style.setProperty("--bs-dark", "#212529");
  container.classList.remove("shadow-dark");
  document.body.classList.remove("shadow-dark");

  setTimeout(() => {
    container.classList.add("shadow-light");
    document.body.classList.add("shadow-light");
    themeIcon.classList.remove("change");
    document.getElementsByClassName("xKom")[0].src = "/img/logo_jasne.png";
  }, 30);
  themeIcon.classList.add("change");
  themeIcon.src = sun;
  document.getElementById("theme-icon").classList.add("checker");
}
function setDark() {
  root.style.setProperty(
    "--bs-dark",
    "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
  );

  container.classList.remove("shadow-light");
  document.body.classList.remove("shadow-light");
  setTimeout(() => {
    container.classList.add("shadow-dark");
    document.body.classList.add("shadow-dark");
    themeIcon.classList.remove("change");
    document.getElementsByClassName("xKom")[0].src = "/img/logo.png";
  }, 30);
  themeIcon.classList.add("change");
  themeIcon.src = moon;

  document.getElementById("theme-icon").classList.remove("checker");
}
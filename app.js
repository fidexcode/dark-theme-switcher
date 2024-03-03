const darkbtn = document.querySelector(".dark");
const ligthbtn = document.querySelector(".light");
const body = document.body;

darkbtn.addEventListener("click", () => {
  body.classList.add("darktheme");

  if (body.classList.contains("darktheme")) {
    localStorage.setItem("theme", "darktheme");
    q;
  }
});

ligthbtn.addEventListener("click", () => {
  body.classList.remove("darktheme");
  if (!body.classList.contains("darktheme")) {
    localStorage.setItem("theme", "");
  }
});

const storedtheme = localStorage.getItem("theme");
if (storedtheme) {
  body.classList.add(storedtheme);
}

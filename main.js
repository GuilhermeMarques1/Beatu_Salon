// DOM = Document Object Model

const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle("show");
  });
}

const menuItems = document.querySelectorAll("#header nav ul li a");

for (const item of menuItems) {
  item.addEventListener('click', function() {
    nav.classList.remove("show");
  });
}

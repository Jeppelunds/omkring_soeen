console.log('hello world');

const BurgerIcon = document.querySelector(".fa-bars")
const BurgerMenu = document.querySelector(".burger-menu")

BurgerIcon.addEventListener("click", () => {
  BurgerMenu.classList.toggle("active");
});

BurgerMenu.addEventListener("click", () => {
  BurgerMenu.classList.remove("active");
});


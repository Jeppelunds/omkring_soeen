console.log('hello world');

/* Burger menu */ 

const BurgerIcon = document.querySelector(".fa-bars")
const BurgerMenu = document.querySelector(".burger-menu")

BurgerIcon.addEventListener("click", () => {
  BurgerMenu.classList.toggle("active");
});

BurgerMenu.addEventListener("click", () => {
  BurgerMenu.classList.remove("active");
});

/* nav menu */ 

const SectionRight = document.querySelector(".test");
const FirstSectionMenu = document.querySelector("._2Nx_1");

const observer = new IntersectionObserver(entries => {
  const visibilityRatio = entries[0].intersectionRatio;
  console.log(`Visibility Ratio: ${visibilityRatio}`);
  
  if (visibilityRatio >= 0.75) {
    FirstSectionMenu.classList.add("show");
  } else {
    FirstSectionMenu.classList.remove("show");
  }
}, {
  threshold: 0.75,
});

observer.observe(SectionRight);


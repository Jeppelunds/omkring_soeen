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

const SectionBoat = document.querySelector(".boat-menu");
const BoatSectionMenu = document.querySelector("._2Nx_1");
const SectionBridge = document.querySelector(".bridge-menu")
const BridgeSectionMenu = document.querySelector("._2Nx_2");
const SectionSivene = document.querySelector(".sivene-menu");
const SiveneSectionMenu = document.querySelector("._2Nx_3");
const SectionChurch = document.querySelector(".church-menu");
const ChurchSectionMenu = document.querySelector("._2Nx_4");
const SectionDucks = document.querySelector(".ducks-menu");
const DucksSectionMenu = document.querySelector("._2Nx_5");

const sections = [
  { section: SectionBoat, menu: BoatSectionMenu },
  { section: SectionBridge, menu: BridgeSectionMenu },
  { section: SectionSivene, menu: SiveneSectionMenu },
  { section: SectionChurch, menu: ChurchSectionMenu },
  { section: SectionDucks, menu: DucksSectionMenu }
];

const observerCallback = (menu, visibilityRatio) => {
  if (visibilityRatio >= 0.8) {
    menu.classList.add("show");
  } else {
    menu.classList.remove("show");
  }
};

const observers = [];

sections.forEach(({ section, menu }) => {
  const observer = new IntersectionObserver(entries => {
    const visibilityRatio = entries[0].intersectionRatio;
    console.log(`Visibility Ratio: ${visibilityRatio}`);
    observerCallback(menu, visibilityRatio);
  }, {
    threshold: 0.8,
  });
  
  observer.observe(section);
  observers.push(observer);
});









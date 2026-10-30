export const initBurger = () => {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");
  const body = document.body;

  if (burger && nav) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("is-open");
      nav.classList.toggle("is-open");
      body.classList.toggle("disable-scroll");
    });

    const servicesLink = document.querySelector(".header__link--has-drop");
    if (servicesLink) {
      servicesLink.addEventListener("click", (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          const dropdown = servicesLink.nextElementSibling;
          if (dropdown) {
            dropdown.classList.toggle("is-active");
            servicesLink.classList.toggle("is-active");
          }
        }
      });
    }

    const navLinks = document.querySelectorAll(
      ".header__link:not(.header__link--has-drop)",
    );
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        burger.classList.remove("is-open");
        nav.classList.remove("is-open");
        body.classList.remove("disable-scroll");
      });
    });
  }
};

import "../styles/main.scss";

import { initBurger } from "./burger";
import { initAccordion } from "./accordion";
import { initSlider } from "./slider";
import { initScrollTop } from "./scroll";

document.addEventListener("DOMContentLoaded", () => {
  initBurger();
  initAccordion();
  initSlider();
  initScrollTop();
});

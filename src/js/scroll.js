export const initScrollTop = () => {
  const toTopBtn = document.querySelector(".js-to-top");
  if (toTopBtn) {
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
};

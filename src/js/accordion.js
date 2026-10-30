export const initAccordion = () => {
  const accordionItems = document.querySelectorAll(".accordion__item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion__header");
    const body = item.querySelector(".accordion__body");

    if (header && body) {
      header.addEventListener("click", () => {
        const isActive = item.classList.contains("is-active");

        accordionItems.forEach((otherItem) => {
          const otherBody = otherItem.querySelector(".accordion__body");
          otherItem.classList.remove("is-active");
          if (otherBody) {
            otherBody.style.maxHeight = null;
          }
        });

        if (!isActive) {
          item.classList.add("is-active");
          body.style.maxHeight = body.scrollHeight + "px";
        }
      });
    }
  });

  const activeItem = document.querySelector(".accordion__item.is-active");
  if (activeItem) {
    const activeBody = activeItem.querySelector(".accordion__body");
    if (activeBody) {
      activeBody.style.maxHeight = activeBody.scrollHeight + "px";
    }
  }
};

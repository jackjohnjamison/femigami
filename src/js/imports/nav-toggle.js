const navToggleElm = document.getElementById("js-nav-toggle");
const navContent = document.querySelector(".js-nav-content");
const navLinks = navContent.querySelectorAll("a");

const isOpen = () => {
  return navToggleElm.getAttribute("aria-expanded") === "true";
};

const setLinkActiveState = (isActive) => {
  const tabIndex = isActive ? 0 : -1;
  navLinks.forEach((link) => {
    link.setAttribute("aria-hidden", isActive);
    link.setAttribute("tabindex", tabIndex);
  });
};

const toggleOpenState = () => {
  const oldValue = navToggleElm.getAttribute("aria-expanded");
  const value = oldValue !== "true";
  navToggleElm.setAttribute("aria-expanded", value);

  setLinkActiveState(value);
};

const initNavToggle = () => {
  // Set initial state
  navToggleElm.setAttribute("aria-expanded", false);
  setLinkActiveState(false);

  // Open and close on enter or space when menu button is focused
  document.addEventListener("keydown", (e) => {
    const activeElement = document.activeElement.id;
    const key = e.code;

    if (
      (key === "Space" || key === "Enter") &&
      activeElement === "js-nav-toggle"
    ) {
      toggleOpenState();
    }
  });

  document.body.addEventListener("click", (e) => {
    if (navToggleElm.contains(e.target)) {
      toggleOpenState();
    } else if (!navContent.contains(e.target) && isOpen()) {
      toggleOpenState();
    }
  });
};

export default initNavToggle;

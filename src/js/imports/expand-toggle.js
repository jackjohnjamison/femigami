const expandToggle = () => {
  const expandContentTriggers = document.querySelectorAll(".js-expandable");

  expandContentTriggers.forEach((trigger) => {
    trigger.setAttribute("aria-expanded", false);

    // Toggles aria-expanded value
    trigger.addEventListener("click", () => {
      const value = trigger.getAttribute("aria-expanded");
      const valueOppasite = value !== "true";
      trigger.setAttribute("aria-expanded", valueOppasite);
    });
  });
};

export default expandToggle;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form[data-proposal-form]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");

  if (navToggle && navMenu) {
    const closeMenu = () => {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.dataset.open = "false";
      navMenu.classList.add("hidden");
    };

    const openMenu = () => {
      navToggle.setAttribute("aria-expanded", "true");
      navMenu.dataset.open = "true";
      navMenu.classList.remove("hidden");
    };

    closeMenu();

    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
          closeMenu();
        }
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && window.innerWidth < 768) {
        closeMenu();
        navToggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        navMenu.classList.remove("hidden");
        navMenu.dataset.open = "true";
        navToggle.setAttribute("aria-expanded", "false");
      } else {
        closeMenu();
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
});

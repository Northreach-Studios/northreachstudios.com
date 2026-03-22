document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form[data-proposal-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
});

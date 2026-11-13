const reminderButton = document.querySelector("#reminder-toggle");
const reminderStatus = document.querySelector("#reminder-status");

reminderButton.addEventListener("click", () => {
  const isEnabled = reminderButton.getAttribute("aria-pressed") === "true";
  const nextState = !isEnabled;

  reminderButton.setAttribute("aria-pressed", String(nextState));
  reminderStatus.textContent = nextState
    ? "Напоминание включено (демо)"
    : "Напоминание выключено";
});
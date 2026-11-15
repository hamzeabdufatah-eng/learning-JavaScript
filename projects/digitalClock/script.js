function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, `0`);
  const seconds = String(now.getSeconds()).padStart(2, `0`);
  const AMPM = hours >= 12 ? `PM` : `AM`;
  hours = hours % 12 || 12;
  const formatHours = String(hours);
  document.querySelector(".hours-minutes").textContent =
    `${String(formatHours).padStart(2, `0`)}:${minutes}:${seconds}`;
  document.querySelector(".time-ampm").textContent = AMPM;
  const options = {
    weekday: `long`,
    year: `numeric`,
    day: `numeric`,
    month: `long`,
  };
  document.querySelector(".date").textContent = now.toLocaleDateString(
    undefined,
    options,
  );
}
updateClock();
setInterval(updateClock, 1000);

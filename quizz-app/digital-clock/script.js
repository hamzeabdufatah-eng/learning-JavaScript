// const clockDisplay = document.getElementById("clock");
// const dateDisplay = document.getElementById("date");
// // const clockDisplay = document.getElementById("clock");

// function updateClock() {
//   const now = new Date();
//   const hours = String(now.getHours()).padStart(2, "0");
//   const minutes = String(now.getMinutes()).padStart(2, "0");
//   const seconds = String(now.getSeconds()).padStart(2, "0");
//   clockDisplay.textContent = hours + ":" + minutes + ":" + seconds;
// }
// setInterval(updateClock, 1000);

// function updateDate() {
//   const now = new Date();
//   const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };
//   dateDisplay.textContent = now.toLocaleDateString("en-Us", options);
// }
// updateDate();
const number = 5;
console.log(String(number).padStart(2, "0"));

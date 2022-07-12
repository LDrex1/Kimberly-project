"use strict";
const currentYear = new Date().getFullYear();
let count = currentYear;
while (count < currentYear + 8) {
  document.querySelector(
    "#year"
  ).innerHTML += `<option value="${count}">${count}</option>`;

  //   console.log(document.querySelector("#year"));
  count++;
}

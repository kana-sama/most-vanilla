import { periodic, fromEvent } from "most"

const button = document.querySelector("#button");
const container = document.querySelector("#container");

periodic(500)
  .takeUntil(fromEvent("click", button))
  .forEach(() => {
    container.innerHTML = `<p>${new Date()}</p>` + container.innerHTML;
  });
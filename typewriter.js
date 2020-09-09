"use strict";

document.addEventListener("DOMContentLoaded", start);

let type = document.querySelector("#typewriter");
const text = type.textContent;
const textLen = text.length;
let count = 0;

function start() {
  type.textContent = "";
  count = 0;

  write();
}

function write() {
  if (textLen == count) {
    setTimeout(start, 1000);
  } else {
    addType();
  }
}

function addType() {
  type.textContent = text.substring(0, count + 1);
  count++;
  setTimeout(write, 200);
}

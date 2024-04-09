let count = 1;
direction = true;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (direction) {
    if (count <= 10) {
      count++;
      if (count === 10) {
        direction = false;
      }
    }
  } else {
    if (count >1) {
      count--;
      if (count === 1) {
        direction = false;
      }
    }
  }
  btn.textContent = `Click me ${count}`;
});

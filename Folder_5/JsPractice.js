const h1 = document.querySelector("h1");
for (let i = 0; i < 100; i++) {
  const buttons = document.createElement("button");

  buttons.textContent = `Button No #${i}`;
  buttons.style.color = `#3${i}e6ff`;
  h1.parentElement.append(buttons);
}

console.log(h1.parentElement);

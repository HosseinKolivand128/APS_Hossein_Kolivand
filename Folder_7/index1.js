// Step 1: Store all doth that are inside lis in dothEls
var dothEls = document.querySelectorAll(".doth");
console.log(dothEls);
for (let e in dothEls) {
  console.log(e);
  e.innerText = "does";
}
// Step 2: Iterate through them and change doth to does

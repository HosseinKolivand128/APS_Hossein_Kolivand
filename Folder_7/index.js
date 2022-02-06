var heading = document.getElementsByTagName("h1");
console.log(heading);
for (let i = 0; i < heading.length; i++) {
  heading[i].innerText = "hello";
}

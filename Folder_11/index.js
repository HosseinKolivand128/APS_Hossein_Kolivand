const fs = require("fs");

// fs.mkdir("nodeFolder", { recursive: true }, (e) => {
//   console.log(e);
//   console.log("folder created");
// });

// fs.mkdirSync("newFolder");
// console.log("hshahahahahahah");

const f = process.argv[2] || "hahahah";
try {
  fs.mkdirSync(f);
  fs.writeFileSync(
    `${f}/index.html`,
    "<html><body><h2>Im hossein</h2></body></html>"
  );
  fs.writeFileSync(`${f}/index.css`, "what the fuck is this");
  fs.writeFileSync(`${f}/index.js`, "what the fuck is this");
} catch (e) {
  console.log(e);
}
console.log(f);

function splitTheBill(x) {
  //code away...
  let avrage = 0;
  let count = 0;
  let parameters = [];
  for (item in x) {
    parameters.push(item);
    avrage += x[item];
    count++;
  }
  avrage = avrage / count;
  for (item in x) {
    x[item] = Math.round((x[item] - avrage) * 100) / 100;
  }
  for (item in x) {
    console.log(x[item]);
  }
  return x;
}

splitTheBill({ A: 40, B: 25, X: 10 });
console.log("~~~~~~~~~~~");
splitTheBill({ A: 20, B: 15, C: 10 });

console.log("--------------");

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

function greet(language) {
  const languages = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  // console.log(languages[language]);
  return languages[language] || languages.english;
}

function splitTheBill(x) {
  //code away...
  let avrage = 0;
  let count = 0;
  let parameters = [];
  for (item in x) {
    parameters.push(item);
    avrage += x[item];
    count++;
  }
  avrage = avrage / count;
  for (item in x) {
    x[item] = Math.round((x[item] - avrage) * 100) / 100;
  }
  return x;
}

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

function greet(language) {
  const languages = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  // console.log(languages[language]);
  return languages[language] || languages.english;
}

function aliasGen(firstName1, lastName) {
  // Code Here
  //   console.log(firstName[0].toLowerCase());
  let fName = firstName1[0].toUpperCase();
  let lName = lastName[0].toUpperCase();

  let regexTest = new RegExp("[A-Z]");
  if (!regexTest.test(fName) || !regexTest.test(lName)) {
    return "Your name must start with a letter from A - Z.";
  }
  return `${firstName[fName]} ${surname[lName]}`;
}

/*Get daddy joke*/
const joke = require("give-me-a-joke");

// To get a random dad joke
joke.getRandomDadJoke((joke) => {
  console.log(joke);
});

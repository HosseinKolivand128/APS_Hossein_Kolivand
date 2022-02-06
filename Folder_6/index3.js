const tweetForm = document.querySelector("#tweetForm");
const ul = document.querySelector("ul");
tweetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const tweet = e.target.tweet.value;
  const li = document.createElement("li");
  const b = document.createElement("b");
  b.innerText = username;
  li.innerText = tweet;
  li.append(b);
  ul.append(li);
});

// array.forEach((element) => {});

// const ul = document.querySelector("#tweets");
// function addTweet(username, tweet) {}

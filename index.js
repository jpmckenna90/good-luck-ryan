const Twit = require("twit");
const T = new Twit({
  consumer_key: process.env.APPLICATION_CONSUMER_KEY,

  consumer_secret: process.env.APPLICATION_CONSUMER_SECRET,

  access_token: process.env.ACCESS_TOKEN,

  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

// start stream and track tweets
const stream = T.stream("statuses/filter", { track: "#JavaScript" });

// event handler
stream.on("tweet", (tweet) => {
  // perform some action here
});

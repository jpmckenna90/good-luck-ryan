const Twit = require("twit");
const T = new Twit({
  consumer_key: process.env.APPLICATION_CONSUMER_KEY,

  consumer_secret: process.env.APPLICATION_CONSUMER_SECRET,

  access_token: process.env.ACCESS_TOKEN,

  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

// start stream and track tweets
const stream = T.stream("user", { screen_name: "RyanSmith_26" });

// event handler - listen for tweets 
stream.on("tweet", (tweet) => {
  if(tweet) // if tweet is a retweet from Bill Pulte {screen_name: "pulte"}
  {
    // retweet and wish ryan good luck
  } 
  
});

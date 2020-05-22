const Twit = require("twit");
const express = require("express");
const app = express();
const PORT = 3000;

const T = new Twit({
  consumer_key: process.env.APPLICATION_CONSUMER_KEY,

  consumer_secret: process.env.APPLICATION_CONSUMER_SECRET,

  access_token: process.env.ACCESS_TOKEN,

  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

// start stream and track tweets
const stream = T.stream("statuses/filter", {
  follow: process.env.TEST_ACCOUNT_ID,
});

app.listen(PORT, function () {
  console.log(`app listening on ${PORT}`);

  // listen for any activity on the stream
  stream.on("message", (message) => {
    // if the message is a retweet
    if (message.retweeted_status) {
      // placeholder code to validate info i'll need later on
      console.log(message.retweeted_status.user.id_str);
      console.log(message.retweeted_status.user.name);
    } else {
      // just a console.log to validate conditional. to be removed
      console.log("this was not retweeted");
    }
  });

  // used to get user info from their tweets
  // T.get(
  //   "statuses/user_timeline",
  //   { screen_name: "ryan_goodluck" },
  //   (err, data, response) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log(data);
  //   }
  // );
});

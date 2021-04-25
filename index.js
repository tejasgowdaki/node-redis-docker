const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  host: "redis-server",
  post: 6379,
});
client.set("visits", 0);

app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    if (err) return res.send("Some error");
    res.send("Number of visits are " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});

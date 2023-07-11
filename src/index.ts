import express from "express";

const app = express();

app.all("/", (_, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});

app.get("/test", (_, res) => res.send("This is a test!"));

app.listen(process.env.PORT || 3000);

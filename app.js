require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;
const key = process.env.PANDASCORE_API_KEY;

app.get("/api/tournament", (req, res) => {
  axios
    .get(
      `https://api.pandascore.co/lol/tournaments?filter[id]=1492&token=${key}`
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

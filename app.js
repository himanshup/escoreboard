require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;
const token = process.env.PANDASCORE_ACCESS_TOKEN;

app.get("/api/nalcs/regular/matches", (req, res) => {
  axios
    .get(
      `https://api.pandascore.co/lol/tournaments?filter[id]=1492&token=${token}`
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error.response.data);
    });
});

app.get("/api/nalcs/regular/matches/:start/:end", (req, res) => {
  axios
    .get(
      `https://api.pandascore.co/lol/matches?filter[tournament_id]=1492&range[begin_at]=${
        req.params.start
      },${req.params.end}&sort=begin_at&token=${token}`
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error.response.data);
    });
});

app.get("/api/nalcs/match/:matchId", (req, res) => {
  axios
    .get(
      `https://api.pandascore.co/lol/matches?filter[id]=${
        req.params.matchId
      }&token=${token}`
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error.response.data);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

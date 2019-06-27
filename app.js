require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;
const token = process.env.PANDASCORE_ACCESS_TOKEN;

app.get("/api/:game/series/:seriesId", (req, res) => {
  const url = `https://api.pandascore.co/${req.params.game}/series?filter[id]=${
    req.params.seriesId
  }&token=${token}`;

  axios
    .get(url)
    .then(series => {
      res.send(series.data);
    })
    .catch(error => {
      res.send(error.response.data);
    });
});

app.get("/api/:game/tournament/:id", (req, res) => {
  const url = `https://api.pandascore.co/${
    req.params.game
  }/tournaments?filter[id]=${req.params.id}&token=${token}`;

  axios
    .get(url)
    .then(tournaments => {
      res.send(tournaments.data);
    })
    .catch(error => {
      res.send(error.response.data);
    });
});

app.get("/api/:game/matches/:tournamentId/:date", (req, res) => {
  const url = `https://api.pandascore.co/${
    req.params.game
  }/matches?filter[tournament_id]=${req.params.tournamentId}&filter[begin_at]=${
    req.params.date
  }&sort=begin_at&token=${token}`;

  axios
    .get(url)
    .then(matches => {
      res.send(matches.data);
    })
    .catch(error => {
      res.send(error.response.data);
    });
});

app.get("/api/:game/match/:matchId", (req, res) => {
  const url = `https://api.pandascore.co/${
    req.params.game
  }/matches?filter[id]=${req.params.matchId}&token=${token}`;

  axios
    .get(url)
    .then(match => {
      res.send(match.data);
    })
    .catch(error => {
      res.send(error.response.data);
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

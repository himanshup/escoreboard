require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;
const token = process.env.PANDASCORE_ACCESS_TOKEN;

// API calls
// get series with given series id. this is needed to get all tournaments for a given series
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

//get tournament with given tournament id
app.get("/api/:game/tournament/:id", (req, res) => {
  const url = `https://api.pandascore.co/${
    req.params.game
  }/tournaments?filter[id]=${req.params.id}&token=${token}`;

  axios
    .get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error.response.data);
    });
});

//get matches by date and tournament id
app.get("/api/:game/matches/:tournamentId/:date", (req, res) => {
  const url = `https://api.pandascore.co/${
    req.params.game
  }/matches?filter[tournament_id]=${req.params.tournamentId}&filter[begin_at]=${
    req.params.date
  }&sort=begin_at&token=${token}`;

  axios
    .get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error.response.data);
    });
});

// get match by id
app.get("/api/:game/match/:matchId", (req, res) => {
  const url = `https://api.pandascore.co/${
    req.params.game
  }/matches?filter[id]=${req.params.matchId}&token=${token}`;

  axios
    .get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error.response.data);
    });
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

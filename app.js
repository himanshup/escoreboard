require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;
const token = process.env.PANDASCORE_ACCESS_TOKEN;

// get series with given series id. this is needed to get all tournaments for a given series
app.get("/api/series/:seriesId", (req, res) => {
  axios
    .get(
      `https://api.pandascore.co/lol/series?filter[id]=${
        req.params.seriesId
      }&token=${token}`
    )
    .then(series => {
      res.send(series.data);
    })
    .catch(error => {
      res.send(error.response.data);
    });
});

//get tournament with given tournament id
app.get("/api/tournament/:id", (req, res) => {
  axios
    .get(
      `https://api.pandascore.co/lol/tournaments?filter[id]=${
        req.params.id
      }&token=${token}`
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error.response.data);
    });
});

//get matches by date
app.get("/api/matches/:tournamentId/:date", (req, res) => {
  axios
    .get(
      `https://api.pandascore.co/lol/matches?filter[tournament_id]=${
        req.params.tournamentId
      }&filter[begin_at]=${req.params.date}&sort=begin_at&token=${token}`
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error.response.data);
    });
});

app.get("/api/match/:matchId", (req, res) => {
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

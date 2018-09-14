# eScoreboard

![Image 1](https://raw.githubusercontent.com/himanshup/escoreboard/master/screenshots/scoreboard.png)  
Created an eSports scoreboard using [Pandascore's REST API](https://pandascore.co/), Node.js, Express, and React.


Used the API to fetch data on tournaments and matches for popular eSports games (League of Legends, Overwatch, etc). It will show if a game is live and update the scores/status of games (who won the game) after each game. Unfortunately, I can't get data on the game itself (only who won) because it costs money.

Currently has data on the following League of Legends leagues (for 2018): 
* NA
* EU
* LCK
* LPL
* LMS  

Overwatch leagues (for 2018):
* Overwatch League
* World Cup

## Todos
* Get data for matches in real time
* Add more leagues (for LoL)
* Add more games (Dota, CSGO)

## Development
You need to get your own access token from [Pandascore](https://pandascore.co) and export it as an env variable: `export PANDASCORE_ACCESS_TOKEN="accesstoken"`.

```
git clone https://github.com/himanshup/escoreboard.git
cd escoreboard
npm install
cd client
npm install
cd ..
npm run dev
```

## Credits
**League of Legends Icon** : [icons8](https://icons8.com/icon/31595/league-of-legends)

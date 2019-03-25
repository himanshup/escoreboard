# eScoreboard

![Image 1](https://raw.githubusercontent.com/himanshup/escoreboard/master/screenshots/scoreboard.png)  
Created an eSports scoreboard using [Pandascore's REST API](https://pandascore.co/), Node.js, Express, and React.

I am using the free plan for the API, so I can only get the outcome of the match (details on the match and teams require a paid plan).

## Running Locally

```
git clone https://github.com/himanshup/escoreboard.git
cd escoreboard
npm install
cd client
npm install
cd ..
```

Go [here](https://pandascore.co/) to get an access token.  

Create a .env file in the root of the project and add your token
```
PANDASCORE_ACCESS_TOKEN='<token>'
```

Run the server and react app
```
npm run dev
```


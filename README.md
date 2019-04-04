# eScoreboard

![Image 1](https://raw.githubusercontent.com/himanshup/escoreboard/master/screenshots/scoreboard.png)  
Responsive eSports scoreboard web app built with [Pandascore's REST API](https://pandascore.co/), Node.js, Express, and React.

I am using the free plan for the API, so I can only get the outcome of the match (details on the match and teams require a paid plan).

## Running Locally

Clone the repo and install dependencies for the server and react app
```
git clone https://github.com/himanshup/escoreboard.git
cd escoreboard
yarn install    
cd client       
yarn install
cd ..
```

Go [here](https://pandascore.co/) to get an access token  

Create a .env file in the root of the project and add your token  
```
PANDASCORE_ACCESS_TOKEN=<token>
```

Run the server and react app  
```
yarn dev
```

Edit the `client` and `dev` script in `package.json` if you use npm
```
"scripts": {
    "client": "cd client && npm start",
    "dev": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\"",
  }
```


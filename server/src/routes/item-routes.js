const express = require("express");
const router = express.Router();
const querystring = require("querystring");
const axios = require("axios");

const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

//random string generator for stateKey
const generateRandomString = (length) => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
const stateKey = "spotify_auth_state";

//test route
router.get("/", (req, res) => {
  res.json("Hello");
});

//LOGIN for Spotify and redirect to /callback
router.get("/login", (req, res) => {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const scope =
    "user-read-private user-read-email user-top-read playlist-read-private user-library-read user-read-recently-played user-read-playback-state user-modify-playback-state streaming";

  res.redirect(
    `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&state=${state}&scope=${scope}`
  );
});

//Callback: exchanges code for access_token by making post request
router.get("/callback", (req, res) => {
  const code = req.query.code || null;

  axios({
    method: "post",
    url: `https://accounts.spotify.com/api/token?grant_type=authorization_code&code=${code}&redirect_uri=${REDIRECT_URI}`,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${new Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`
      ).toString("base64")}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        const { access_token, refresh_token, expires_in } = response.data;

        res.redirect(
          `http://localhost:3000/?access_token=${access_token}&refresh_token=${refresh_token}&expires_in=${expires_in}`
        );
      } else {
        res.redirect(`/?error: "invalid_token"`);
      }
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/refresh_token", (req, res) => {
  const { refresh_token } = req.query;

  axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    data: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${new Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`
      ).toString("base64")}`,
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;

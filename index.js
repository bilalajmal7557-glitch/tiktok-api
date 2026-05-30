require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await axios.post(
      "https://business-api.tiktok.com/open_api/v1.3/oauth2/access_token/",
      {
        app_id: process.env.APP_ID,
        secret: process.env.APP_SECRET,
        auth_code: req.query.code
      }
    );

    res.json(response.data);
  } catch (error) {
    res.json(error.response?.data || error.message);
  }
});

app.listen(process.env.PORT || 3000);

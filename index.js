```javascript
require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

/*
=========================================
GET ACCESS TOKEN
=========================================
Example:
https://your-app.up.railway.app/?code=AUTH_CODE
*/
app.get("/", async (req, res) => {
  try {
    const authCode = req.query.code;

    if (!authCode) {
      return res.status(400).json({
        success: false,
        message: "Missing auth code"
      });
    }

    const response = await axios.post(
      "https://business-api.tiktok.com/open_api/v1.3/oauth2/access_token/",
      {
        app_id: process.env.TIKTOK_APP_ID,
        secret: process.env.TIKTOK_SECRET,
        auth_code: authCode
      }
    );

    res.json(response.data);

  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json(
      error.response?.data || {
        error: error.message
      }
    );
  }
});

/*
=========================================
CREATE ADVERTISER
=========================================
Example:
https://your-app.up.railway.app/create-advertiser
*/
app.get("/create-advertiser", async (req, res) => {
  try {

    const response = await axios.post(
      "https://business-api.tiktok.com/open_api/v1.3/bc/advertiser/create/",
      {
        bc_id: process.env.BC_ID,
        company: "Test Marketing Agency"
      },
      {
        headers: {
          "Access-Token": process.env.TIKTOK_ACCESS_TOKEN,
          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data);

  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json(
      error.response?.data || {
        error: error.message
      }
    );
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
```

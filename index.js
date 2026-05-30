```javascript
require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
  try {
    const authCode = req.query.code;

    if (!authCode) {
      return res.json({
        error: "Missing auth code"
      });
    }

    console.log("APP ID:", process.env.TIKTOK_APP_ID);
    console.log("SECRET EXISTS:", !!process.env.TIKTOK_SECRET);

    const response = await axios.post(
      "https://business-api.tiktok.com/open_api/v1.3/oauth2/access_token/",
      {
        app_id: process.env.TIKTOK_APP_ID,
        secret: process.env.TIKTOK_SECRET,
        auth_code: authCode
      },
      {
        headers: {
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
  console.log(`Server running on port ${PORT}`);
});
```

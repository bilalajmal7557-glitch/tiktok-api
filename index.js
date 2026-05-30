```javascript
require("dotenv").config();

const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    status: "running"
  });
});

// Create Advertiser Route
app.get("/create-advertiser", async (req, res) => {
  try {
    const response = await axios.post(
      "https://business-api.tiktok.com/open_api/v1.3/bc/advertiser/create/",
      {
        bc_id: process.env.BC_ID,
        advertiser_info: {
          company: "Test Marketing Agency",
          country: "PK",
          currency: "USD",
          timezone: "Asia/Karachi"
        }
      },
      {
        headers: {
          "Access-Token": process.env.TIKTOK_ACCESS_TOKEN,
          "Content-Type": "application/json"
        }
      }
    );

    return res.json(response.data);

  } catch (error) {
    console.error("TikTok Error:", error.response?.data || error.message);

    return res.status(500).json(
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

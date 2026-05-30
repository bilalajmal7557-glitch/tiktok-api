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
    res.status(500).json(
      error.response?.data || { error: error.message }
    );
  }
});

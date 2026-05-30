const response = await axios.post(
  "https://business-api.tiktok.com/open_api/v1.3/oauth2/access_token/",
  {
    app_id: process.env.TIKTOK_APP_ID,
    secret: process.env.TIKTOK_SECRET,
    auth_code: req.query.code
  }
);

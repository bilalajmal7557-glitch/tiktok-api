require("dotenv").config();
const axios = require("axios");

async function getAdvertisers() {
 try {

 const response = await axios.get(
 "https://business-api.tiktok.com/open_api/v1.3/oauth2/advertiser/get/",
 {
 headers:{
 "Access-Token":process.env.TIKTOK_TOKEN
 }
 }
 );

 console.log(response.data);

 } catch(error){

 console.log(
 error.response?.data || error.message
 );

 }
}

getAdvertisers();

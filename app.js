require("dotenv").config();
const axios = require("axios");

async function createAccount(){

try{

const response = await axios.post(
"https://business-api.tiktok.com/open_api/v1.3/bc/advertiser/create/",
{
bc_id:process.env.BC_ID,
company:"sufi agency 09",
currency:"USD",
timezone:"Asia/Karachi"
},
{
headers:{
"Access-Token":process.env.TIKTOK_TOKEN,
"Content-Type":"application/json"
}
}
);

console.log(response.data);

}catch(error){

console.log(
error.response?.data || error.message
);

}

}

createAccount();

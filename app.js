require("dotenv").config();
const axios = require("axios");

async function createAccount(name){

try{

const response = await axios.post(
"https://business-api.tiktok.com/open_api/v1.3/bc/advertiser/create/",
{
bc_id: process.env.BC_ID,
company: name,
currency: "PKR",
timezone: "Asia/Karachi"
},
{
headers:{
"Access-Token":process.env.TIKTOK_TOKEN,
"Content-Type":"application/json"
}
}
);

console.log(name,response.data);

}catch(error){

console.log(
name,
error.response?.data || error.message
);

}

}

async function run(){

await createAccount("sufi agency 09");
await createAccount("sufi agency 10");

}

run();

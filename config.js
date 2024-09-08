//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEFxSk5qT3Z5cExWbGhoYzJqeUdQZEtrVVM2MDBYeXNZOURHM1I3TzFVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlVVY21GTmRwS25iUmU0NjVZSEtUZ2owNVIyejF4eFZBOWw2MHVDbHd6MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSTNBdVVPN1AyYm1DRGV4OEdMRmNGWU5IaG5idTE4cjlBVWNuWlo2NTBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDM3VLeEgzd3Zia0NwUXFtN1hxOE43eEE1UVRkS0N5YjJvdmFHTjN6bkZjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9NeUxJK1l5VmhERWx4U3Jxd0crZXliMEd6S1dKeWRXOFNES1pTRGhmMW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZLOWVkQTQ1M0lJaTVZc2Q1VnIxY2N5TVd5TUZ6ekUvcHhtTUlVeTlqVFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0RKTTJpZkV3c3lGeXREY0x6SURGM0F6THh4d1FVSWtLMGxkRlIrbktHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkM4NEF0NzZNaUEyYkJOYldUWHArM0d2TlhhekxneEsxbWxycjNlUjZ3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhYTHA3YTBRcGNtcFdQdUliNzZ5WVhNV25oQmp2NVNWOGdIWjR3enRuN1A4N2F3aEdseHdWRXRRNnF1ZDZZUVFtblZvZUJIakMxbVN5NFVOSnVpbUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiJWVGVDRWRSazlhcXp4Y0lGL3VuRHQ0d2VyZTU3em05azA2R3FLTjRVUGpJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNDE4NjE1NDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTcwMTRBRTE2MTM1QUI5MUJBQjk4M0U0NkI2NDdDNUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTc5OTU4OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE0MTg2MTU0MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2RTNBQTYyNzZGMDk1NkIxNTAwMkMzMzE2Q0JDNTgzMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1Nzk5NTkwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTV2tIaGI4VVF6ZUpBbi0zS3hTWjBBIiwicGhvbmVJZCI6ImVlNDhhODZkLWNhZmItNDRiNy05MGE0LTk5ZTBlMWZlZDlkZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuV1AwNG1ERml6MHZ1V2VRQkVGN2Rqekd3cE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3J1T2g4OXV3L1E1VGhwa0d6RWU0S0M3akk4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRaWDM2OEVOIiwibWUiOnsiaWQiOiIyMzQ4MTQxODYxNTQyOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGhlIFN0YXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1A3cjI1VUJFSmE1OXJZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilh2NWZiMzVjU1llV3NJY2dZQjZKT1NhWWx1UUttVFpheW13WFV1MmRYVWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkowK3JGeXE5Y2Y4WEt6L0dyK0d2cHJ1SDQvenFlZG5aczFrSXY5R2JicGorY2lKZDNpb0psaU4ydHJKNzhlWjB2V3kzVnAzbGxZQUQzd2NXc0dja0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpdy9tTWhXbCtOYTdMLzFta2VGdGlwZ0hwOHUra2xYUVRreTJLWFJ5Z0liUk40L3lJMkdrZ1Z5VzAyNWFqQjZkZzRYTGV6cXBacm43WXVmUW5jekRDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNDE4NjE1NDI6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWNytYMjkrWEVtSGxyQ0hJR0FlaVRrbW1KYmtDcGsyV3Nwc0YxTHRuVjFKIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1Nzk5NTg3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFyOSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

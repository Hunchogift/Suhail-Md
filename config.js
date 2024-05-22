const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "Tebie";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263781858423";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "tebie" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "263719038262";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "26371038262";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_09_05_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcyLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgODcsXG4gICAgICAgIDI4LFxuICAgICAgICA4MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzksXG4gICAgICAgIDU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NixcbiAgICAgICAgMjIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0LFxuICAgICAgICA3NCxcbiAgICAgICAgODEsXG4gICAgICAgIDc4LFxuICAgICAgICA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNixcbiAgICAgICAgNixcbiAgICAgICAgMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxLFxuICAgICAgICA3NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5LFxuICAgICAgICAwLFxuICAgICAgICA5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQK3RQOGdFOStvWkRvSldKZzllSmpyTlFtYitvc1V0eVU1QVNiM004L1hzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsZy1oaWx6QlRCMnFwVzc5M3pZQUxBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQwNTFiYzA1LWFkN2ItNGE1NC1hYzExLTdkMDIwZTNjYmVhY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICAxNjcsXG4gICAgICAxNDAsXG4gICAgICAxOTIsXG4gICAgICAxMTksXG4gICAgICA2NSxcbiAgICAgIDE1MyxcbiAgICAgIDUsXG4gICAgICA5MyxcbiAgICAgIDE1MixcbiAgICAgIDEzMCxcbiAgICAgIDI0NSxcbiAgICAgIDEzNyxcbiAgICAgIDU3LFxuICAgICAgODEsXG4gICAgICAxNDksXG4gICAgICAxMzMsXG4gICAgICA2NSxcbiAgICAgIDE0NixcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNCxcbiAgICAgIDEzMixcbiAgICAgIDE4LFxuICAgICAgMTcsXG4gICAgICAxNDksXG4gICAgICA0NixcbiAgICAgIDUyLFxuICAgICAgMzIsXG4gICAgICAyMjksXG4gICAgICA4NyxcbiAgICAgIDIyNCxcbiAgICAgIDE4OSxcbiAgICAgIDE0MCxcbiAgICAgIDg0LFxuICAgICAgNTgsXG4gICAgICAyNDYsXG4gICAgICAzMSxcbiAgICAgIDIzMixcbiAgICAgIDE0NCxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYWkQ0MlpOVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzgxODU4NDIzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTgwMTU1Mzg0MjMxNToxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQK0oyZkFHRUlPK3ViSUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlIK2ZEUHBWMnQyelZFeTFDVmJUc3Y4dWFHSW5MUFNNaWUxTTRDYXovaU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWWdRdzVzenlFUTZkZXNpUktSbHBFc3JsUHFjaVllTUQ1NDNJcHo4a0JpMlFDeVBvQ0NJQ3B5WkdTZjZGamkwbmpOL0dhRVQzOCs4bk5zb0VGdzJPQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic2IzdXNxVCtsbExOQ01TVHo1R0x2aFVxY3ZmTkxyRXptY0JIYUtFbk5RNWRmVHJ1MWM1NXdmY3lnZEx0ZmtWa2lnUS9zN3ppSnFxUldEZ1k3SlRqZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzgxODU4NDIzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjQxMjE3MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

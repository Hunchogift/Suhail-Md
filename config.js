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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_13_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzLFxuICAgICAgICA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDUyLFxuICAgICAgICA0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0LFxuICAgICAgICA5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk5LFxuICAgICAgICA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMixcbiAgICAgICAgNTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzLFxuICAgICAgICA0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU4LFxuICAgICAgICA4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDU1LFxuICAgICAgICA5OSxcbiAgICAgICAgNixcbiAgICAgICAgMTQyLFxuICAgICAgICAzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNSxcbiAgICAgICAgODksXG4gICAgICAgIDQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMixcbiAgICAgICAgNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg5LFxuICAgICAgICA0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg2LFxuICAgICAgICA4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMwLFxuICAgICAgICA0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWHNla2FWK3Z2Z1EwNkY2VFd2alR5YUxQdnhYZ1JpcS85SzJRTEF4dCtvOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidXd1VENmTG9TMWVhb0xLa1h6Q0VYZ1wiLFxuICBcInBob25lSWRcIjogXCJhNGQ4MTc5OC1kZmQ4LTQ2NTEtYWU1YS0xOThkMmY3ZGQ5ZGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIyLFxuICAgICAgOTgsXG4gICAgICAxODMsXG4gICAgICA2NSxcbiAgICAgIDI0LFxuICAgICAgODgsXG4gICAgICA1OCxcbiAgICAgIDI5LFxuICAgICAgNTUsXG4gICAgICAyNDcsXG4gICAgICA5MyxcbiAgICAgIDEzOSxcbiAgICAgIDk0LFxuICAgICAgMTI0LFxuICAgICAgMTQ0LFxuICAgICAgMjAxLFxuICAgICAgMTU4LFxuICAgICAgMTQzLFxuICAgICAgNDIsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICAyMzEsXG4gICAgICAzMSxcbiAgICAgIDIxNSxcbiAgICAgIDIzNSxcbiAgICAgIDE0NixcbiAgICAgIDI0OCxcbiAgICAgIDIyMSxcbiAgICAgIDI0MCxcbiAgICAgIDEzMixcbiAgICAgIDIwLFxuICAgICAgMTExLFxuICAgICAgODYsXG4gICAgICAxNTksXG4gICAgICAxMSxcbiAgICAgIDIwMixcbiAgICAgIDE0MSxcbiAgICAgIDIzOSxcbiAgICAgIDE5MCxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRHTFlBNEtYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzMxNjg5NjE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkdpZnQgTWFzb3NvdGVcIixcbiAgICBcImxpZFwiOiBcIjI0ODk0MTAwMjUwNzk0OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXF3OFFvUTRycW9zd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyOEE1S2YxaVZUVzRkamswcFpIK1pDT08vaStiZTdnWTVMT0xTQTN3ZnlVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInRrVnZnYkR3ZHdWTENUQzlJV1lKdHppTnZhL0hmdmpXUDhvc2o3Qjh0MDhpczhBMi9tN3VKalNld3czOG1xaExxbXFrSFpiTjFTblZiUnFwcHZTNER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFDQkJYb3l3ajhqZjFqZk12ems5QzF6QVVuOFVQRFdHamE3RGVuSS9kVytWbEVIUXdkTTgvcTltM0ZBK1NrWG1RbE93YkxOSXd2VDFNREh1WTJ6R2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc3MzE2ODk2MToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgyMzAzNzVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Masosote",
  packname: process.env.PACK_NAME || "Giftmasosote",
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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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

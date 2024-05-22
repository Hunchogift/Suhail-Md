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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263719038262";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "26371903262";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_45_05_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI3LFxuICAgICAgICA4MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQwLFxuICAgICAgICA2MSxcbiAgICAgICAgODMsXG4gICAgICAgIDg3LFxuICAgICAgICAxODksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYwLFxuICAgICAgICA0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDU4LFxuICAgICAgICAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMzLFxuICAgICAgICA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDYxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUTBzWERsazR6ai9OOXF5a3Z6TEZ6NW0vWmRsYWV1L0N6YjdXZjlyL2JYND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRkVRMkNMTzVRYW1Sd2JLUnpQR09pd1wiLFxuICBcInBob25lSWRcIjogXCI4MDhlMmE2Zi02NTg3LTRkNDAtODk5My04ZTc4Mjg4YjUxMjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgMTkwLFxuICAgICAgOTYsXG4gICAgICA5NixcbiAgICAgIDExNSxcbiAgICAgIDIwNCxcbiAgICAgIDI0NCxcbiAgICAgIDEzMixcbiAgICAgIDIzMSxcbiAgICAgIDE2MixcbiAgICAgIDQyLFxuICAgICAgMTkwLFxuICAgICAgMTEsXG4gICAgICAxMTQsXG4gICAgICA1MixcbiAgICAgIDIxNyxcbiAgICAgIDI3LFxuICAgICAgMTk0LFxuICAgICAgODUsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMzQsXG4gICAgICAxMjAsXG4gICAgICA1NCxcbiAgICAgIDEyOSxcbiAgICAgIDE5OSxcbiAgICAgIDE2OSxcbiAgICAgIDE0OSxcbiAgICAgIDIzMyxcbiAgICAgIDI3LFxuICAgICAgOTUsXG4gICAgICAxMTcsXG4gICAgICA3MSxcbiAgICAgIDc2LFxuICAgICAgMjM4LFxuICAgICAgMTc2LFxuICAgICAgNjMsXG4gICAgICAxOTQsXG4gICAgICAxMTEsXG4gICAgICA1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBWU1SMlFKTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE5MDM4MjYyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ2MzQ3NDYxODc3ODc5OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8JKBguKDneGwsvCRsLPNn82ezZ/NnkNy8J2ek2nwnZ6RZXIg8J+klvCSgYLig53wn4e/8J+HvPCfh7/wn4e8XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3k1MzVFQkVMT1d1YklHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvM21JQ0RxS2t2L3dpZGFia0dQWUxhVWdkRUJmQmE2ZlhBSy9TeklrVFg4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImc3NDQ1VmRNMHFUbU1xaDZoSFBhUU9NbzV4VWZHeGN4WFhyK1ppZ2FyeldFNFkzYnI2VHlZa0dnM0Q2QjhjVG9KT2ZZaGlMUnBDREx4Wkxmdjc1M0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktiMGttTTk1MmhNYTNpSlJBM1NFc052Tm9JalNndUtTM0lWZUZKYjBTQitDUG1pTzRQcDJSUUQybFl1ZEF6aDBIT3R6QUtWeEluK0szb0NTbmVKWmhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxOTAzODI2Mjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjQwNzA5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1adVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVp1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMlZTVnBrRnNIUnlOend0bStxZUQ5T0pQS0pZalZIblJQMWNFMU1HUy9Fdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMDU2NTA4NjAsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzE2NDA3MDkzMTk4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Craiber-masosote",
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

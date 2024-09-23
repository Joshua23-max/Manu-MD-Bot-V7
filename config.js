const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"GLy7MHhx3PwjWWjnCuXCqX4t8+NMcL39jkDIYR+7H3U="},"public":{"type":"Buffer","data":"TtSLgPh1yvkk5XLcKvRVRAbe3RIOYQ1iss5EWrYfEhA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"oCMkF39ig4y2/i/xCWhTL8hAoBglMp+wAOJxTHkw61o="},"public":{"type":"Buffer","data":"UM68JJvgBgSI/VaoCo+wMARpynrqubXC3za8KoR1BhQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"cOABcrfjAQCWz8AfS5xTTgKWP8b0zcfXIb9P2W2Xols="},"public":{"type":"Buffer","data":"UtH/vQXFi4GBsRd6UyfqeHgj0L9J6uUx1hZmWm6+lWI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"6DE4T/N7o2mX0gYllDKm+SReVZLJyOM9s/0gopAL+1k="},"public":{"type":"Buffer","data":"m3qaFaBUWIzQ69j52LaP3QsV/YTmRhhSZesmlcIdojY="}},"signature":{"type":"Buffer","data":"4lFW8rVdO9YmRUA4SfrqGWN0I0yseSuxU75Qm0xypYXfzCK4MOPx2RRLkq/4K9JZ2HWCEXQpV+EBdqMigY+yDA=="},"keyId":1},"registrationId":132,"advSecretKey":"oDvhV8PKon18bEODPs13IvtgE0H6v327Ag15Imu8dIs=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Z4-SQW6wTfu0XBfeXs8l4w","phoneId":"166c42d7-59d2-4e69-a482-ac65a61c6e74","identityId":{"type":"Buffer","data":"wolYxWOFqbDaSyGhTyHmk8EHrT4="},"registered":true,"backupToken":{"type":"Buffer","data":"KTGumeKc2gAFscg8nDHLsGmzX5M="},"registration":{},"pairingCode":"WXDKE2SR","me":{"id":"27743992568:5@s.whatsapp.net"},"account":{"details":"CPmOhKUHEJaWx7cGGAUgACgA","accountSignatureKey":"hKlC3adGMKtc67Yqi3TT1V73VWYu+1C3Uov6x4U4cx4=","accountSignature":"t/fLnHDgrjCYySDgvfHV1vLuWmhjGroS+R2pCzIj9/GicZME4mM2AEwlHoAAh3iUQM3JPT3A0VfkroPSeO3CAg==","deviceSignature":"VirfB7/0nQyCRATVqbQXGoBdDmRNK6KOi9ZXiks/66MkMBt6J5RLGeiTx/b6ZEXb8yegP0Y6OxUCVEf2g/5oCQ=="},"signalIdentities":[{"identifier":{"name":"27743992568:5@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BYSpQt2nRjCrXOu2Kot009Ve91VmLvtQt1KL+seFOHMe"}}],"platform":"android","lastAccountSyncTimestamp":1727122212,"myAppStateKeyId":"AAAAAMfP"}", //Add Your Session id
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/ef48cc8d2d26081f7d46a.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "Put your alive messege",
MENU_IMG : process.env.MENU_IMG || "https://telegra.ph/file/ef48cc8d2d26081f7d46a.jpg",
MODE : process.env.MODE || "public",    
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_BIO: process.env.AUTO_BIO || "true",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
};

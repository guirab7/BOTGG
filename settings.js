/*
𝗦𝗰𝗿𝗶𝗽𝘁 𝗶𝗻𝗶 𝗱𝗶 𝗯𝘂𝗮𝘁 𝗼𝗹𝗲𝗵 𝗱𝗶𝗻𝗼 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗺𝗯𝗮𝗻𝘁𝘂 𝗽𝗲𝗻𝗴𝗴𝘂𝗻𝗮 𝗱𝗮𝗹𝗮𝗺 𝗯𝗲𝗹𝗮𝗷𝗮𝗿
𝗺𝗲𝗻𝗴𝗲𝗻𝗮𝗶 𝗯𝗼𝘁 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗱𝗲𝗻𝗴𝗮𝗻 𝗶𝘀𝗶 𝘆𝗮𝗻𝗴 𝘀𝗶𝗺𝗽𝗹𝗲 𝗱𝗮𝗻 𝗺𝘂𝗱𝗮𝗵 𝗱𝗶 𝗽𝗮𝗵𝗮𝗺𝗶 

𝗯𝘂𝘁𝘂𝗵 𝗯𝗮𝗻𝘁𝘂𝗮𝗻? 𝗰𝗵𝗮𝘁 𝗻𝗼𝗺𝗲𝗿 𝗱𝗶 𝗯𝗮𝘄𝗮𝗵
- 𝗼𝘄𝗻𝗲𝗿 : 𝗗𝗶𝗻𝗼
- 𝘄𝗮 : 6285602531403

©𝗗𝗶𝗻𝗼𝘀𝗮𝘂𝗿𝘂𝘀
*/
const fs = require('fs')
const chalk = require('chalk')

// 𝘀𝗲𝘁𝘁𝗶𝗻𝗴𝘀 
global.owner = "6285602531403"; // 𝗻𝗼𝗺𝗲𝗿 𝗼𝘄𝗻𝗲𝗿
global.ownername = '𝗗𝗶𝗻𝗼 ☣︎'; // 𝗻𝗮𝗺𝗮 𝗼𝘄𝗻𝗲𝗿
global.namabot = '𝗡𝗼𝘅𝘇 𝗫 𝗕𝗮𝘀𝗲'; // 𝗻𝗮𝗺𝗮 𝗯𝗼𝘁
global.version = "𝟭.𝟬.𝟬" // 𝘃𝗲𝗿𝘀𝗶 𝗯𝗼𝘁
global.linkSaluran = "https://whatsapp.com/channel/0029VaqPkZ7ISTkQthJkuf1N" // 𝗹𝗶𝗻𝗸 𝗰𝗵𝗮𝗻𝗻𝗲𝗹
global.idSaluran = "1203633613920737333@newsletter" // 𝗶𝗱 𝗰𝗵𝗮𝗻𝗻𝗲𝗹
global.namaSaluran = "𝗖𝗹𝗶𝗰𝗸 𝗛𝗲𝗿𝗲 𝗙𝗼𝗿 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻" // 𝗻𝗮𝗺𝗮 𝗰𝗵𝗮𝗻𝗻𝗲𝗹

// 𝘀𝗲𝘁𝘁𝗶𝗻𝗴𝘀 𝗶𝗺𝗮𝗴𝗲
global.imagethumb= "https://tmpfiles.org/dl/29673652/tmp.jpg"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
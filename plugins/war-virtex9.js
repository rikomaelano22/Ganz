let fs = require('fs')
let handler = async (m, { conn } ) => {    
m.reply('Wait suhu')
let anu =`
๐ฎ๐นLACOSA NOSTRA๐ฎ๐น
๐MATA IPHONE๐
๐กfยฅm dO $ยฅ$... 57384 Caracteres

๐๐ข๐ซ๐ฎ๐ฌ ๐๐๐ฅ๐๐ก ๐๐ข ๐๐ฎ๐ฆ๐ฉ๐ฎ๐ก ๐๐๐งใฝ๏ธ
๐ฅแโ ๊ณ๐๐๐ค๐๐ณ๐ฒ๐ฅแโ
`
m.reply(anu)
}
handler.help = ['virtex9']
handler.tags = ['war']
handler.command = /^(virtex9)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

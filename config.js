let fs = require('fs')

//Info maszeh
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Ganti di Handler.js
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?

global.namabot = 'MGBOTZ-MD' //nama BOT Lu
global.packname = ''
global.author = 'ALEX' //nama Owner
global.ownernya = '6282171432358'
global.linkyt = 'https://youtube.com/channel/UCbI74T0AXUI26VC88NyoWdw' //link yt lu
global.linkig = 'https://instagram.com/al_pakel' //link ig lu
global.linkgh = '-' //link github lu
global.titlebot = `â«¹â«º WhatsApp Bot | Multidevice`
global.wm2 = 'ð¿' //ganti aja kalau mau
global.wm = 'MGBOTZ'
global.colong1 = 'Ciss ð¸'
global.colong2 = 'ð®ðððð©ð¶ð»ðã·ï¸'
global.kontak2 = [
['628887816980', 'ðº', 'ðð¬ð£ðð§', 'Sá´á´ á´ Aá´á´ Yá´ Oá´¡É´á´Ê Ká´ Bá´Éªá´ Ká´á´', true],
]

//Biodata OWNER Bre
global.RL = 'HAMBAH ALLAH' //jenis kelamin lu
global.gender = 'Boys' //jenis kelamin lu
global.agama = 'islam' //agama lu
global.age = '17' //usia lu sekarang
global.kelas = 'Masih Sekolah' //kelas lu
global.hobi = 'Gaming/editing/ngoding' //hobi lu bre
global.tempat = 'INDONESIA , Jawa Tengah' //tempat tinggal lu

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  males: 'https://malesin.xyz',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz'
}
global.lolkey = 'a243d5d9b0d811b81d63e6cf'
global.xkey = 'YourApikey'
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': '6aceac403a3d479b',
  'https://melcanz.com': 'apikeylu',
  'https://api.lolhuman.xyz': 'apikeylu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apikeylu',
  'https://pencarikode.xyz': 'apikeylu',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'apikeylu',
  'https://api.adiofficial.xyz': 'apikey lu'
}

//img nya
global.thumb = 'https://telegra.ph/file/6411cc04828f3cc335324.jpg'
global.hwaifu = ['https://telegra.ph/file/a3bd959e8cf3131be2213.jpg']

//Proses berlangsung
global.wait = '_*Memprosess Mohon menunggu...*_'
global.eror = '_*Error 404...*_'

//========Url Template Buttons=========//
global.dtu = 'Group Official'
global.urlnya = "https://chat.whatsapp.com/E1TElUfSJY63Cs9WqNjEEC"

//============= callButtons =============//
global.dtc = 'ðððð ððððð'
global.phn = '3'

//============= Games ================//
global.benar = '_*Benar*_â'
global.salah = '_*Salah*_â'
global.dikit = "dikit lagi"

global.multiplier = 100 // The higher, The harder levelup

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
//=========== Requirements ==========//

global.htki = 'ââââââã' //hiasan title kiri
global.htka = 'ãââââââ' //hiasan title kanan
global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'ð§¬',
      limit: 'ð',
      healt: 'â¤ï¸',
      exp: 'âï¸',
      money: 'ðµ',
      potion: 'ð¥¤',
      diamond: 'ð',
      common: 'ð¦',
      uncommon: 'ð',
      mythic: 'ð³ï¸',
      legendary: 'ðï¸',
      pet: 'ð',
      sampah: 'ð',
      armor: 'ð¥¼',
      fishingrod: 'ð£',
      pickaxe: 'âï¸',
      sword: 'âï¸',
      kayu: 'ðªµ',
      batu: 'ðª¨',
      iron: 'âï¸',
      string: 'ð¸ï¸',
      kuda: 'ð',
      kucing: 'ð' ,
      anjing: 'ð',
      makananpet: 'ð',
      gold: 'ð',
      emerald: 'ð'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

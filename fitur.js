const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@Ramdaniofficial/baileys")
//NODE_MODULES
const fs = require('fs')
const brainly = require('brainly-scraper')
const crypto = require('crypto')
const request = require('request')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const yts = require( 'yt-search')
const hx = require('hxz-api')
const { exec } = require('child_process')
//LIB
const { color, bgcolor } = require('./lib/color')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { pinterest } = require('./lib/pinterest')
const { encimg } = require('./lib/encimg')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
//DATABASE
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const _regist = JSON.parse(fs.readFileSync('./database/registered.json'))
const _bocil = JSON.parse(fs.readFileSync('./database/bocil.json'))
const _dewasa = JSON.parse(fs.readFileSync('./database/dewasa.json'))
//RUN
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./index')
//RESULT LIB
const { iklan } = require('./result/lib/iklan')
const { donasi } = require('./result/lib/donasi')
const { grupbot } = require('./result/lib/grupbot')
const { rules } = require('./result/lib/rules')
const { infobot } = require('./result/lib/infobot')
//RESULT GAME
const setGelud = require('./result/game/lib/gamegelud.js')
const game = require("./result/game/lib/game");
//PLUGING
//BELI SCRIPT
const { beliscript } = require('./plugins/buyscript')
//TOPUP
//TOPUPGAME
const { topupgame } = require('./plugins/topupgame')
const { topupmobilelegends } = require('./plugins/topupmobilelegends')
const { topupfreefire } = require('./plugins/topupfreefire')
const { topuppubg } = require('./plugins/topuppubg')
const { topuppointblank } = require('./plugins/topuppointblank')
//TOP UP SALDO
const { topupsaldo } = require('./plugins/topupsaldo')
const { topupgopay } = require('./plugins/topupgopay')
const { topupdana } = require('./plugins/topupdana')
const { topupovo } = require('./plugins/topupovo')
const { topuppulsa } = require('./plugins/topuppulsa') 
//CONFIG
const settings = JSON.parse(fs.readFileSync('./config/settings.json'))
const fake = JSON.parse(fs.readFileSync('./config/fake.json'))
const sosmed = JSON.parse(fs.readFileSync('./config/sosmed.json'))
const donate = JSON.parse(fs.readFileSync('./config/donate.json'))
const apikey = JSON.parse(fs.readFileSync('./config/apikey.json'))
//MEDIA
//FOTO
const fakeimage = fs.readFileSync("./media/foto/fakeimg.jpg"); 
const thumb = fs.readFileSync("./media/foto/thumb.jpg");
const menu = fs.readFileSync("./media/foto/menu.jpg"); 
const imgqris = fs.readFileSync("./media/foto/qris.jpg");
//VIDEO
const sendVideo = fs.readFileSync("./media/video/video.mp4");
//AUDIO
const sendAudio = fs.readFileSync("./media/audio/audio.mp3");
//GIF
const sendGif = fs.readFileSync("./media/gif/gif.mp4");
//STICKER
const sendSticker = fs.readFileSync("./media/sticker/sticker.webp");
//EXIF
const Exif = require('./media/sticker/exif')
const exif = new Exif()
//MEDIA FUNCTIONS
let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
//SETTINGS
namaowner = settings.NamaOwner
namabot = settings.NamaBot
nomorowner = settings.NomorOwner
nomorbot = settings.NomorBot
//DONASI
gopay = donate.Gopay
dana = donate.Dana
ovo = donate.Ovo
pulsa = donate.Pulsa
qris = donate.Qris
saweria = donate.Saweria
linktree = donate.Linktree
//APIKEY
Alphabot = apikey.Alphabot
Lolhuman = apikey.Lolhuman
Lolkey = apikey.Lolkey
//TRUE AND FALSE
public = true
self = false
//SOSIAL MEDIA
Github = sosmed.Github
Heroku = sosmed.Heroku
Website = sosmed.Website
Wa = sosmed.Whatsapp
Yt = sosmed.Youtube
Ig = sosmed.Instagram
Twitter = sosmed.Twitter
Fb = sosmed.Facebook
Saweria = sosmed.Saweria
Linktree = sosmed.Linktree
//ADD CMD
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
scommand.push(obj)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}
const getCmd = (id) => {
let position = null;
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i;
}
});
if (position !== null) {
return scommand[position].chats;
}
};
//REGISTRASI
const addRegist = (registid, sender, age, time, serials) => {
const reg = { id: registid, name: sender, age: age, time: time, serial: serials }
_regist.push(reg)
fs.writeFileSync('./database/registered.json', JSON.stringify(_regist))
}
const addSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const cekRegist = (sender) => {
let status = false
Object.keys(_regist).forEach((i) => {
if (_regist[i].id === sender) {
status = true
}
})
return status
}
//DEWASA
const addDewasa = (dewasaid, sender, age, time, serimek) => {
const dew = { id: dewasaid, name: sender, age: age, time: time, serimek: serimek }
_dewasa.push(dew)
fs.writeFileSync('./database/dewasa.json', JSON.stringify(_dewasa))
}
const addSerimek = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const cekDewasa = (sender) => {
let status = false
Object.keys(_dewasa).forEach((i) => {
if (_dewasa[i].id === sender) {
status = true
}
})
return status
} 
    function danz(seconds){
    function pad(s){
    return (s < 10 ? '0' : '') + s;
    }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
module.exports = Ramdani = async (Ramdani, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '.' 
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
//MESS
			mess = {
				daftar: `─ 「 *NOT REGISTERED* 」 ─\n\n*ENGLISH*\n_YOU HAVE NOT REGISTERED ON THE BOTTOM OF I DECK, TYPE ${prefix}verify FOR RUQYAH_\n\n*INDONESIA*\n_LUH BELUM DAFTAR DI BOT GUA DEX, KETIK ${prefix}daftar UNTUK DI RUQYAH_`,
				dewasa: `─ 「 *WARNING* 」 ─\n\n*ENGLISH*\n_not allowed for minors, if you are an adult, please verify first, type ${prefix}my18_\n\n*INDONESIA*\n_dilarang untuk anak di bawah umur, jika Anda sudah dewasa, silahkan verifikasi terlebih dahulu, ketik ${prefix}saya18_`,
				kecil: `_luh masih kecil dek, mending main epep_`,
				wait: '_wait deck..._',
				banned: '_you have been blocked, contact the owner for ruqyah_',
				success: '_succeed, dont forget to subscribe_ : https://youtube.com/channel/UCB157jomCne961WzYHpG4gg',
				error: {
		        apikey: '_error, apikey is not defined:(_',
		        format: '_format error_',
			    stick: '_Failed, an error occurred while converting the image to a sticker_',
			    link: '*English*\n\n_what link did you send goblog: v_\n*indonesian*\n\n_Luh ngasih link apaan goblog:v_'
				},
				only: {
					group: '*THIS FEATURE CAN ONLY BE USED FOR GROUPS!!!*',
					premium: '*YOU IS NOT A PREMIUM USER, CHAT OWNER TO RUQYAH!!!*',
					ownerG: '*THIS FEATURE CAN ONLY BE USED BY THE OWNER GROUP!!!*',
					ownerB: '*THIS FEATURE CAN ONLY BE USED BY THE OWNER BOT!!!*',
					admin: '*THIS FEATURE CAN ONLY BE USED BY GROUP ADMINS!!! ️*',
					Badmin: '*THIS FEATURE CAN ONLY BE USED WHEN THE BOTS BECOME ADMIN!!!*'
				}
			}            
			const botNumber = Ramdani.user.jid
			const ownerNumber = [`${nomorowner}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = Ramdani.contacts[sender] != undefined ? Ramdani.contacts[sender].vname || Ramdani.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await Ramdani.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isRegist = cekRegist(sender)
			const isDewasa = cekDewasa(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        //${jam} ${hari} ${tanggal} ${bulan} ${tahun}
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        //${jam} ${timeWib}
        const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
			Ramdani.sendMessage(from, teks, text, { thumbnail: thumb, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `New Base By Ramdani Official`,body:"© Creator By Ramdani Official",previewType:"PHOTO",thumbnail:thumb,sourceUrl:`https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`}}})
		}
		const reply2 = (teks) => {
Ramdani.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
const freply = (teks) => {
Ramdani.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${ucapanWaktu}`,
                "body": `${namaowner}`,
                "mediaType": "10",
                "mediaUrl": `https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`,
                "thumbnailUrl": "https://youtube.com/channel/UCB157jomCne961WzYHpG4gg",
                "thumbnail": fakeimage,
                "sourceUrl": `https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`,
},mentionedJid:[sender]}, quoted : mek})
};
			const sendMess = (hehe, teks) => {
				Ramdani.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Ramdani.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Ramdani.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu terdeteksi mengimkan link group, maaf saya harus ngeluarin anda :(`)
				setTimeout(() => {
				Ramdani.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			   }
			            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}`; break;
            }
            var ucapanFakereply = "" + waktoonyabro;
           
//FAKE TROLI

           const fakedoc = {key: {fromMe: false, participant: `${nomorowner}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapanFakereply}`, pageCount: 0, fileName: `RamdaniBot`, jpegThumbnail: fs.readFileSync(`./media/foto/thumb.jpg`)}}}
			const ftoko = { key: { fromMe: false, 
			             participant: `0@s.whatsapp.net`, ...(from ? { 
			             remoteJid: 'status@broadcast' } : {}) }, 
			             message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./media/foto/thumb.jpg') }, 'title': `${namabot}\nRp. 10.000`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
    const ftrol = {key : {fromMe:false, 
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `New Base By Ramdani Official \nRp. 999.999.999`, 
                            orderTitle: `© Creator By Ramdani Official`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const fhidetag = {key : {fromMe:false, 
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `New Base By Ramdani Official`, 
                            orderTitle: `© Creator By Ramdani Official`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const ftrolMENU = {key : {fromMe:false,
	participant : '0@s.whatsapp.net'},
       message: { 
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `New Base By Ramdani Official`, 
                            orderTitle: `© Creator By Ramdani Official`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
			const fakeitem = (teks) => {
           Ramdani.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                 	       fromMe:false, 
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"0-1604595598@g.us" }: {})
                           },message:{"orderMessage":{
                                  "orderId":"4302154426574187",
                                  "thumbnail":fs.readFileSync("./media/foto/thumb.jpg"),
                                  "itemCount":999999999,
                                  "status":"INQUIRY",
                                  "surface":"CATALOG",
                                  "message": `${namabot}\nRp. 999.999.999.999`,
                                  "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}


	Ramdani.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Ramdani.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                              


    const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await Ramdani.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    Ramdani.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: mek})
  }
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Ramdani.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  
      
      const sendButVideo = async (id, text1, desc1, gam1, but = [], options = {} ) => {
      kma = gam1;
      mhan = await Ramdani.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      Ramdani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {quoted: mek})
    };
        
        const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               Ramdani.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": kma
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }          
      
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Ramdani.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
    };
    
    const sendKontak = (from, nomor, nama, org, Ponsel, descBiz = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
        let nano = `Berikut Adalah Nomor Developer Saya, Silahkan Chat/Simpan Nomor Developer Saya.\n\n*NB: Dilarang Chat Yang Tidak Berkepentingan.*`
      Ramdani.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek, caption: nano}
      );
    }; 
    
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = Ramdani.contacts[from] != undefined ? Ramdani.contacts[from].vname || Ramdani.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Bot'; if (!author) author = 'By RamdaniBot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./media/stickers/${name}.exif`)) return `./media/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./media/stickers/${name}.exif`, buffer, (err) => {	
					return `./media/stickers/${name}.exif`	
				})	
	          }
Ramdani.updatePresence(from, Presence.composing)
if (!public) {
if (!isOwner && !mek.key.fromMe) return
}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night🌃'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon🌉'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon🌆'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon🌇'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night🌃'
 }
const froxx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `© Creator Ramdani Official`,
                 "title": `© Creator Ramdani Official`,
                 'jpegThumbnail': fs.readFileSync("./media/foto/thumb.jpg"),
                        }
	                  } 
                     }
runi = process.uptime() 
           Ramdani.setStatus(`Ramdani botz Aktif Selama ${(runi)} `).catch((_)=>_);
          settingstatus = new Date() * 1;
const jmn = moment.tz('Asia/Jakarta').format('HH.mm')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
const fakeText = (teks) => {
Ramdani.sendMessage(from, teks, text, {quoted: froxx})
}

switch(command) {
	            case 'verify':
	            case 'daftar':
	            if (isBanned) return reply(mess.banned)
				const serials = addSerial(20)
				try {
				ppimg = await Ramdani.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://mekpa-result.herokuapp.com/bgverify.jpeg' //ubah sesuka kamu, bisa upload di imgbb.com
				veri = sender
				fs.writeFileSync('./database/registered.json', JSON.stringify(_regist))
				addRegist(sender, serials)
				const ramdaniganteng = 
`
─── 「 *REGISTERED SUCCESS* 」───
• NAMA : ${pushname}
• NOMOR : ${sender.split('@')[0]}
• SERI : ${serials}
• TANGGAL : ${Tanggal}
• PUKUL : ${jam}
`
                let buff = await getBuffer(`${ppimg}`)
                Ramdani.sendMessage(from, buff, MessageType.image, {quoted: mek, caption: ramdaniganteng, contextInfo: {'mentionedJid': [sender]}})
                break
//DEWASA
    case 'saya18':
	case 'my18':
	if (!isRegist) return reply(mess.daftar)
    if (isBanned) return reply(mess.banned)
				const serimek = addSerimek(20)
				try {
				ppimg = await Ramdani.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://mekpa-result.herokuapp.com/bgverify.jpeg'
				veri = sender
				fs.writeFileSync('./database/dewasa.json', JSON.stringify(_dewasa))
				addDewasa(sender, serimek)
				const ramdanigans = 
`
─── 「 *VERIFY SUCCESS* 」───
• NAMA : ${pushname}
• NOMOR : ${sender.split('@')[0]}
• SERI : ${serimek}
• USIA : 18 tahun
• TANGGAL : ${Tanggal}
• PUKUL : ${jam}
`
                let buffmek = await getBuffer(`${ppimg}`)
                Ramdani.sendMessage(from, buffmek, MessageType.image, {quoted: mek, caption: ramdanigans, contextInfo: {'mentionedJid': [sender]}})
                break
//BOCIL
case 'my11':
case 'my12':
case 'my13':
case 'my14':
case 'my15':
case 'my16':
case 'my17':
//
case 'saya11':
case 'saya12':
case 'saya13':
case 'saya14':
case 'saya15':
case 'saya16':
case 'saya17':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*SKIP LU MASIH BOCIL, MENDING MAIN EP EP:V*`)
break
//MENU
case 'menu':
case 'help':
case 'h':
case 'm':
case 'danz':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
freply(mess.wait)
teks = `*Hallo Kak @${sender.split('@')[0]}👋 ${ucapanWaktu}*
*Jangan Lupa Kunjungi Sosmet Gue Ya*`
img = fs.readFileSync('./media/foto/menu.jpg')
danz = `
• *SOSMED*
ᴍʏ ɢɪᴛʜᴜʙ : ${Github}
ᴍʏ ʜᴇʀᴏᴋᴜ : ${Heroku}
ᴍʏ ᴡᴇʙ : ${Website}
ᴍʏ ʏᴏᴜᴛᴜʙᴇ : ${Yt}
ᴍʏ ɪɴsᴛᴀɢʀᴀᴍ : ${Ig}
ᴍʏ ᴛᴡɪᴛᴛᴇʀ : ${Twitter}
ᴍʏ ғᴀᴄᴇʙᴏᴏᴋ : ${Fb}

• *DONATE*
ɢᴏᴘᴀʏ : ${gopay}
ᴅᴀɴᴀ : ${dana}
ᴏᴠᴏ : ${ovo}
ᴘᴜʟsᴀ : ${pulsa}
ǫʀɪs : ${qris}
sᴀᴡᴇʀɪᴀ : ${saweria}
ʟɪɴᴋᴛʀᴇ : ${linktree}
© Creator By Ramdani Official`
but = [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'allmenu' }, type: 1 },{ buttonId: `${prefix}c`, buttonText: { displayText: 'select menu' }, type: 1 },{ buttonId: `${prefix}rules`, buttonText: { displayText: 'rules' }, type: 1 }]
soundmenu = fs.readFileSync('./media/audio/menu.mp3')
Ramdani.sendMessage(from, soundmenu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
sendButImage(from, teks, danz, img, but, {quoted: ftrol})
break
//ALLMENU
case 'allmenu':
case 'allfitur':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
freply(mess.wait)
teks = `*hallo kak @${sender.split('@')[0]}👋 ${ucapanWaktu}*
notes : Jangan spam ya kak, kasih jeda 5 detik agar bot tidak delay, okeh kak?

*⌜ Grup Menu ⌟* 
• ${prefix}welcome <enable/disable>
• ${prefix}antilink <enable/disable>
• ${prefix}group <enable/disable>
• ${prefix}simi <enable/disable>
• ${prefix}kick <@user>
• ${prefix}kickall
• ${prefix}hedsot <@user>
• ${prefix}reportbug
• ${prefix}request
• ${prefix}here
• ${prefix}setdesk
• ${prefix}setnamegc
• ${prefix}setppgrup
• ${prefix}promote
• ${prefix}demote
• ${prefix}promoteall
• ${prefix}demoteall
• ${prefix}wame
• ${prefix}notif
• ${prefix}listadmin
• ${prefix}listonline
• ${prefix}linkgrup

*⌜ Asupan Menu ⌟* 
• ${prefix}asupanbunga
• ${prefix}asupanayu
• ${prefix}asupancaca
• ${prefix}asupangeayubi
• ${prefix}asupanaura

*⌜ Maker Menu ⌟* 
• ${prefix}blackpink <text>
• ${prefix}pipe <text>
• ${prefix}heloween <text>
• ${prefix}heloween2 <text>
• ${prefix}horor <text>
• ${prefix}nulis <text>
• ${prefix}sirkuit <text>
• ${prefix}discovery <text>
• ${prefix}fiction <text>
• ${prefix}8bit <text>
• ${prefix}demon <text>
• ${prefix}transformer <text>
• ${prefix}berry <text>
• ${prefix}leyered <text>
• ${prefix}thunder <text>
• ${prefix}magma <text>
• ${prefix}stone <text>
• ${prefix}neon3 <text>
• ${prefix}glitch <text>
• ${prefix}glitch2 <text>
• ${prefix}broken <text>
• ${prefix}nulis2 <text>
• ${prefix}gradient <text>
• ${prefix}glossy <text>
• ${prefix}watercolor <text>
• ${prefix}multicolor <text>
• ${prefix}neondevil <text>
• ${prefix}underwater <text>
• ${prefix}bear <text>

*⌜ Game Menu ⌟* 
• ${prefix}truth
• ${prefix}dare  
• ${prefix}slot
• ${prefix}suit
• ${prefix}gelud
• ${prefix}tebakkata
• ${prefix}tebakkimia
• ${prefix}tebaklirik
• ${prefix}tebakbendera
• ${prefix}tebakgambar
• ${prefix}tebakanime
• ${prefix}math
• ${prefix}siapaaku
• ${prefix}tictactoe
• ${prefix}family100
• ${prefix}caklontong

*⌜ Anime Menu ⌟* 
• ${prefix}ppcouple
• ${prefix}uniform
• ${prefix}cuckold
• ${prefix}zettairyouiki
• ${prefix}sfwneko
• ${prefix}sao
• ${prefix}cosplay
• ${prefix}milf
• ${prefix}loli
• ${prefix}lovelive
• ${prefix}hsdxd
• ${prefix}husbu
• ${prefix}wallml
• ${prefix}waifu

*⌜ Hewan Menu ⌟* 
• ${prefix}fox
• ${prefix}dog
• ${prefix}cat
• ${prefix}panda
• ${prefix}panda1
• ${prefix}bird
• ${prefix}koala

*⌜ Hentai Menu ⌟* 
• ${prefix}art
• ${prefix}bts
• ${prefix}exo
• ${prefix}elf
• ${prefix}loli
• ${prefix}neko
• ${prefix}waifu
• ${prefix}shota
• ${prefix}husbu
• ${prefix}sagiri
• ${prefix}shinobu
• ${prefix}megumin
• ${prefix}wallnime
• ${prefix}chiisaihentai
• ${prefix}trap
• ${prefix}blowjob
• ${prefix}yaoi
• ${prefix}ecchi
• ${prefix}hentai
• ${prefix}ahegao
• ${prefix}hololewd
• ${prefix}sideoppai
• ${prefix}animefeets
• ${prefix}animebooty
• ${prefix}animethighss
• ${prefix}hentaiparadise
• ${prefix}animearmpits
• ${prefix}hentaifemdom
• ${prefix}lewdanimegirls
• ${prefix}biganimetiddies
• ${prefix}animebellybutton
• ${prefix}hentai4everyone
• ${prefix}bj
• ${prefix}ero
• ${prefix}cum
• ${prefix}feet
• ${prefix}yuri
• ${prefix}trap
• ${prefix}lewd
• ${prefix}feed
• ${prefix}eron
• ${prefix}solo
• ${prefix}gasm
• ${prefix}poke
• ${prefix}anal
• ${prefix}holo
• ${prefix}tits
• ${prefix}kuni
• ${prefix}kiss
• ${prefix}erok
• ${prefix}smug
• ${prefix}baka
• ${prefix}solog
• ${prefix}feetg
• ${prefix}lewdk
• ${prefix}waifu
• ${prefix}pussy
• ${prefix}femdom
• ${prefix}cuddle
• ${prefix}hentai
• ${prefix}eroyuri
• ${prefix}cum_jpg
• ${prefix}blowjob
• ${prefix}erofeet
• ${prefix}holoero
• ${prefix}classic
• ${prefix}erokemo
• ${prefix}fox_girl
• ${prefix}futanari
• ${prefix}lewdkemo
• ${prefix}wallpaper
• ${prefix}pussy_jpg
• ${prefix}kemonomimi
• ${prefix}nsfw_avatar
• ${prefix}ngif
• ${prefix}nsfw_neko_gif
• ${prefix}random_hentai_gif

*⌜ 18+ Menu ⌟* 
• ${prefix}bokep <text>
• ${prefix}xnxx <text>
• ${prefix}4everproxy <search>
• ${prefix}vpn

*⌜ Islam Menu ⌟* 
• ${prefix}listsurah
• ${prefix}asmaulhusna
• ${prefix}alquran 
• ${prefix}alquran 
• ${prefix}alquran 
• ${prefix}alquranaudio 
• ${prefix}alquranaudio 
• ${prefix}kisahnabi 
• ${prefix}jadwalsholat 

*⌜ Download Menu ⌟* 
• ${prefix}play <judul lagu>
• ${prefix}ytmp3 <judul/link>
• ${prefix}ytmp4 <judul/link>
• ${prefix}shortlink <link>
• ${prefix}mediafire <link>
• ${prefix}playstore <nama apk>
• ${prefix}appsstore <nama apl>
• ${prefix}y2mate <link>
• ${prefix}tiktok <judul>
• ${prefix}tiktokmusic <link>
• ${prefix}tiktoknowm <link>
• ${prefix}tiktokwm <link>
• ${prefix}igvideo <link>
• ${prefix}igfoto <link>
• ${prefix}ktp <isi dengan lengkap>
• ${prefix}pinterest <text>
• ${prefix}lirik <text>
• ${prefix}herolist <text>
• ${prefix}herodetail <nama hero>

*⌜ Serti Menu ⌟* 
• ${prefix}serti1 <text>
• ${prefix}serti2 <text>
• ${prefix}serti3 <text>
• ${prefix}serti4 <text>
• ${prefix}serti5 <text>
• ${prefix}serti6 <text>
• ${prefix}serti7 <text>
• ${prefix}serti8 <text>
• ${prefix}serti9 <text>
• ${prefix}serti10 <text>

*⌜ Hiburan Menu ⌟* 
• ${prefix}namaninja
• ${prefix}pantun
• ${prefix}katasindiran
• ${prefix}katailham
• ${prefix}tongue
• ${prefix}nickepep

*⌜ Sticker Menu ⌟* 
• ${prefix}sticker <reply image>
• ${prefix}ttp <text>
• ${prefix}attp <text>
• ${prefix}attp2 <text>
• ${prefix}attp3 <text>
• ${prefix}attp4 <text>
• ${prefix}attp5 <text>
• ${prefix}amongus <text>
• ${prefix}patrick <text>
• ${prefix}toimg <reply sticker>

*⌜ Kode Menu ⌟*
• ${prefix}tts <text>
• ${prefix}kodenegara <text>
• ${prefix}kodebahasa <text>

*⌜ Tools Menu ⌟*
• ${prefix}ssweb
• ${prefix}ssurl
• ${prefix}sslink
• ${prefix}encimg
• ${prefix}encfoto

*⌜ Owner Menu ⌟* 
• ${prefix}broadcast <text>
• ${prefix}broadcast2 <text>
• ${prefix}broadcastvideo <text>
• ${prefix}bcvideo <text>
• ${prefix}bc <text>
• ${prefix}bc2 <text>
• ${prefix}bc3 <text>
• ${prefix}bc4 <text>
• ${prefix}bc5 <text>
• ${prefix}delete <reply message>
• ${prefix}ban <target>
• ${prefix}unban <target>
• ${prefix}block <user>
• ${prefix}unblock <user>
• ${prefix}settppbot <image>
• ${prefix}leaveall (keluar semua grup)
• ${prefix}join <link grup>
• ${prefix}join2 <link grup>
• ${prefix}public
• ${prefix}self
• ${prefix}clearall
• ${prefix}restart
• ${prefix}addcmd
• ${prefix}delcmd
• ${prefix}listcmd
• ${prefix}exif`
img = fs.readFileSync('./media/foto/menu.jpg')
ramdanimastah = `© Creator By Ramdani Official`
but = [{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sewa bot' }, type: 1 },{ buttonId: `${prefix}infobot`, buttonText: { displayText: 'info bot' }, type: 1 }]
soundmenu = fs.readFileSync('./media/audio/allmenu.mp3')
Ramdani.sendMessage(from, soundmenu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
sendButImage(from, teks, ramdanimastah, img, but, {quoted: ftrol})
break
//SELECT MENU
case 'c':
case 'selectmenu':
case 'simplemenu':
case 'simpelmenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
 listMsg = {
 buttonText: 'Click Here',
 footerText: '© Creator By Ramdani Official',
 description: `Hai Kak @${sender.split('@')[0]}👋 ${ucapanWaktu}, Silahkan Pilih Menunya Disini\nJangan Spam Ya Kak, Kasih Jeda 5 Detik!!!`,
 sections: [
                     {
                      "title": `Jangan Lupa Donasi Ya Tod`,
 rows: [
                           {                         
                               "title": "[❤️]Thanks to",
                               "description" :"Menampilkan Thanks To",
                               "rowId": `${prefix}tqto`
                            },
                            {                         
                               "title": "[📝]Rules",
                               "description" :"Menampilkan Rules Bot",
                               "rowId": `${prefix}rules`
                            },
                            {                         
                               "title": "[📃]Info Bot",
                               "description" :"Menampilkan Info Bot",
                               "rowId": `${prefix}infobot`
                            },
                            {                         
                               "title": "[🗂️]Script",
                               "description" :"Menampilkan Script Bot",
                               "rowId": `${prefix}script`
                            },
                            {                         
                               "title": "[🤖]Jadi Bot",
                               "description" :"Menampilkan Jadi Bot",
                               "rowId": `${prefix}jadibot`
                            },
                            {                         
                               "title": "[👤]Owner",
                               "description" :"Menampilkan Owner Bot",
                               "rowId": `${prefix}owner`
                            },
                            {                         
                               "title": "[👩‍💻]Developer",
                               "description" :"Menampilkan Developer Bot",
                               "rowId": `${prefix}developer`
                            },
                            {                         
                               "title": "[👥]Group Bot",
                               "description" :"Menampilkan Group Bot",
                               "rowId": `${prefix}groupbot`
                            },
                            {                         
                               "title": "[📒]Allmenu",
                               "description" :"Menampilkan Fitur Allmenu",
                               "rowId": `${prefix}allmenu`
                            },
                            {                         
                               "title": "[🛒]Store Menu",
                               "description" :"Menampilkan Fitur Store Menu",
                               "rowId": `${prefix}storemenu`
                            },
                            {                         
                               "title": "[🤍]Asupan Menu",
                               "description" :"Menampilkan Fitur",
                               "rowId": `${prefix}asupanmenu`
                            },
                            {                         
                              "title": "[🖨️]Maker Menu",
                              "description" :"Menampilkan Fitur Menu Maker",
                              "rowId": `${prefix}makermenu`
                           },
                           {                         
                              "title": "[🉐]Anime Menu",
                              "description" :"Menampilkan Fitur Menu Anime",
                              "rowId": `${prefix}animemenu`
                           },
                           {                         
                              "title": "[🎮]Game Menu",
                              "description" :"Menampilkan Fitur Menu Game",
                              "rowId": `${prefix}gamemenu`
                           },
                           {                         
                              "title": "[👳]Islam Menu",
                              "description" :"Menampilkan Fitur Menu Islam",
                              "rowId": `${prefix}islammenu`
                           },
                           {                         
                              "title": "[🦊]Hewan Menu",
                              "description" :"Menampilkan Fitur Menu Hewan",
                              "rowId": `${prefix}hewanmenu`
                           },
                           {                         
                              "title": "[🈵]Hentai Menu",
                              "description" :"Menampilkan Fitur Menu Hentai",
                              "rowId": `${prefix}hentaimenu`
                           },
                           {                         
                              "title": "[🔞]18+ Menu",
                              "description" :"Menampilkan Fitur Menu 18+",
                              "rowId": `${prefix}18+menu`
                           },
                           {                         
                              "title": "[📥]Download Menu",
                              "description" :"Menampilkan Fitur Menu Download",
                              "rowId": `${prefix}downloadmenu`
                           },
                           {                         
                              "title": "[👩‍💻]Owner Menu",
                              "description" :"Menampilkan Fitur Menu Owner",
                              "rowId": `${prefix}ownermenu`
                           },
                           {                         
                              "title": "[🤡]Hiburan Menu",
                              "description" :"Menampilkan Fitur Menu Hiburan",
                              "rowId": `${prefix}hiburanmenu`
                           },
                           {                         
                              "title": "[🗿]Sticker Menu",
                              "description" :"Menampilkan Fitur Menu Sticker",
                              "rowId": `${prefix}stickermenu`
                           },
                           {                         
                              "title": "[#️⃣]Kode Menu",
                              "description" :"Menampilkan Fitur Menu Kode",
                              "rowId": `${prefix}kodemenu`
                           },                           
                           {                         
                              "title": "[⚒️]Tools Menu",
                              "description" :"Menampilkan Fitur Menu Tools",
                              "rowId": `${prefix}toolsmenu`
                            },                            
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
//STORE MENU
case 'store menu':
case 'storemenu':
case 'sm':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
 listMsg = {
 buttonText: 'Click Here',
 footerText: '© Creator By Ramdani Official',
 description: `Hai kak @${sender.split('@')[0]}👋 ${ucapanWaktu},, Silahkan pilih Command nya disini`,
 sections: [
                     {
                      "title": `Jangan Lupa Donasi Ya Tod`,
 rows: [
                           {                         
                               "title": "TOP UP GAME",
                               "description" :"",
                               "rowId": `${prefix}topupgame`
                            },
                            {                         
                               "title": "TOP UP SALDO",
                               "description" :"",
                               "rowId": `${prefix}topupsaldo`
                            },
                            {                         
                               "title": "BELI SCRIPT BOT",
                               "description" :"",
                               "rowId": `${prefix}beliscript`
                            },
                            {                         
                               "title": "BELI PREMIUM",
                               "description" :"",
                               "rowId": `${prefix}belipremium`
                            },
                            {                         
                               "title": "JASA RUN HEROKU",
                               "description" :"",
                               "rowId": `${prefix}jasarun`
                            },
                            {                         
                               "title": "JASA UP GITHUB",
                               "description" :"",
                               "rowId": `${prefix}jasaup`
                            },
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
//TOP UP GAME
case 'topupgame':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
 listMsg = {
 buttonText: 'Click Here',
 footerText: '© Creator By Ramdani Official',
 description: `Hai kak @${sender.split('@')[0]}👋 ${ucapanWaktu}, Silahkan pilih Command nya disini`,
 sections: [
                     {
                      "title": `Jangan Lupa Donasi Ya Tod`,
 rows: [
                           {                         
                               "title": "FREE FIRE",
                               "description" :"",
                               "rowId": `${prefix}topupff`
                            },
                            {                         
                               "title": "MOBILE LEGENDS",
                               "description" :"",
                               "rowId": `${prefix}topupml`
                            },
                            {                         
                               "title": "PUBG",
                               "description" :"",
                               "rowId": `${prefix}topuppubg`
                            },
                            {                         
                               "title": "POINT BLANK",
                               "description" :"",
                               "rowId": `${prefix}topuppb`
                            },
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
//TOPUP SALDO
case 'topupsaldo':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
 listMsg = {
 buttonText: 'Click Here',
 footerText: '© Creator By Ramdani Official',
 description: `Hai kak @${sender.split('@')[0]}👋 ${ucapanWaktu}, Silahkan pilih Command nya disini`,
 sections: [
                     {
                      "title": `Jangan Lupa Donasi Ya Tod`,
 rows: [
                           {                         
                               "title": "GOPAY",
                               "description" :"",
                               "rowId": `${prefix}topupgopay`
                            },
                            {                         
                               "title": "DANA",
                               "description" :"",
                               "rowId": `${prefix}topupdana`
                            },
                            {                         
                               "title": "OVO",
                               "description" :"",
                               "rowId": `${prefix}topupovo`
                            },
                            {                         
                               "title": "PULSA",
                               "description" :"",
                               "rowId": `${prefix}topuppulsa`
                            },
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
//CASE NYA
case 'donasi':
case 'donate':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`HALLO KAK, MAU DONASI?
• *PAYMENT*
*Gopay:* ${gopay}
*Dana:* ${dana}
*Ovo:* ${ovo}
*Pulsa:* ${pulsa}
*Qris:* ${qris}
*Saweria:* ${saweria}
*Linktree:* ${linktree}`)
break
case 'sewabot':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`━━━━━『 *LIST SEWA BOT* 』━━━━━

❏ PERHARI : 1 HARI 2K, 5 HARI 10K 
❏ PERMINGGU : 1MIN. 14K, 2MIN. 28K, 3MIN. 60K,
❏ PERBULAN : 1B. 30K, 2B. 70K, 3B. 140K,
❏ PERTAHUN : 1THN. 350K, 2THN. 700K,
❏ PERMANEN : TIMDAK TERSEDIA!
*minat chat owner*`)
break
case 'belipremium':
case 'buypremium':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`━━━━━『 *LIST PREMIUM* 』━━━━━

❏ PERHARI : 2H. 1K, 5H. 4K, 7H 6K,
❏ PERMINGGU : 1MIN. 6K, 2MIN. 10K, 3MIN. 15K,
❏ PERBULAN : 1B. 18K, 2B. 28K, 3B. 38K,
❏ PERTAHUN : 1THN. 100K
❏ PERMANEN : 150K
*minat chat owner*`)
break
//JADIBOT
case 'jadibot':
case 'jadibotwa':
case 'carajadibot':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*Jika ingin menjadi bot silahkan kunjungi channel YouTube Ramdani Official*\n*link* : https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`)
break
//SOSMET
//YOUTUBE
case 'youtube':
case 'ytb':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*nih channel youtube creator, jan lupa subscribe ya*\nhttps://youtube.com/channel/UCB157jomCne961WzYHpG4gg`)
break
//INSTAGRAM
case 'intagram':
case 'ig':
case 'ige':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*nih Instagram creator, jan lupa follow ya*\nhttps://www.instagram.com/muhammadramdani196453`)
break
//OWNER/CREATOR
//OWNER
case 'owner':
case 'ownerbot': 
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${nomorowner}:+${nomorowner}\n`  
            + 'END:VCARD'  
  Ramdani.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
  titid = 'Hallo kak, itu owner ku, jangan di ganggu ya\nbtw mau tau soal apa tentang owner ku?'
           sendButMessage(from, titid, `${namabot}\n${Tanggal}`, [
          {buttonId: `${prefix}ytb`, buttonText: { displayText: `YOUTUBE`, }, type: 1, },
          {buttonId: `${prefix}ig`, buttonText: { displayText: `INSTAGRAM`, }, type: 1, },
]); 
            break
            case 'developer':    
            case 'pembuatbot':
            case 'creator':
            case 'creatorbot':
const vcard2 = 'BEGIN:VCARD2\n'  
            + 'VERSION:3.0\n'  
            + `FN: Ramdani Official\n`  
            + `ORG:sibuk!!!;\n` 
            + `TEL;type=CELL;type=VOICE;waid=6289512545999:+6289512545999\n`  
            + 'END:VCARD2'  
  Ramdani.sendMessage(from, {displayname: "Jeff", vcard2: vcard2}, MessageType.contact, { quoted: mek})
  titit = 'Hallo kak, itu nomor pembuat bot ini, jangan di ganggu ya\nbtw mau tau soal apa tentang pembuat bot?'
           sendButMessage(from, titit, `${namabot}\n${Tanggal}`, [
          {buttonId: `${prefix}ytb`, buttonText: { displayText: `YOUTUBE`, }, type: 1, },
          {buttonId: `${prefix}ig`, buttonText: { displayText: `INSTAGRAM`, }, type: 1, },
]); 
            break
//THANKS TO
case 'thanksto':
case 'tqto':
case 'tqtq':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`• *BIG THANKS TO*
• RAMDANI OFFICIAL (ME)
• ARUL (MY GURU)
• MHANKBARBAR (MASTAH)
• APRILIA
• ZEEONE OFC
• DIKA ARDNT
• RIMURUBOTZ
• KAHFZXZY
• LEXXY OFFICIAL
• HERMAN CHANNEL
• ABIL BOT
• KURR XD OFFICIAL
• DIKA XD
• SIEGRIN
• KANNABOT
• YANZ BOT`)
break
//FITUR NYAAH BANGGG
case 'script':
case 'sc':
freply(`_*SRIPT ORI BY RAMDANI OFFICIAL*_
• *LINK*
• *GITHUB* : https://github.com/adiwajshing/v16
• *YOUTUBE* : https://youtube.com/adiwajshing`)
break
//BELI SCRIPT
case 'beliscript':
case 'belisc':
case 'buysc':
case 'buyscript':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, beliscript(prefix, nomorowner), text)
break
//STORE MENU//
//TOP UP GAME
case 'topupgame':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, topupgame(prefix), text)
break
case 'topupfreefire':
case 'topupff':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, topupfreefire(prefix, nomorowner), text)
break
case 'topupmobilelegends':
case 'topupml':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, topupmobilelegends(prefix, nomorowner), text)
break
case 'topuppubg':
case 'topuppapji':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, topuppubg(prefix, nomorowner), text)
break
case 'topuppointblank':
case 'topuppb':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, topuppointblank(prefix, nomorowner), text)
break
//TOP UP SALDO
case 'topupsaldo':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, topupsaldo(prefix), text)
break
case 'topupgopay':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, topupgopay(prefix, nomorowner), text)
break
case 'topupdana':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, topupdana(prefix, nomorowner), text)
break
case 'topupovo':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, topupovo(prefix, nomorowner), text)
break
case 'topuppulsa':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, topuppulsa(prefix, nomorowner), text)
break
//REPLY
case 'bebantot':
freply(`_awoakwok_`)
break
case 'berkat':
freply(`_anjing cuma mau berkatnya:v_`)
break      
case 'grupbot':
case 'groupbot':
case 'gcbot':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, grupbot(prefix), text)
break
//INFO BOT
case 'rules':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, rules(prefix, namabot, namaowner), text)
break
case 'infobot':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, infobot(prefix, namabot, nomorbot, namaowner, nomorowner), text)
break               
case 'donasi2':
case 'donate2':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, donasi(prefix, namabot, namaowner), text)
break
case 'iklan':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, iklan(prefix, namabot, namaowner), text)
break
case 'rules':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, rules(prefix, namabot, namaowner), text)
break
case 'tnc':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, tnc(prefix, namabot, namaowner), text)
break
case 'bingungcok':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.sendMessage(from, cara(prefix, namabot, namaowner), text)
break
//COMMAND
case 'groupmenu':
case 'grupmenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Group Menu ⌟* 
• ${prefix}welcome <enable/disable>
• ${prefix}antilink <enable/disable>
• ${prefix}group <enable/disable>
• ${prefix}simi <enable/disable>
• ${prefix}kick <@user>
• ${prefix}kickall
• ${prefix}hedsot <@user>
• ${prefix}reportbug
• ${prefix}request
• ${prefix}here
• ${prefix}setdesk
• ${prefix}setnamegc
• ${prefix}setppgrup
• ${prefix}promote
• ${prefix}demote
• ${prefix}promoteall
• ${prefix}demoteall
• ${prefix}wame
• ${prefix}notif
• ${prefix}listadmin
• ${prefix}listonline
• ${prefix}linkgrup`)
break

case 'asupanmenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Asupan Menu ⌟* 
• ${prefix}asupanbunga
• ${prefix}asupanayu
• ${prefix}asupancaca
• ${prefix}asupangeayubi
• ${prefix}asupanaura`)
break

case 'makermenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Maker Menu ⌟* 
• ${prefix}blackpink <text>
• ${prefix}pipe <text>
• ${prefix}heloween <text>
• ${prefix}heloween2 <text>
• ${prefix}horor <text>
• ${prefix}nulis <text>
• ${prefix}sirkuit <text>
• ${prefix}discovery <text>
• ${prefix}fiction <text>
• ${prefix}8bit <text>
• ${prefix}demon <text>
• ${prefix}transformer <text>
• ${prefix}berry <text>
• ${prefix}leyered <text>
• ${prefix}thunder <text>
• ${prefix}magma <text>
• ${prefix}stone <text>
• ${prefix}neon3 <text>
• ${prefix}glitch <text>
• ${prefix}glitch2 <text>
• ${prefix}broken <text>
• ${prefix}nulis2 <text>
• ${prefix}gradient <text>
• ${prefix}glossy <text>
• ${prefix}watercolor <text>
• ${prefix}multicolor <text>
• ${prefix}neondevil <text>
• ${prefix}underwater <text>
• ${prefix}bear <text>`)
break

case 'gamemenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Game Menu ⌟* 
• ${prefix}truth
• ${prefix}dare  
• ${prefix}slot
• ${prefix}suit
• ${prefix}gelud
• ${prefix}tebakkata
• ${prefix}tebakkimia
• ${prefix}tebaklirik
• ${prefix}tebakbendera
• ${prefix}tebakgambar
• ${prefix}tebakanime
• ${prefix}math
• ${prefix}siapaaku
• ${prefix}tictactoe
• ${prefix}family100
• ${prefix}caklontong`)
break

case 'animemenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Anime Menu ⌟* 
• ${prefix}ppcouple
• ${prefix}uniform
• ${prefix}cuckold
• ${prefix}zettairyouiki
• ${prefix}sfwneko
• ${prefix}sao
• ${prefix}cosplay
• ${prefix}milf
• ${prefix}loli
• ${prefix}lovelive
• ${prefix}hsdxd
• ${prefix}husbu
• ${prefix}wallml
• ${prefix}waifu`)

case 'hewanmenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Hewan Menu ⌟* 
• ${prefix}fox
• ${prefix}dog
• ${prefix}cat
• ${prefix}panda
• ${prefix}panda1
• ${prefix}bird
• ${prefix}koala`)
break

case 'hentaimenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Hentai Menu ⌟* 
• ${prefix}art
• ${prefix}bts
• ${prefix}exo
• ${prefix}elf
• ${prefix}loli
• ${prefix}neko
• ${prefix}waifu
• ${prefix}shota
• ${prefix}husbu
• ${prefix}sagiri
• ${prefix}shinobu
• ${prefix}megumin
• ${prefix}wallnime
• ${prefix}chiisaihentai
• ${prefix}trap
• ${prefix}blowjob
• ${prefix}yaoi
• ${prefix}ecchi
• ${prefix}hentai
• ${prefix}ahegao
• ${prefix}hololewd
• ${prefix}sideoppai
• ${prefix}animefeets
• ${prefix}animebooty
• ${prefix}animethighss
• ${prefix}hentaiparadise
• ${prefix}animearmpits
• ${prefix}hentaifemdom
• ${prefix}lewdanimegirls
• ${prefix}biganimetiddies
• ${prefix}animebellybutton
• ${prefix}hentai4everyone
• ${prefix}bj
• ${prefix}ero
• ${prefix}cum
• ${prefix}feet
• ${prefix}yuri
• ${prefix}trap
• ${prefix}lewd
• ${prefix}feed
• ${prefix}eron
• ${prefix}solo
• ${prefix}gasm
• ${prefix}poke
• ${prefix}anal
• ${prefix}holo
• ${prefix}tits
• ${prefix}kuni
• ${prefix}kiss
• ${prefix}erok
• ${prefix}smug
• ${prefix}baka
• ${prefix}solog
• ${prefix}feetg
• ${prefix}lewdk
• ${prefix}waifu
• ${prefix}pussy
• ${prefix}femdom
• ${prefix}cuddle
• ${prefix}hentai
• ${prefix}eroyuri
• ${prefix}cum_jpg
• ${prefix}blowjob
• ${prefix}erofeet
• ${prefix}holoero
• ${prefix}classic
• ${prefix}erokemo
• ${prefix}fox_girl
• ${prefix}futanari
• ${prefix}lewdkemo
• ${prefix}wallpaper
• ${prefix}pussy_jpg
• ${prefix}kemonomimi
• ${prefix}nsfw_avatar
• ${prefix}ngif
• ${prefix}nsfw_neko_gif
• ${prefix}random_hentai_gif`)
break

case '18+menu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ 18+ Menu ⌟* 
• ${prefix}bokep <text>
• ${prefix}xnxx <text>
• ${prefix}4everproxy <search>
• ${prefix}vpn`)
break

case 'islammenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Islam Menu ⌟* 
• ${prefix}listsurah
• ${prefix}asmaulhusna
• ${prefix}alquran 
• ${prefix}alquran 
• ${prefix}alquran 
• ${prefix}alquranaudio 
• ${prefix}alquranaudio 
• ${prefix}kisahnabi 
• ${prefix}jadwalsholat`)
break

case 'downloadmenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
repy(`*⌜ Download Menu ⌟* 
• ${prefix}play <judul lagu>
• ${prefix}ytmp3 <judul/link>
• ${prefix}ytmp4 <judul/link>
• ${prefix}shortlink <link>
• ${prefix}mediafire <link>
• ${prefix}playstore <nama apk>
• ${prefix}appsstore <nama apl>
• ${prefix}y2mate <link>
• ${prefix}tiktok <judul>
• ${prefix}tiktokmusic <link>
• ${prefix}tiktoknowm <link>
• ${prefix}tiktokwm <link>
• ${prefix}igvideo <link>
• ${prefix}igfoto <link>
• ${prefix}ktp <isi dengan lengkap>
• ${prefix}pinterest <text>
• ${prefix}lirik <text>
• ${prefix}herolist <text>
• ${prefix}herodetail <nama hero>`)
break

case 'sertimenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Serti Menu ⌟* 
• ${prefix}serti1 <text>
• ${prefix}serti2 <text>
• ${prefix}serti3 <text>
• ${prefix}serti4 <text>
• ${prefix}serti5 <text>
• ${prefix}serti6 <text>
• ${prefix}serti7 <text>
• ${prefix}serti8 <text>
• ${prefix}serti9 <text>
• ${prefix}serti10 <text>`)
break

case 'hiburanmenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Hiburan Menu ⌟* 
• ${prefix}namaninja
• ${prefix}pantun
• ${prefix}katasindiran
• ${prefix}katailham
• ${prefix}tongue
• ${prefix}nickepep`)
break

case 'stickermenu':
case 'stikermenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Sticker Menu ⌟* 
• ${prefix}sticker <reply image>
• ${prefix}ttp <text>
• ${prefix}attp <text>
• ${prefix}attp2 <text>
• ${prefix}attp3 <text>
• ${prefix}attp4 <text>
• ${prefix}attp5 <text>
• ${prefix}amongus <text>
• ${prefix}patrick <text>
• ${prefix}toimg <reply sticker>`)
break

case 'codemenu':
case 'kodemenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Kode Menu ⌟*
• ${prefix}tts <text>
• ${prefix}kodenegara <text>
• ${prefix}kodebahasa <text>`)
break

case 'toolsmenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Tools Menu ⌟*
• ${prefix}ssweb
• ${prefix}ssurl
• ${prefix}sslink
• ${prefix}encimg
• ${prefix}encfoto`)
break

case 'ownermenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Owner Menu ⌟* 
• ${prefix}broadcast <text>
• ${prefix}broadcast2 <text>
• ${prefix}broadcastvideo <text>
• ${prefix}bcvideo <text>
• ${prefix}bc <text>
• ${prefix}bc2 <text>
• ${prefix}bc3 <text>
• ${prefix}bc4 <text>
• ${prefix}bc5 <text>
• ${prefix}delete <reply message>
• ${prefix}ban <target>
• ${prefix}unban <target>
• ${prefix}block <user>
• ${prefix}unblock <user>
• ${prefix}settppbot <image>
• ${prefix}leaveall (keluar semua grup)
• ${prefix}join <link grup>
• ${prefix}join2 <link grup>
• ${prefix}public
• ${prefix}self
• ${prefix}clearall
• ${prefix}restart
• ${prefix}addcmd
• ${prefix}delcmd
• ${prefix}listcmd
• ${prefix}exif`)
//ASUPAN MENU
              case 'asupangeayubi':
              if (!isRegist) return reply(mess.daftar)
              if (!isRegist) return reply(mess.daftar)
              if (isBanned) return reply(mess.banned)
              if (!isPremium) return reply(mess.only.premium)
              reply(mess.wait)
              const geayubi = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/geayubi?apikey=Alphabot`)
              buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(geayubi, "videoMessage", { thumbnail: geayubi, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
              case 'asupanaura':
              if (!isRegist) return reply(mess.daftar)
              if (!isRegist) return reply(mess.daftar)
              if (isBanned) return reply(mess.banned)
              if (!isPremium) return reply(mess.only.premium)
              reply(mess.wait)
              const naura = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/aura?apikey=${Alphabot}`)
              buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(naura, "videoMessage", { thumbnail: naura, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
              case 'asupanbunga':
              if (!isRegist) return reply(mess.daftar)
              if (!isRegist) return reply(mess.daftar)
              if (isBanned) return reply(mess.banned)
              if (!isPremium) return reply(mess.only.premium)
              reply(mess.wait)
              const bunga = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/bunga?apikey=${Alphabot}`)
              buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(bunga, "videoMessage", { thumbnail: bunga, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
              case 'asupanayu':
              if (!isRegist) return reply(mess.daftar)
              if (!isRegist) return reply(mess.daftar)
              if (isBanned) return reply(mess.banned)
              if (!isPremium) return reply(mess.only.premium)
              reply(mess.wait)
              const ayu = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/ayu?apikey=${Alphabot}`)
              buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(ayu, "videoMessage", { thumbnail: ayu, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
              case 'asupancaca':
              if (!isRegist) return reply(mess.daftar)
              if (!isRegist) return reply(mess.daftar)
              if (isBanned) return reply(mess.banned)
              if (!isPremium) return reply(mess.only.premium)
              reply(mess.wait)
              const caca = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/delvira?apikey=${Alphabot}`)
              buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(caca, "videoMessage", { thumbnail: caca, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
//TEXT PRO MENU
case 'blackpink':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/blackpink?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'pipe':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/water_pipe?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'heloween':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'heloween2':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween2?text=${query}&text2=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'horor':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/horror?text=${query}&text2=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'nulis':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/sketch?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'sirkuit':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/sircuit?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'discovery':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/discovery?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'fiction':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/fiction?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case '8bit':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/game8bit?text=${query}&text2=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'demon':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/demon?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'transformer':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/transformer?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'berry':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/berry?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'leyered':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/layered?text=${query}&text2=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'thunder':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/thunder?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'magma':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/magma?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'stone':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/3dstone?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'neon3':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/neon?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'glitch':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glitch?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'glitch2':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glitch2?text=${query}&text2=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'herrypoter':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/harry_potter?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'embosed':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/embossed?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'broken':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/broken?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'nulis2':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/papercut?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'gradient':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/gradient?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'glossy':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glossy?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'watercolor':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/watercolor?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'multicolor':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/multicolor?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'neondevil':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/neon_devil?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'underwater':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/underwater?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'bear':
if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Ramdani Official`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/bear?text=${query}&apikey=${Alphabot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
//ANIME MENU
case 'ppcouple':
            if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
             anu = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`)
             cewe = await getBuffer(anu.result.female)
              cowo = await getBuffer(anu.result.male)
              Ramdani.sendMessage(from, cowo, image, {quoted: froxx, caption: 'Nih Versi Cowo Nya ^_^' })
              Ramdani.sendMessage(from, cewe, image, {quoted: froxx, caption: 'Nih Versi Cewe Nya ^_^' })
              break
                case 'sao':
                if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
				Ramdani.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 Ramdani.sendMessage(from, swordartonline, image, {quoted: froxx, caption: 'swort art online\nMEZ RazoR'})
				 break
				case 'hsdxd':
				if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
				 Ramdani.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 Ramdani.sendMessage(from, highschooldxd, image, {quoted: froxx, caption: 'NIH BANG '})
				break
				 case 'lovelive':
				if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
				 Ramdani.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 Ramdani.sendMessage(from, lovelive, image, {quoted: froxx, caption: 'NIH BANG '})
				break
                    case 'uniform':
					case 'sfwneko':
					case 'cuckold':
					case 'wpnsfwmobile':
					case 'zettairyouiki':
					if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
					qute6 = await getBuffer(`https://api.xteam.xyz/randomimage/${command}?APIKEY=7415bc4287ad5ca8`)
					Ramdani.sendMessage(from, qute6, image, { quoted: froxx, caption: ':)' })
					break
             case 'waifu':
            case 'loli':
            case 'husbu':
            case 'milf':
            case 'cosplay':
            case 'wallml':
            if (!isRegist) return reply(mess.daftar)
            if (isBanned) return reply(mess.banned)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${command}`,buttonText:{displayText: `Next`},type:1},{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1}]
              imageMsg = ( await Ramdani.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Menuju Tak Terbatas', imageMessage: imageMsg,
              contentText:`Creator Ramdani Official`,buttons,headerType:4}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              Ramdani.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
//HEWAN MENU
case 'fox':  
                   if (!isRegist) return reply(mess.daftar)
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'dog':  
                   if (!isRegist) return reply(mess.daftar)
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'cat':
                   if (!isRegist) return reply(mess.daftar)
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda':  
                   if (!isRegist) return reply(mess.daftar)
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda1':  
                   if (!isRegist) return reply(mess.daftar)
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'bird': 
                   if (!isRegist) return reply(mess.daftar)
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'koala':  
                   if (!isRegist) return reply(mess.daftar)
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
//ISLAM MENU
                   case 'listsurah':
                   if (!isRegist) return reply(mess.daftar)
                   if (isBanned) return reply(mess.banned)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                    case 'alquran':
                    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${Lolhuman}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                    case 'alquranaudio':
                    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${Lolhuman}`)
                    await lolhuman.sendMessage(from, ini_buffer, audio, { quoted: lol, mimetype: Mimetype.mp4Audio })
                    break
                    case 'asmaulhusna':
                    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                    case 'kisahnabi':
                    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                    case 'jadwalsholat':
                    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
                    reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
//RANDOM FOTO
case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                if (!isRegist) return reply(mess.daftar)
                if (!isDewasa) return reply(mess.dewasa)
                if (isBanned) return reply(mess.banned)                
                getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${Lolhuman}`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: froxx })
                })
                break
//HENTAI MENU
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (!isRegist) return reply(mess.daftar)
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                if (!isPremium) return reply(mess.only.premium)
                await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${Lolhuman}`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: froxx })
                })
                break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (!isRegist) return reply(mess.daftar)
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                if (!isPremium) return reply(mess.only.premium)
                getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${Lolhuman}`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: froxx })
                })
                break
case 'bokep':
case 'xnxx':
case '4everproxy':
case 'vpn':
case 'bahasa':
if (!isRegist) return reply(mess.daftar)
if (!isDewasa) return reply(mess.dewasa)
if (isBanned) return reply(mess.banned)
reply(`*TOBAT TOLOL, BOKEP MULU PIKIRAN LU,*`)
break
                    case 'kodebahasa':                  
                    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
                    bahasa = args.join(' ')
                    text = args.join(' ')
                    Ramdani.sendMessage(from, bahasa(), text, { quoted:froxx })
                    break 
                    case 'kodenegara':
                    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
					Ramdani.sendMessage(from, negara(), text)
					break
                    case 'tts':
                    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
				    if (args.length < 1) return Ramdani.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Ramdani.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							Ramdani.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
//STICKER MENU
           case 'ttp':  
           if (!isRegist) return reply(mess.daftar)
           if (isBanned) return reply(mess.banned)
           if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp Ramdani botz Whatsapp`)
           anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
           Ramdani.sendMessage(from, anu1, image, {quoted: mek, caption : `${prefix}sticker`})
           break
          case 'attp':
           if (!isRegist) return reply(mess.daftar)
           if (isBanned) return reply(mess.banned)
           if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
           buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
           Ramdani.sendMessage(from, buffer, sticker, { quoted: mek })
           break
            case 'patrick':
            if (!isRegist) return reply(mess.daftar)
            if (isBanned) return reply(mess.banned)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${Lolhuman}`)
			Ramdani.sendMessage(from, wkwk, sticker, {quoted: froxx})
			break
			case 'amongus':
			if (!isRegist) return reply(mess.daftar)
            if (isBanned) return reply(mess.banned)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=${Lolhuman}`)
			Ramdani.sendMessage(from, wkwk, sticker, {quoted: froxx})
			break
            case 'toimg':
            if (!isRegist) return reply(mess.daftar)
            if (isBanned) return reply(mess.banned)
			if (!isQuotedSticker) return reply('𝗥??𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
                    case 'sticker':
					case 'stiker':
					case 's':
					if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
			        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await Ramdani.downloadAndSaveMediaMessage(encmedia, `./media/sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.apikey)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./media/sticker/data.exif ./media/sticker/${sender}.webp -o ./media/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.apikey)
											Ramdani.sendMessage(from, fs.readFileSync(`./media/sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./media/sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./media/sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await Ramdani.downloadAndSaveMediaMessage(encmedia, `./media/sticker/${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.apikey)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./media/sticker/data.exif ./media/sticker/${sender}.webp -o ./media/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.apikey)
											Ramdani.sendMessage(from, fs.readFileSync(`./media/sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)
											fs.unlinkSync(`./media/sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./media/sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
//DOWNLOAD MENU
case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await Ramdani.sendMessage(from,di,image,{quoted: mek})
            break              
case 'play':
if(isBanned) return reply (mess.banned)
if (args.length === 0) return reply (`Example ${prefix + command} love nwantiti`)
anu = await fetchJson (`https://api.lolhuman.xyz/api/ytplay?apikey=13710ff963cb90b9a88fb436&query=${args.join(' ')}`)
sayang = `TITLE BERHASIL DImekATKAN OLEH BOT\n\nTitle : ${anu.title}\nChannel : ${anu.channel}\nUpload : ${anu.published}\nViews : ${anu.views}\n\n*Mohon Tunggu Beberapa Menit Bot Sedang Mengirimkan File*`
buf = await getBuffer (anu.thumb)
Ramdani.sendMessage (from, buf, image, {quoted: mek, caption: sayang})
sound = await getBuffer (anu.url)
Ramdani.sendMessage(from, sound, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'play2':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length ==0)return reply('Judul Lagunya Apa?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=apivinz&q=${bo}`)
thmb = await getBuffer(ini.result.thumbnail)
ply1 =`Judul: ${ini.result.title}\nSize: ${ini.result.size}\nDurasi: ${ini.result.duration}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: { displayText: '️ᴍᴜsɪᴋ 🎵' }, type: 1 },
{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: 'ᴠɪᴅᴇᴏ 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'mp4':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=apivinz&q=${bo}`)
mp4 = await getBuffer(ini.result.url_video)
Ramdani.sendMessage(from, mp4, video)
break
case 'mp3':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=apivinz&q=${bo}`)
mp3 = await getBuffer(ini.result.url_audio)
Ramdani.sendMessage(from, mp3, audio)
break
case 'tiktok196453':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply(mess.error.link)
              data = await fetchJson(`https://adiwajshing-api.herokuapp.com/api/download/tiktok?url=${q}/&apikey=Alphabot`)
              result = `Ramdani, *Nickname*: ${data.result.author}\n*Like*: ${data.result.statistic.diggCount}\n *Komentar*: ${data.result.statistic.commentCount}\n*Share*: ${data.result.statistic.shareCount}\n*Views*: ${data.result.statistic.playCount}\n*Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `NO WATERMARK`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'Audio ( 4.5 MB )'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await Ramdani.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              Ramdani.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'tiktok':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://api-aprilia-xyz.herokuapp.com/api/tiktok?url=${args.join(' ')}`)
buffer = await getBuffer (anu.result.original)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'SUBS Ramdani Official SU'})
break
/*
case 'tiktoknowm':
      if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${args.join(' ')}`)
buffer = await getBuffer(anu.download)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
case 'tiktokwm':
      if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_wm?url=${args.join(' ')}`)
buffer = await getBuffer (anu.download)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
*/
case 'igvideo':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (args.length < 1) return reply("```Mana linknya tot```")
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('```Invalid link```')
reply(mess.wait)
anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/igdownload?url=${args.join(' ')}&apikey=wf2tghNhfU`)
buffer = await getBuffer (anu.result.download_url)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: '*Subscribe channel Ramdani Official dan follow Instagram riyan_ff12*'})
break
case 'igfoto':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (args.length < 1) return reply("```Mana linknya tot```")
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('```Invalid link```')
reply(mess.wait)
anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/igdownload?url=${args.join(' ')}&apikey=wf2tghNhfU`)
buffer = await getBuffer (anu.result.download_url)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: '*Subscribe channel Ramdani Official dan follow Instagram riyan_ff12*'})
break
case 'playmp3':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (args.length < 1) return reply("```JUDUL MANA TOT```")
anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytplaymp3?query=${args.join(' ')}&apikey=wf2tghNhfU`)
reply(mess.wait)
captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nSize : ${anu.result.size}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM AUDIO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buff, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'playmp4':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (args.length < 1) return reply("```JUDUL MANA TOT```")
anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytplaymp4?query=${args.join(' ')}&apikey=wf2tghNhfU`)
reply(mess.wait)
captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nSize : ${anu.result.size}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM VIDEO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buff, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'shadowtext':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} Ramdani Official`)
txt = args.join(" ")
reply(mess.wait)
buffer = await getBuffer(`https://ogata-api.herokuapp.com/api/oxy/shadow?text=${txt}&apikey=${ogatakey}`)
Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption:mess.success})
break
case 'ytmp3':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (args.length < 1) return reply("```LINK NYA?```")
if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply('```LINK NYA JELEK NIH```')
reply (mess.wait)
anu = await fetchJson (`https://api.dapuhy.ga/api/socialmedia/ytmp3?url=${args.join(' ')}&apikey=wf2tghNhfU`)
captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nSize : ${anu.result.size}\nLike Video: ${anu.result.likes}\nViews : ${anu.result.views}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM AUDIO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'ytmp4':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (args.length < 1) return reply("```LINK NYA?```")
if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply('```LINK NYA JELEK NIH```')
reply (mess.wait)
anu = await fetchJson (`https://api.dapuhy.ga/api/socialmedia/ytmp4?url=${args.join(' ')}&apikey=wf2tghNhfU`)
captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nSize : ${anu.result.size}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM VIDEO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, video, {mimetype: 'video/mp4', quoted: mek})
break
                    case 'ktp':
                    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply (mess.banned)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nContoh: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|Akira|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=SAYULONTEH&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    Ramdani.sendMessage(from, ini_anu, image, {quoted: mek, caption: 'Noh Jadi'})
                    break
case 'tiktokmusic':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson(`http://zekais-api.herokuapp.com/tiktokmusic?url=${args.join(' ')}&apikey=Rj9pGDhE`)
buffer = await getBuffer (anu.result)
Ramdani.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'shortlink':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
anu = await fetchJson (`https://api-aprilia.herokuapp.com/api/short/tiny?url=${args.join(' ')}&apikey=Alphabot`)
reply (anu.result.link)
break
case 'buttons3': 
if (!isRegist) return reply(mess.daftar)
 if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply(mess.error.Iv)
data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${Lolhuman}&url=${q}`)
ini_video = await getBuffer(data.result.link)
Ramdani.sendMessage(from, ini_video, video, { quoted: froxx })
break
          case 'buttons4': 
          if (!isRegist) return reply(mess.daftar)
          if (isBanned) return reply(mess.banned)
          reply(mess.wait)
          if (!q) return reply('Linknya?')
          if (!q.includes('tiktok')) return reply(mess.error.Iv)
          data = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${Lolhuman}&url=${args[0]}`)
          Ramdani.sendMessage(from, data, audio, { quoted: froxx })
          break
              case 'buttons1':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=apivinz&q=${q}`)
		     .then(res => {
			  Ramdani.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: froxx, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
              })
              break
case 'lirik':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (args.length < 1) return reply('Judulnya?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'herolist':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*
*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
//OWNER MENU
case 'exif':
             if (!isOwner) return  reply(mess.only.ownerB)
             if (!q) return reply(mess.error.format)
             if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sukses')
             break
case 'clearall':
					if (!isOwner) return reply(mess.only.ownerB)
					anu = await Ramdani.chats.all()
					Ramdani.setMaxListeners(25)
					for (let _ of anu) {
						Ramdani.deleteChat(_.jid)
					}
					break
case 'block':
				 Ramdani.updatePresence(from, Presence.composing) 
				 Ramdani.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					Ramdani.blockUser (`${body.slice(7)}@c.us`, "add")
					Ramdani.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    Ramdani.blockUser (`${body.slice(9)}@c.us`, "remove")
					Ramdani.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break   				
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					Ramdani.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(enmedia)
					await Ramdani.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
		case 'setppbot':
				    if (!isOwner) return reply('*Only Owner bot*')
					Ramdani.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(enmedia)
					await Ramdani.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
case 'public':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (!isOwner) return reply(mess.only.ownerB)
public = true
fakeText('*Sukses mengubah mode public*')
break
case 'self':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (!isOwner) return reply(mess.only.ownerB)
public = false
fakeText('*Sukses mengubah mode self*')
      case 'hedsot':
             if (!isRegist) return reply(mess.daftar)
             if (isBanned) return reply(mess.banned)
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
             if (!isRegist) return reply(mess.daftar)
             if (isBanned) return reply(mess.banned)
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node start.js`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
             if (!isRegist) return reply(mess.daftar)
             if (isBanned) return reply(mess.banned)
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = Ramdani.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             Ramdani.groupLeave(id)
}
             break
        case 'join':
            if (!isRegist) return reply(mess.daftar)
            if (isBanned) return reply(mess.banned)
            if (!isOwner) return reply(mess.only.ownerB)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return reply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakeitem('pastikan link sudah benar!')
            var response = await Ramdani.acceptInvite(codeInvite)
            fakeitem('SUKSES')
            } catch {
            fakeitem('LINK ERROR!')
            }
        break
        case 'join2': 
             if (!isRegist) return reply(mess.daftar)
             if (isBanned) return reply(mess.banned)
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = Ramdani.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
                    case 'ban':
                    case 'banned':
                    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
	                break
                    case 'unban':
                    case 'unbanned':
                    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
		break
        case 'd':
        case 'del':
        case 'delete': 
        if (!isRegist) return reply(mess.daftar)
        if (isBanned) return reply(mess.banned)
        if (!isOwner) return reply(mess.only.ownerB)
					Ramdani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
break
case 'addcmd': 
case 'setcmd':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `F`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*➪𝙸𝙳:* ${i.id}\n*➪𝙲𝚖𝚍:* ${i.chats}`
}
reply(teksnyee)
break
                    case 'bc': 
                    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await Ramdani.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Ramdani.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Ramdani.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             Ramdani.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`,
			"footerText": '© Creator By Ramdani Official',
			"buttons": [
			{"buttonId": `${prefix}simpelmenu`,
			"buttonText": {"displayText": "Simple Menu"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )}
             reply('Suksess broadcast')}
        break
        case 'bc2':
             if (!isRegist) return reply(mess.daftar)
             if (isBanned) return reply(mess.banned)
             if(!isOwner) return reply('Anda Bukan Owner')
             buff10 = await getBuffer (`https://api-xcz.herokuapp.com/api/random/waifu`)
             if (args.length < 1) return reply('teks?')
             anu = await Ramdani.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await Ramdani.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	Ramdani.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             Ramdani.sendMessage(_.jid, { contentText: `${textt}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')}
             break
//SERTI MENU
case 'serti1':
case 'serti2':
case 'serti3':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length ==0) return reply('Text Nya Mana Tod?')
txtt = args.join (" ")
reply(mess.wait)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
Ramdani.sendMessage(from, buff, image, { quoted: froxx, caption: 'Nih Bro Hasil nya' })
break
//GAME MENU
case 'truth':
case 'dare':
case 'slot':
case 'suit':
case 'gelud':
case 'tebakkata':
case 'tebakkimia':
case 'tebaklirik':
case 'tebakbendera':
case 'tebakgambar':
case 'tebakanime':
case 'math':
case 'siapaaku':
case 'tictactoe':
case 'family100':
case 'caklontong':
reply(mess.error.apikey)
break
//HIBURAN MENU
case 'nickepep':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=${Leyscoders}`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'katailham':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=${Leyscoders}`)
reply(`*Random Kata Ilham*\n${anu.result}`)
break
case 'katasindiran':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/skak?apikey=${Leyscoders}`)
reply(`*Random Kata Sindiran*\n${anu.result}`)
break
case 'tongue':  
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `➻ *NIHH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'namaninja':  
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `➻ *NAMA* : ${anu.your_name}\n`
anu1 += `➻ *NINJA* : ${anu.result}\n`
reply(anu1)
break 
//PEMBATASAN
case 'notif':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (!isGroupAdmins) return reply(ind.only.admin)
Ramdani.updatePresence(from, Presence.composing)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await Ramdani.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
} 
await Ramdani.sendMessage(from, options, text)
break
case 'wa.me':
case 'wame':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
Ramdani.updatePresence(from, Presence.composing) 
options = {
text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: { mentionedJid: [sender] }
}
Ramdani.sendMessage(from, options, text, { quoted: mek } )
break
if (data.error) return reply(data.error)
reply(data.result)
break
//RANDOM MENU
// Note jangan Salah Gunain
case 'buggc':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (!isOwner) return reply(mess.only.ownerB)
if (!isOwner) return reply(mess.only.ownerB)
await Ramdani.toggleDisappearingMessages(from)
reply("mampus")
break
case 'hacked':
              if (!isRegist) return reply(mess.daftar)
              if (isBanned) return reply(mess.banned)
              if (!isOwner) return reply(mess.only.ownerB)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
              tessgc = await getBuffer(`https://telegra.ph/file/42bbb3c9962702d314008.jpg`)
              Ramdani.updateProfilePicture (from, tessgc)
              Ramdani.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
              Ramdani.groupUpdateDescription(from, `_Owner telah meretas grup ini_`)             
              Ramdani.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
		      break
// Fitur Join Grup Whatsapp
case 'join':  case 'joingc':
   if (!isRegist) return reply(mess.daftar)
   if (isBanned) return reply(mess.banned)
   if (!q) return reply('Linknya?')
   if (isOwner) {
   if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Kak')
   reply('Please waitt...')
   link = args[0].replace('https://chat.whatsapp.com/','')
   fak = Ramdani.query({ json: ['action', 'invite', link],
   expect200: true })
   reply('Berhasil Masuk Grup')
   } else {
   const buttons = [{buttonId: `${prefix}sewabot`, buttonText: {displayText: 'SEWA'}, type: 1}]
   const buttonMessage = {
   headerType: "IMAGE",
   contentText: `Hai Kak, Fitur Ini Hanya Bisa Di Gunakan Oleh Owner`,
   footerText: 'ingin sewa? klik di bawah',
   buttons: buttons,
   headerType: 1
   }
   await Ramdani.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
   }
   break
				case 'rate':
				if (!isRegist) return reply(mess.daftar)
				if (!isRegist) return reply(mess.daftar)
                if (isBanned) return reply(mess.banned)
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break           
           case 'seberapagay':
           if (!isRegist) return reply(mess.daftar)
           if (!isRegist) return reply(mess.daftar)
           if (isBanned) return reply(mess.banned)
		   gay = body.slice(13)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${gay}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
		   break
           case 'cersex':
                    if (!isRegist) return reply(mess.daftar)
					if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://api-senku.herokuapp.com/api/cersex?apikey=${apisenku}`)
					reply(anu.result)
					break
        case 'quotes':
        if (isBanned) return reply (mess.banned)
        anu = await fetchJson(`https://melcanz.net/api/quotes?apikey=daff`)
        reply (anu.quotes)
        break
                case 'cerpen':
                if(isBanned) return reply (mess.banned)
                gatauda = body.slice(1)
                anu = await fetchJson(`https://api-senku.herokuapp.com/api/cerpen?apikey=${apisenku}`)
                reply(anu.result.ceritanya)
                break
               case 'artinama':
               if (isBanned) return reply (mess.banned)
               if (args.length == 0) return reply(`Example: ${prefix + command} apri`)
               anu = await fetchJson(`https://melcanz.net/api/artinama?nama=${args.join(' ')}&apikey=daff`)
               reply(anu.result)
               break
               case 'artimimpi':
               if (isBanned) return reply (mess.banned)
               if (args.length == 0) return reply(`Example: ${prefix + command} apri`)
               anu = await fetchJson(`https://melcanz.net/api/artimimpi?mimpi=${args.join(' ')}&apikey=daff`)
               reply(anu.result)
               break
               case 'kisahnabi':
               if (isBanned) return reply (mess.banned)
               if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
               anu = await fetchJson(`https://raku-web.herokuapp.com/api/muslim/kisahnabi?nabi=${args.join(' ')}&apikey=${rakukey}`)
               anu1 = `*NAMA NABI* : ${anu.result.name}\n`
               anu1 += `*KELAHIRAN* : ${anu.result.kelahiran}\n`
               anu1 += `*WAFAT USIA* : ${anu.result.wafat_usia}\n` 
               anu1 += `*KISAH* : ${anu.result.kisah}\n`
               reply(anu1)
               break
//GROUP MENU
case 'kickall':
	 if (!isOwner) return reply(mess.only.ownerB)
					members_id = []
   teks = (args.length > 1) ? body.slice(8).trim() : ''
	            teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*??* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					Ramdani.groupRemove(from, members_id)
			        break
                    case 'setdesk':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					Ramdani.groupUpdateDescription(from, `${body.slice(9)}`)
					Ramdani.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: amv})
					break
                    case 'setnamegc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					Ramdani.groupUpdateSubject(from, `${body.slice(9)}`)
					Ramdani.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: amv})
					break
                    case 'listadmin2':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
//WELCOME
case 'intro':
var intro = `ᴡᴇʟᴄᴏᴍᴇ
ɪɴᴛʀᴏ
┌ > ɴᴀᴍᴀ : 
┌ > ᴀsᴀʟ ᴋᴏᴛᴀ : 
┌ > ᴜsɪᴀ : 
┌ > ɢᴇɴᴅᴇʀ : 
┌ > sᴛᴀᴛᴜs :
ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ sᴜʙsᴄʀɪʙᴇ ʏᴛ ʀᴀᴍᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ
https://youtube.com/channel/UCB157jomCne961WzYHpG4ghttps://youtube.com/channel/UCB157jomCne961WzYHpG4gg
`
Ramdani.sendMessage(from, intro, text, {quoted: ftrolMENU, contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true })
break
             case 'listonline':             
             if (!isRegist) return reply(mess.daftar)
             if (isBanned) return reply(mess.banned)
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(Ramdani.chats.get(ido).presences), Ramdani.user.jid]
             Ramdani.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
              case 'setgrupname':
              if (!isRegist) return reply(mess.daftar)
              if (isBanned) return reply(mess.banned)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              Ramdani.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
              case 'setdesc':
              if (!isRegist) return reply(mess.daftar)
              if (isBanned) return reply(mess.banned)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              Ramdani.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
              case 'setppgrup':
              if (!isRegist) return reply(mess.daftar)
              if (isBanned) return reply(mess.banned)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await Ramdani.downloadMediaMessage(encmedia)
              Ramdani.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
        case 'demoteall':
        if (!isRegist) return reply(mess.daftar)
        
        if (isBanned) return reply(mess.banned)
        
		if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)

		if (!isGroup) return reply(mess.only.group)

		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
               
		 members_id = [ ]
		
		 for (let mem of groupMembers) {
	   
		 	members_id.push(mem.jid)
	  
		 		}
              
		 		  Ramdani.groupDemoteAdmin(from, members_id)
              
		 		    break
                
    case 'promoteall':
	if (!isRegist) return reply(mess.daftar)
    if (isBanned) return reply(mess.banned)
	if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)
	if (!isGroup) return reply(mess.only.group)
    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
	members_id = [ ]
	for (let mem of groupMembers) {
	members_id.push(mem.jid)
	}
    Ramdani.groupMakeAdmin(from, members_id)
    break
                 case 'group':
                 if (!isRegist) return reply(mess.daftar)
                 if (isBanned) return reply(mess.banned)
				 danz = 'PILIH MANA MIN?'
        sendButMessage(from, danz, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
        case "closegc": 
        if (!isRegist) return reply(mess.daftar)
        if (isBanned) return reply(mess.banned)
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
        case "opengc":
        if (!isRegist) return reply(mess.daftar)
        if (isBanned) return reply(mess.banned)
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
                    case 'hidetag':        
                    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await Ramdani.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					//var options = {text: value, contextInfo: { mentionedJid: mem }, quoted: fhidetag}
					Ramdani.sendMessage(from, value, text, {quoted: fhidetag, contextInfo: { mentionedJid: mem }})
					break;
		        case 'tagall':
			    if (!isRegist) return reply(mess.daftar)
                if (isBanned) return reply(mess.banned)
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				members_id = []
				teks = (args.length > 1) ? body.slice(8).trim() : ''
				teks += '\n\n'
				for (let mem of groupMembers) {
				teks += `*${prefix}* @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
				}
				mentions(teks, members_id, true)
				break
                    case 'promote':
                    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						Ramdani.groupMakeAdmin(from, mentioned)
					}
					break
				    case 'demote':
				    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
			        if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						Ramdani.groupDemoteAdmin(from, mentioned)
					}    
					break
			 case 'add':        
				    if (isBanned) return reply(mess.banned)
				    if (!isRegist) return reply(mess.daftar)
			        if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Ramdani.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
				    if (isBanned) return reply(mess.banned)
				    if (!isRegist) return reply(mess.daftar)
		            if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
				if (!isRegist) return reply(mess.daftar)
                if (isBanned) return reply(mess.banned)
			    if (!isGroup) return reply(mess.only.group)
				teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
				no = 0
				for (let admon of groupAdmins) {
				no += 1
				teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
				}
				mentions(teks, groupAdmins, true)
				break
                case 'linkgroup':
                if (!isRegist) return reply(mess.daftar)
                if (isBanned) return reply(mess.banned)
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                linkgc = await Ramdani.groupInviteCode(from)
                reply('https://chat.whatsapp.com/'+linkgc)
                break
                    case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    Ramdani.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
            case 'welcome':
            if (!isRegist) return reply(mess.daftar)
            if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (Number(args[0]) === 1) {
			if (isWelkom) return reply('Udah aktif um')
			welkom.push(from)
			fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
		    reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}welcome 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}welcome 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
   
                    case 'antilink':
                    if (!isRegist) return reply(mess.daftar)
                    if (isBanned) return reply(mess.banned)
                	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
					if (isAntilink) return reply('Anti link group sudah aktif')
					antilink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('Sukses mengaktifkan anti link group di group ini ✔️')
					Ramdani.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break
        case 'd':
        case 'del':
        case 'delete': 
        if (!isRegist) return reply(mess.daftar)
        if (isBanned) return reply(mess.banned)        
        if (!isOwner) return reply(mess.only.ownerB)
		Ramdani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		break
//------------------< Game >------------------
        case 'limitgame': 
        case 'balance': 
               const balance = atm.checkATMuser(sender, _uang)
               if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
               textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
               break
         case 'gelud':
               if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               Ramdani.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':
        case 'resetgame':
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              Ramdani.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
              gameAdd(sender, glimit)
              break
       case 'family100':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
              anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${setting.lolkey}`)
              reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
              let anoh = anu.data.result.aswer
              let rgfds = []
              for (let i of anoh){
              let fefs = i.split('/') ? i.split('/')[0] : i
              let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
              let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
              rgfds.push(axsf.toLowerCase())
}
              game.addfam(from, rgfds, gamewaktu, family100)
              gameAdd(sender, glimit)
              break
       case 'tebakanime':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebakchara?apikey=${setting.lolkey}`)
              get_result = get_result.result
              ini_image = get_result.image
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              Ramdani.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {
              tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
})
              await sleep(30000)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebakanime[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklagu':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`)
              get_result = get_result.result
              ini_audio = get_result.preview
              jawaban = get_result.judul
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_audio)
              reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')
              Ramdani.sendMessage(from, ini_buffer, audio, {quoted: mek}).then(() => {
              tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
})
              await sleep(30000)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebaklagu[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
}
              gameAdd(sender, glimit)
              break
       case 'tebaktebakan':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              Ramdani.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              gameAdd(sender, glimit)
              break
       case 'kuismath':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              ini_buffer = await getBuffer(ini_image)
              Ramdani.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {
              kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
})
              await sleep(50000)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete kuismath[sender.split('@')[0]]
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
}
              gameAdd(sender, glimit)
              break
       case 'tebakgambar':
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`http://zekais-api.herokuapp.com/tebakgambar`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              Ramdani.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
              tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
              await sleep(30000)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebakgambar[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
              gameAdd(sender, glimit)
              break
       case 'siapaaku':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Ramdani.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              gameAdd(sender, glimit)
              break
       case 'tebakkata':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/kata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              Ramdani.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
              tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
})
              await sleep(30000)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakata[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklirik':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Ramdani.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              gameAdd(sender, glimit)
              break
      case 'tebakjenaka':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Ramdani.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
              await sleep(30000)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakjenaka[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
              gameAdd(sender, glimit)
              break
       case 'kimiakuis':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.lambang
              pertanyaan = get_result.nama
              Ramdani.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
              tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
})
              await sleep(30000)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakimia[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
}
              gameAdd(sender, glimit)
              break
       case 'tebakbendera':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.flag
              Ramdani.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}
              gameAdd(sender, glimit)
              break
       case 'susunkata':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/susunkata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              Ramdani.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
}
              gameAdd(sender, glimit)
              break
       case 'asahotak':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/asahotak?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.pertanyaan
              Ramdani.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}
              gameAdd(sender, glimit)
              break
       case 'caklontong':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/caklontong2?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Ramdani.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
       case 'slot':
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
       case 'suit': //nyolong dari zenz
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
//TOLS MENU
case 'ssweb':
case 'ssurl':
case 'sslink':
case 'ss':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply('Urlnya mana om')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
Ramdani.sendMessage(from, buff, image, {quoted: froxx, caption : teks})
break
            case 'ssweb2':
            case 'ssurl2':
            case 'sslink2':
            case 'ss2':
            if (!isRegist) return reply(mess.daftar)
            if (isBanned) return reply(mess.banned)
            if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} https://google.com*`)                  
            reply(mess.wait)
            anu = await getBuffer(`https://hardianto.xyz/api/tools/ssweb?url=${args.join(' ')}&apikey=hardianto`)
            Ramdani.sendMessage(from, anu, image, {caption: `BERHASIL KAK\n\nPlease Support *Aprilia*`, quoted: mek})
            break
	        case 'encimg':
		    case 'encfoto':
            if (!isRegist) return reply (mess.daftar)
            if (isBanned) return reply (mess.banned)
		    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
			reply(mess.wait)
			await encimg(media, {lang: 'eng+ind', oem: 1, psm: 3})
			.then(teks => {
			reply(teks.trim())
			fs.unlinkSync(media)
			})
			.catch(err => {
			reply(err.message)
		    fs.unlinkSync(media)
			})
					} else {
						reply('Foto aja mas')
					}
					break
default:
if (budy.includes(`Assalamualaikum`)) {
Ramdani.sendMessage(from, 'Waalaikumsalam', text, {quoted: fakeitem})
                  }
if (budy.includes(`kontol`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`memek`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`anjg`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`Anjg`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`tai`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`Asu`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`asu`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`hai`)) {
Ramdani.sendMessage(from, 'Hai Juga', text, {quoted: fakeitem})
                  }
if (budy.includes(`stres`)) {
Ramdani.sendMessage(from, 'Lu Yang Stres', text, {quoted: fakeitem})
                  }
if (budy.includes(`??`)) {
Ramdani.sendMessage(from, 'Larii Cuk Ada Batu!!', text, {quoted: fakeitem})
                  }
if (budy.includes(`Bot`)) {
Ramdani.sendMessage(from, 'iya? Saya Bot, Ada Yang Bisa Saya Bantu?', text, {quoted: fakeitem})
                  }
if (budy.includes(`bot`)) {
Ramdani.sendMessage(from, 'iya? Saya Bot, Ada Yang Bisa Saya Bantu?', text, {quoted: fakeitem})
                  }
if (budy.includes(`Tes`)) {
Ramdani.sendMessage(from, 'Hmmm', text, {quoted: fakeitem})
                  }
}
if (budy.startsWith('x')){
try {
return Ramdani.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'WhatsApp', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}
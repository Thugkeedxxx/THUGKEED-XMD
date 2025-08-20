const settings = require("../settings");

function runtime(seconds) {
    seconds = Number(seconds);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${d} days ${h} hrs ${m} mins ${s} secs`;
}

async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `🗽 *${runtime(process.uptime())}*`;

        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: false,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363419358956162@g.us',
                    newsletterName: 'Thugkeed-xmd',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });

    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: '❌ An error occurred: ' + error.message }, { quoted: message });
    }
}

module.exports = aliveCommand;

const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, { small: true }); // Display the QR code in terminal
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    const text = msg.body.toLowerCase();

    // Check if the message is one of the salutation keywords
    if (['hi', 'hey', 'mambo', 'habari', 'kozi', 'hacking'].includes(text)) {
        const welcomeMessage = `
        Karibu KADILI TECH COURSE ishi kidigitari nasi! 😃

        Hizi ni kozi tunazozitoa:
        1️⃣ Jinsi ya kutengeneza WhatsApp bot kupitia GitHub + Heroku 📦
        2️⃣ Nunua project ya website 💻
        3️⃣ Kozi ya kutengeneza mfumo wa kuboost social media 📱
        4️⃣ Jinsi ya kupata VPS ya bure kwa AWS ☁️
        5️⃣ TikTok strategy kupata followers zaidi 📈
        6️⃣ Jinsi ya kupiga OS kwenye PC (Windows, Ubuntu, Kali Linux) 🖥️
        7️⃣ Kutengeneza AI Chatbot kwa WhatsApp 🤖
        8️⃣ Blogger full course + Adsense tutorial katika Blogger na domain connection 🌐
        9️⃣ Kupata pesa mtandaoni 💸
        🔟 Hacking 🧑‍💻
        1️⃣1️⃣ About Us ℹ️
        1️⃣2️⃣ Contact Us 📞

        Chagua namba ya kozi unayotaka, kwa mfano, '1' kwa kozi ya WhatsApp bot.
        `;

        msg.reply(welcomeMessage);
    } 
    else if (text === '1') {
        msg.reply(`
        Kozi ya 1️⃣: Jinsi ya kutengeneza WhatsApp bot kupitia GitHub + Heroku 📦
        Maelezo: Katika kozi hii, utajifunza jinsi ya kutengeneza bot ya WhatsApp kwa kutumia GitHub na ku-deploy kupitia Heroku.
        
        Bei: Tsh 8,000 💰

        Ili kupata PDF ya kozi hii, tafadhali tumia namba ya malipo: 0618240534
        `);
    } 
    else if (text === '2') {
        msg.reply(`
        Kozi ya 2️⃣: Nunua project ya website 💻
        Hapa unapata:
        - Food Delivery Source Code 🍕
        - Personal Portfolio Source Code 👨‍💻
        - Course Seller Source Code 📚
        - Ecommerce Source Code 🛒

        Ili kupata project yoyote, tafadhali tumia namba ya malipo: 0618240534
        `);
    } 
    else if (text === '3') {
        msg.reply(`
        Kozi ya 3️⃣: Kozi ya kutengeneza mfumo wa kuboost social media 📱
        Maelezo: Kozi hii inakufundisha jinsi ya kuboost social media accounts zako na kupata followers wengi.
        
        Bei: Tsh 8,000 💰

        Ili kupata PDF ya kozi hii, tafadhali tumia namba ya malipo: 0618240534
        `);
    } 
    else if (text === '4') {
        msg.reply(`
        Kozi ya 4️⃣: Jinsi ya kupata VPS ya bure kwa AWS ☁️
        Maelezo: Kozi hii inakufundisha jinsi ya kupata VPS ya bure kupitia AWS kwa ajili ya matumizi yako ya biashara au maendeleo.

        Bei: Tsh 8,000 💰

        Ili kupata PDF ya kozi hii, tafadhali tumia namba ya malipo: 0618240534
        `);
    } 
    else if (text === '5') {
        msg.reply(`
        Kozi ya 5️⃣: TikTok strategy kupata followers zaidi 📈
        Maelezo: Kozi hii inakufundisha mbinu na mikakati ya kupiga hatua kwenye TikTok na kupata followers wengi.

        Bei: Tsh 8,000 💰

        Ili kupata PDF ya kozi hii, tafadhali tumia namba ya malipo: 0618240534
        `);
    } 
    else if (text === '6') {
        msg.reply(`
        Kozi ya 6️⃣: Jinsi ya kupiga OS kwenye PC (Windows, Ubuntu, Kali Linux) 🖥️
        Maelezo: Kozi hii inakufundisha jinsi ya kusimamia na kupiga OS kwenye kompyuta yako.

        Bei: Tsh 8,000 💰

        Ili kupata PDF ya kozi hii, tafadhali tumia namba ya malipo: 0618240534
        `);
    } 
    else if (text === '7') {
        msg.reply(`
        Kozi ya 7️⃣: Kutengeneza AI Chatbot kwa WhatsApp 🤖
        Maelezo: Kozi hii inakufundisha jinsi ya kutengeneza chatbot ya AI kwa WhatsApp.

        Bei: Tsh 8,000 💰

        Ili kupata PDF ya kozi hii, tafadhali tumia namba ya malipo: 0618240534
        `);
    } 
    else if (text === '8') {
        msg.reply(`
        Kozi ya 8️⃣: Blogger full course + Adsense tutorial katika Blogger na domain connection 🌐
        Maelezo: Kozi hii inakufundisha jinsi ya kuanzisha blog na kutumia Adsense kwa mapato.

        Bei: Tsh 8,000 💰

        Ili kupata PDF ya kozi hii, tafadhali tumia namba ya malipo: 0618240534
        `);
    } 
    else if (text === '9') {
        msg.reply(`
        Kozi ya 9️⃣: Kupata pesa mtandaoni 💸
        Maelezo: Kozi hii inakufundisha njia mbalimbali za kupata pesa mtandaoni kwa kutumia mbinu tofauti.

        Bei: Tsh 8,000 💰

        Ili kupata PDF ya kozi hii, tafadhali tumia namba ya malipo: 0618240534
        `);
    } 
    else if (text === '10') {
        msg.reply(`
        Kozi ya 🔟: Hacking 🧑‍💻
        Maelezo: Kozi hii inakufundisha misingi ya hacking na jinsi ya kufanya penetration testing.

        Bei: Tsh 8,000 💰

        Ili kupata PDF ya kozi hii, tafadhali tumia namba ya malipo: 0618240534
        `);
    } 
    else if (text === '11') {
        msg.reply(`
        1️⃣1️⃣: About Us ℹ️
        BOT hili limetengenezwa na kadili Technology kwa madhumuni yakufundisha na kutoa mafunzo juu ya vtu vyakimtandao kwa gharama nafuu.

        Disclaimer: Kozi hizi ni kwa madhumuni ya kujifunza tu, na hatufanyi kazi ya kuhalalisha matumizi ya hacking kwa njia zisizo halali.
        `);
    } 
    else if (text === '12') {
        msg.reply(`
        1️⃣2️⃣: Contact Us 📞
        Maelezo: Tafadhali wasiliana na sisi kupitia namba hii: 0618240534 kwa maswali yoyote kuhusu kozi na huduma zetu.

        Pia, unaweza kutuma ujumbe kwa [email@example.com] kwa maswali mengine.
        `);
    }
});

client.initialize();

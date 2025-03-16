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
         *Kozi ya 1️⃣: Jinsi ya kutengeneza WhatsApp bot kupitia GitHub + Heroku* 📦  

Katika kozi hii, utajifunza mchakato wa kutengeneza bot ya WhatsApp kwa kutumia *GitHub* kama sehemu ya kuhifadhi na kudhibiti code, pamoja na *Heroku* kwa ajili ya ku-deploy bot yako mtandaoni bila hitaji la server ya kibinafsi.  

Vitu Vinavyohitajika 🛠️  
✔ *Akaunti ya GitHub*– Hii itakusaidia kuhifadhi na kusimamia project yako.   
✔ *Heroku Account* – Mahali pa ku-host bot yako ili ifanye kazi moja kwa moja.   
✔ *Kadi ya malipo* – Ili kuwezesha baadhi ya huduma muhimu kwenye Heroku.  
✔ *Repo ya Bot* – Inahitaji kuwa na files maalum zinazohusika na utendaji wa bot.  
✔ *Baileys Library* – Hili ni moja ya maktaba muhimu zinazotumika kwa WhatsApp bot.  
✔ *Session ID* – Hii ni muhimu kwa bot yako ili iweze kuwasiliana na WhatsApp.  

 Mambo Utakayojifunza 📚  
🔹 Jinsi ya kuandaa na kuunganisha repo kwenye GitHub.  
🔹 Namna ya kuunganisha na kutumia Baileys kwa WhatsApp bot.  
🔹 Njia ya kupata Session ID kwa bot yako.  
🔹 Jinsi ya kuweka mfumo wa kujibu meseji kulingana na input ya mtumiaji.  
🔹 Hatua za mwisho za kudeploy bot yako kwenye Heroku na kuiendesha 24/7.  

Ili kupata maelezo yote kwa undani pamoja na hatua kwa hatua kwenye PDF, LIPIA *Tsh 10,000* kupitia namba ya malipo 0618240534.  

Baada ya kulipia, tuma ujumbe wenye neno *"Nimeilipia"*, na utapokea PDF yako yenye mwongozo kamili.
        `);
    } 
    else if (text === '2') {
        msg.reply(`
        kozi ya 2️⃣ nunua project ya website  

badala ya kuanza kutoka sifuri na kuandika kila mstari wa code kwa mkono unaweza kutumia *website source code* iliyokwisha tengenezwa tayari na kuibadilisha kulingana na mahitaji yako hii inakuwezesha kuwa na website yako kikamilifu ndani ya muda mfupi bila kuhangaika na coding nyingi  

hapa unapata aina nne za *website source code* ambazo unaweza kuzitumia moja kwa moja  

food delivery source code 🍕 hii ni kwa wale wanaotaka kuanzisha biashara ya chakula mtandaoni inakuwezesha kuwa na mfumo wa kupokea na kusimamia oda za wateja  

personal portfolio source code 👨‍💻 ikiwa wewe ni developer designer au freelancer unahitaji portfolio ya kitaalamu source code hii inakupa msingi wa website ya kutangaza kazi zako  

course seller source code 📚 ikiwa unataka kuuza kozi mtandaoni hii inakuwezesha kuwa na mfumo wa ku-upload na kuuza masomo kwa wanafunzi  

ecommerce source code 🛒 kwa wale wanaotaka kuanzisha duka la mtandaoni hii source code inakuwezesha kuuza bidhaa kwa urahisi huku ukiwa na mfumo wa kusimamia order na malipo  

kila *website source code* inakuja na muundo wa kisasa unaoweza kubadilishwa kulingana na mahitaji yako unachohitaji ni kubadilisha jina picha na maelezo mengine muhimu kisha website yako inakuwa tayari  

bei ya *website source code* ni tsh 30000 malipo yanafanyika kupitia namba **0618240534**  

baada ya kulipia tuma ujumbe wenye neno *nimeilipia* na *utapokea file lako* mara moja
        `);
    } 
    else if (text === '3') {
        msg.reply(`
        kozi ya 3️⃣ kozi ya kutengeneza mfumo wa kuboost social media  

hii ni kozi maalum inayokufundisha jinsi ya kutengeneza *mfumo wa kuboost social media* kwa kutumia njia za kisasa mfumo huu unakupa uwezo wa kuongeza followers likes views na engagement kwa akaunti yoyote ya mitandao ya kijamii kama *instagram facebook tiktok na youtube*  

badala ya kutumia pesa nyingi kununua followers au kutumia muda mwingi kutafuta njia za kuongeza reach unaweza kutumia mfumo huu wenye automation ili kufanya kazi kwa haraka na kwa ufanisi  

faida za kuwa na *mfumo wa kuboost social media*  

unaleta wateja wengi zaidi ikiwa una biashara mtandaoni watu wengi wanapenda kununua kutoka kwa akaunti zenye followers wengi na engagement kubwa  

unapata views zaidi ikiwa ni youtube tiktok au reels mfumo huu utakusaidia kupata views nyingi na kuongezeka kwa reach ya maudhui yako  

unaweza kuuza huduma za boosting badala ya kutumia mfumo huu kwa akaunti yako pekee unaweza kuuza huduma kwa wengine na kutengeneza kipato cha ziada  

unajifunza automation ya social media kozi hii inakupa ujuzi wa kutengeneza mfumo unaojiendesha ambao unaweza kutumiwa muda wowote bila wewe kuwepo  

bei ya kozi hii ni *tsh 35000* malipo yanafanyika kupitia namba **0618240534**  

baada ya kulipia tuma ujumbe wenye neno *nimeilipia* na *utapokea pdf yako* yenye maelezo yote kwa undani
        `);
    } 
    else if (text === '4') {
        msg.reply(`
        kozi ya 4️⃣ jinsi ya kupata vps ya bure kwa aws  

katika kozi hii utajifunza jinsi ya kupata *vps ya bure* kupitia *aws* na kuitumia kwa matumizi mbalimbali kama hosting ya websites deployment ya bots au hata majaribio ya miradi yako ya maendeleo ya programu  

badala ya kulipia server ghali kila mwezi unaweza kutumia *vps ya bure* ambayo inapatikana kwa muda maalum bila gharama yoyote ikiwa utaitumia vizuri hii inaweza kuwa suluhisho bora kwa wale wanaoanza biashara mtandaoni au wanaojifunza jinsi ya kutumia vps  

faida za kuwa na *vps ya bure* kwa aws  

unahost websites zako mwenyewe bila kutumia shared hosting unaweza kuweka website zako kwenye vps yako bila kujali vikwazo vya shared hosting  

unaendesha bots zako bila kuzima ikiwa unafanya automation kama whatsapp bots telegram bots au miradi mingine ya automation vps hukuruhusu kuendesha kila kitu bila kuzima  

unahifadhi data zako kwa usalama vps inakupa uhuru wa kuhifadhi data zako bila kutegemea third-party services ambazo mara nyingine zinaweza kuwa na masharti magumu  

unajifunza linux server management ikiwa unataka kuwa system administrator au kujifunza jinsi ya kusimamia server mwenyewe hii ni nafasi nzuri ya kufanya mazoezi bila gharama  

bei ya kozi hii ni *tsh 20000* malipo yanafanyika kupitia namba **0618240534**  

baada ya kulipia tuma ujumbe wenye neno *nimeilipia* na *utapokea pdf yako* yenye maelezo yote kwa undani
        `);
    } 
    else if (text === '5') {
        msg.reply(`
        kozi ya 5️⃣ tiktok strategy kupata followers zaidi 📈  

je unataka akaunti yako ya *tiktok* iwe na *followers wengi* kwa muda mfupi bila kutumia njia zisizo halali kozi hii inakufundisha mbinu za kitaalamu zinazotumiwa na *influencers* wengi ili kuongeza followers views na engagement kwenye tiktok kwa haraka  

✅ jinsi algorithm ya tiktok inavyofanya kazi  
✅ mbinu za kuingia kwenye *for you page* (fyp) kwa urahisi  
✅ aina za maudhui yanayopendwa zaidi na njia za kuyatengeneza  
✅ jinsi ya kutumia *hashtags* na *trending sounds* kwa faida yako  
✅ muda sahihi wa kupost ili kufikia watu wengi zaidi  
✅ mbinu za kuongeza *watch time* na kufanya video zako zisambae zaidi  
✅ njia za *monetization* ili kupata pesa kupitia tiktok  

faida za kutumia mbinu hizi  

🔥 unapata followers wengi bila kutumia pesa  
📊 engagement ya akaunti yako inaongezeka haraka  
💰 unapata fursa za matangazo na ushirikiano na brands  
🚀 akaunti yako inakuwa na uwezekano mkubwa wa kuwa viral  

bei ya kozi hii ni *tsh 8000* malipo yanafanyika kupitia namba **0618240534**  

baada ya kulipia tuma ujumbe wenye neno *nimeilipia* na *utapokea pdf yako* yenye maelezo yote kwa undani
        `);
    } 
    else if (text === '6') {
        msg.reply(`
        kozi ya 6️⃣ jinsi ya kupiga os kwenye pc windows ubuntu kali linux 🖥️  

ikiwa unataka kujifunza jinsi ya *kufanya installation ya operating system* kwenye pc yako kwa usahihi hii ni kozi sahihi kwako utaelewa hatua kwa hatua jinsi ya ku-install windows ubuntu na kali linux bila matatizo  

🔹 jinsi ya kuandaa *bootable usb* kwa ajili ya installation  
🔹 hatua za kufuata ili *kuseti bios settings* kwa usahihi  
🔹 jinsi ya kugawa *partitions* ili kuepuka kupoteza data zako  
🔹 installation ya *windows* kwa njia rahisi na salama  
🔹 jinsi ya kuinstall *ubuntu linux* kwa wale wanaotaka kutumia os ya bure  
🔹 hatua za kuinstall *kali linux* kwa wale wanaopenda ethical hacking na penetration testing  
🔹 njia za kutatua matatizo yanayotokea wakati wa installation  

faida za kujua kupiga os kwenye pc  

⚡ unaweza kusuluhisha matatizo ya pc yako bila kumtegemea fundi  
💻 unapata uhuru wa kuchagua os inayofaa kulingana na matumizi yako  
🔄 unaweza kujaribu os tofauti bila kuhatarisha data zako  
🛠️ unajifunza skills muhimu kwa ajili ya kazi za *it support* na *system administration*  

bei ya kozi hii ni *tsh 12000* malipo yanafanyika kupitia namba **0618240534**  

baada ya kulipia tuma ujumbe wenye neno *nimeilipia* na *utapokea pdf yako* yenye maelezo yote kwa undani
        `);
    } 
    else if (text === '7') {
        msg.reply(`
        kozi ya 7️⃣ kutengeneza ai chatbot kwa whatsapp 🤖  

unataka kutengeneza *ai chatbot* inayoweza kujibu meseji kwa akili bandia kwenye whatsapp hii ni kozi maalum inayokufundisha hatua kwa hatua jinsi ya kutengeneza chatbot inayoweza kuzungumza kujibu maswali na kusaidia watumiaji kwa njia ya kisasa  

🔹 jinsi ya kuunganisha *ai models* kwenye whatsapp bot  
🔹 kutengeneza chatbot inayojifunza kutokana na mazungumzo  
🔹 kutumia *natural language processing (nlp)* kwa chatbot yako  
🔹 jinsi ya kuunganisha chatbot na *database* kwa ajili ya kuhifadhi data  
🔹 kutengeneza *auto-reply system* inayofanya kazi kwa akili bandia  
🔹 jinsi ya kuhost bot yako kwenye *vps* au *heroku*  

faida za kuwa na *ai chatbot* kwenye whatsapp  

🚀 unapata chatbot inayoweza kusaidia wateja bila wewe kuwepo  
💰 unaweza kuuza huduma za chatbot kwa biashara na kupata kipato  
⚡ bot yako inajifunza na kuboresha majibu yake kadri inavyotumika  
🛠️ unajifunza skills za *artificial intelligence* na *machine learning*  

bei ya kozi hii ni *tsh 50000* malipo yanafanyika kupitia namba **0618240534**  

baada ya kulipia tuma ujumbe wenye neno *nimeilipia* na *utapokea pdf yako* yenye maelezo yote kwa undani
        `);
    } 
    else if (text === '8') {
        msg.reply(`
        **kozi ya 8️⃣ blogger full course + adsense tutorial katika blogger na domain connection 🌐**  

je unataka kutengeneza blog inayoweza kukuingizia pesa kupitia *google adsense* kozi hii itakufundisha kila kitu kuanzia kuanzisha blog mpaka kuunganisha na *adsense* kwa ajili ya mapato  

📌 jinsi ya kufungua akaunti ya *blogger* na kuandaa settings zake  
📌 kuchagua na kurekebisha *template* nzuri kwa blog yako  
📌 mbinu za kuandika *makala zinazovutia* na kupata wasomaji wengi  
📌 jinsi ya kuunganisha *custom domain* kwa blog yako kwa urahisi  
📌 hatua za *kutuma maombi ya adsense* na kuhakikisha unakubaliwa  
📌 njia za kuongeza *traffic* na mapato yako kupitia blog  
📌 jinsi ya kutatua changamoto kama *adsense disapproval*  

**faida za kuwa na blog yenye adsense**  

💰 *unapata kipato passively* bila kufanya kazi kila siku  
🚀 unaweza kutumia blog kwa *affiliate marketing* na matangazo  
📈 blog yako inaweza kuwa *business kubwa* ikiwa na wasomaji wengi  
🌎 unaweza kufikia wasomaji kutoka sehemu mbalimbali duniani  

bei ya kozi hii ni *tsh 15000* malipo yanafanyika kupitia namba **0618240534**  

baada ya kulipia tuma ujumbe wenye neno *nimeilipia* na *utapokea pdf yako* yenye maelezo yote kwa undani
        `);
    } 
    else if (text === '9') {
        msg.reply(`
        **kozi ya 9️⃣ kupata pesa mtandaoni 💸**  

je unatafuta njia za *kupata kipato mtandaoni* kwa kutumia simu au kompyuta yako hii ni kozi maalum inayokufundisha mbinu bora za kutengeneza pesa bila kuhitaji mtaji mkubwa  

📌 jinsi ya *kuuza huduma* kama freelancer kwa kutumia websites kama fiverr na upwork  
📌 kutengeneza *website au blog* inayoweza kukuingizia mapato kupitia matangazo  
📌 mbinu za kufanya *affiliate marketing* na kupata pesa kwa kuuza bidhaa za watu wengine  
📌 jinsi ya kutumia *dropshipping* kuuza bidhaa bila kuwa na stock  
📌 kutumia *social media monetization* kama youtube tiktok na facebook kupata kipato  
📌 kuuza *digital products* kama ebooks templates na courses mtandaoni  
📌 jinsi ya kufanya *arbitrage trading* na kupata faida kutoka kwenye tofauti ya bei  

**faida za kujua jinsi ya kupata pesa mtandaoni**  

💰 unaweza *kujiajiri* na kuendesha biashara yako bila bosi  
🚀 unafanya kazi *kutoka popote* bila kuwa na ofisi maalum  
📈 kipato chako kinaweza *kuongezeka kadri unavyojifunza mbinu mpya*  
⚡ hauhitaji mtaji mkubwa kuanza njia nyingi ni bure  

bei ya kozi hii ni *tsh 15000* malipo yanafanyika kupitia namba **0618240534**  

baada ya kulipia tuma ujumbe wenye neno *nimeilipia* na *utapokea pdf yako* yenye maelezo yote kwa undani
        `);
    } 
    else if (text === '10') {
        msg.reply(`
        **kozi ya 🔟 hacking 🧑‍💻**  

hii ni kozi maalum kwa wale wanaotaka kujifunza *misingi ya hacking* na jinsi ya kufanya *penetration testing* kwa njia salama na ya kimaadili ethical hacking inakupa ujuzi wa kusuluhisha matatizo ya usalama wa mifumo  

🔹 jinsi ya kutumia *kali linux* kwa ajili ya ethical hacking  
🔹 mbinu za kufanya *penetration testing* kwenye mifumo tofauti  
🔹 kutumia *metasploit framework* kwa ajili ya kuchunguza udhaifu wa mifumo  
🔹 jinsi ya kufanya *wireless network hacking* na kuelewa usalama wa wifi  
🔹 kutumia *phishing techniques* kuelewa jinsi hackers wanavyopata login credentials  
🔹 misingi ya *sql injection* na jinsi ya kuilinda database yako  
🔹 jinsi ya kufanya *social engineering* na kuelewa mbinu zinazotumiwa kudanganya watu  

**hacking zinazohitajika sana na watu**  

💻 **wifi hacking** – watu wanataka kujua jinsi ya kupata na kulinda password za wifi  
🔑 **password cracking** – jinsi ya kupata au kulinda password za akaunti zao  
📡 **network penetration testing** – jinsi ya kuscan network na kupata udhaifu  
📲 **mobile hacking** – jinsi ya kupata data kutoka kwenye simu kwa njia tofauti  
🌐 **website hacking** – jinsi ya kutambua na kuziba udhaifu wa websites  
🛡️ **cybersecurity awareness** – kujifunza jinsi ya kujikinga na mashambulizi mtandaoni  

**faida za kujifunza hacking**  

🛠️ unapata ujuzi wa *kusuluhisha matatizo ya usalama* wa mifumo  
💰 unaweza kufanya kazi kama *cybersecurity expert* na kupata kipato kizuri  
🚀 unajifunza jinsi ya *kujikinga na wadukuzi* wanaoweza kuiba data zako  
⚡ hacking ni *moja ya skills zenye mahitaji makubwa* duniani  

bei ya kozi hii ni *tsh 50000* malipo yanafanyika kupitia namba **0618240534**  

baada ya kulipia tuma ujumbe wenye neno *nimeilipia* na *utapokea pdf yako* yenye maelezo yote kwa undani
        `);
    } 
    else if (text === '11') {
        msg.reply(`
        **taarifa zako zinazojulikana**  

1️⃣ **kozi zako**  
   - Unatengeneza na kuuza kozi mbalimbali mtandaoni, hasa zinazohusu *web development*, *android development*, *hacking*, *social media boosting*, na *AI* chatbots.  
   - Kozi zako zimejikita katika kuwafundisha watu stadi mbalimbali za kiufundi, kwa mfano kutengeneza *WhatsApp bots*, kupata pesa mtandaoni, kutengeneza *AI Chatbots*, na kutumia *VPS*.

2️⃣ **business yako**  
   - Unatoa *whatsapp bots* na huduma za *freelance development* zinazohusiana na kutengeneza bots, website, na ku-set up majaribio ya hacking.  
   - Unatumia *GitHub*, *Heroku*, na *VPS* kwa ajili ya deployment na hosting ya bots zako.

3️⃣ **platform zako**  
   - Unatumia *Blogger* na *YouTube* kwa ajili ya kuuza kozi zako na kutoa maelekezo ya kina kwa watazamaji.  
   - YouTube channel yako, **Kadili Tech**, inatoa mafunzo ya kiufundi, na blog yako inatumika kutoa huduma za kuuza kozi na tutorials.

4️⃣ **malipo**  
   - Unatumia mfumo wa malipo wa *Buy Me a Coffee* kwa baadhi ya kozi zako, na pia unatoa namba ya malipo ya *M-Pesa* kama njia ya kupata malipo kwa kozi na huduma zako.

5️⃣ **intention yako**  
   - Lengo lako ni kutoa elimu ya bure na yenye gharama nafuu kwa watu wanaotaka kujifunza na kufanikiwa mtandaoni kupitia mbinu mbalimbali za teknolojia na *digital marketing*.  
   - Unasisitiza kwenye kutoa elimu inayosaidia watu kuwa na *ufahamu wa kisasa* kuhusu *cybersecurity*, *freelancing*, *social media marketing*, na kutengeneza na ku-deploy bots.

6️⃣ **ethical approach**  
   - Unajitahidi kuhakikisha kozi zako ni za *ethically responsible* na unapinga matumizi ya hacking kwa njia zisizo halali.  
   - Unatoa elimu ya *ethical hacking* kwa madhumuni ya kuboresha usalama wa mifumo na mitandao, sio kwa matumizi ya uhalifu.

**about us**  
- **kadili technology** ni kampuni inayojitolea kutoa mafunzo bora na ya kisasa kwa watu wanaotaka kujifunza na kufanikiwa mtandaoni.  
- Tunatoa huduma za mafunzo kuhusu mbinu mbalimbali za *technologies* na *digital marketing* kwa gharama nafuu.  
- Tunasisitiza kujenga ujuzi na maarifa kwa kutumia *ethical hacking* na *cybersecurity* ili kuhakikisha kwamba tunaelimisha na kutoa msaada bila kuhamasisha matumizi ya teknolojia kwa njia zisizo salama.

**disclaimer**  
- Kozi zetu ni za *kujifunza* tu, na hatufanyi kazi ya kuhalalisha matumizi ya hacking kwa njia zisizo halali.
        `);
    } 
    else if (text === '12') {
        msg.reply(`
        **1️⃣2️⃣: Contact Us 📞**

Maelezo: Tafadhali wasiliana na sisi kupitia namba hii: **0618240534** kwa maswali yoyote kuhusu kozi na huduma zetu.

Pia, unaweza kutuma ujumbe kwa **kadilidata@outlook.com** kwa maswali mengine.

*Kwa mawasiliano haraka, unaweza kutumia WhatsApp kupitia link hii:*  
[WhatsApp Contact](https://wa.me/0655126245)

**Social Media & Platforms:**
- **GitHub:** [termuxboy-255](https://github.com/termuxboy-255)
- **YouTube:** [@KADILI-MD](https://www.youtube.com/@KADILI-MD)
- **WhatsApp Channel:** [Kadili WhatsApp Channel](https://whatsapp.com/channel/0029Vb97LT4JUM2jPSokmP1q)

**Jina la Kampuni:** *KADILI TECHNOLOGY*  
**Jina la Halali:** *ABDULKADRI MUKHSIN ALLY*
        `);
    }
    else if (text === 'Nishalipia') {
      msg.reply(`
      **Ushalipia sio**
      subiri pdf yako unatumiwa sio muda...
      
      ` )
    }
});

client.initialize();

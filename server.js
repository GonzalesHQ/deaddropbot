// /*
//
// ::======================::
//
//     deaddropbot v0.1
//
// ::======================::
//
//
// -- Telegram bot - @DeadDropbot
//
// -- This bot serves DNM and BTC info
// -- (x_x)
// */
// // INSTRUCTIONS
// // Start node server with 'node server.js'
// // deaddropbot should greet you in the terminal upon successfull launch
// // connect to him with https://telegram.me/deaddropbot



// var http = require('http');
// var https = require('https');
// var async = require('async');
var request = require("request");
var TelegramBot = require('node-telegram-bot-api');

var token = '161729128:AAEFCQzyAbJp65djSw-NpdVoVbcOZg0SEvc';
// Setup polling way
var bot = new TelegramBot(token, {
  polling: true
});

/////////////////////////////////////////////////// Greeting

bot.getMe().then(function(me) {
  console.log("Hi my name is %s! I'm alive!", me.username);
  var today = new Date();
  today.setHours(today.getHours());
  console.log("...been running since : " + today.toLocaleString());

  bot.sendMessage("113923797", "Que pasa Gonz! \uD83D\uDE32 I started running on " + today.toLocaleString() + ". \n Have a great night!");
});


/////////////////////////////////////////////////// VAR - URLS

var onions = ["http://pwoah7foa6au2pul.onion/register.php?aff=41211", //dream - 0
  "http://outfor6jwcztwbpd.onion/indxx1.php", //outlaw - 1
  "http://nucleuspf3izq7o6.onion/", //nucleus - 2
  "http://pushingtabu7itqj.onion"
]; //gamma - 3

var urls = [
  'https://dnstats.net/api.php?market=Dream+Market',
  'https://dnstats.net/api.php?market=Outlaw+Market',
  'https://dnstats.net/api.php?market=Nucleus+Market',
  'https://dnstats.net/api.php?market=Gammagoblin+Pushing+Taboo',
];



///////////////////////////////////////////////// Matches /start
bot.onText(/\/start/, function(msg) {

  var chatId = msg.chat.id;
  var resp = "Hi, I'm DeadDropBot. (v0.1)" +
    "\n BTC course and DNM uptime checker bot at your service";
  var next = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['/markets'],
        ['/euro'],
        ['/dollar'],
        ['/help']
      ]
    })
  };

  setTimeout(function() {
    bot.sendMessage(chatId, resp);
  }, 900);
  setTimeout(function() {
    bot.sendMessage(chatId, 'Check out my options:', next);
  }, 3500);
});


/////////////////////////////////////////////////// Matches /help
bot.onText(/\/help/ || "help", function(msg) {
  var chatId = msg.chat.id;
  // console.log(chatId);

  var text = "Need help? DeadDropBot will react to these commands:" +
    "\n /markets or /allmarkets - (Check if a DNM is up)" +
    "\n /euro - (1 BTC = xx EUR)" +
    "\n /dollar - (1 BTC = xx USD)" +
    "\n /usd24-  (24h avg btc to usd)" +
    " \n /eur24 - (24h avg btc to eur)" +
    "\n /help - (displays this msg)" +
    "\n /start - (displays bot options) ";
  setTimeout(function() {
    bot.sendMessage(chatId, text);
  }, 2000);

});

/////////////////////////////////////////////////// Matches /euro
bot.onText(/\/euro/, function(msg) {
  var chatId = msg.chat.id;
  // console.log(chatId);

  var url = "https://api.bitcoinaverage.com/ticker/global/EUR/last";

  request(url, function(error, response, body) {
    setTimeout(function() {
      if (body < 320) {
        bot.sendMessage(chatId, "1 BTC = € " + body + "\n(...Pssst ..I'd buy if I were you!)");
      } else {
        bot.sendMessage(chatId, "1 BTC = € " + body);
      }
    }, 1300);
  });
});


/////////////////////////////////////////////////// Matches /dollar
bot.onText(/\/dollar/, function(msg) {
  var chatId = msg.chat.id;
  // console.log(chatId);

  var url = "https://api.bitcoinaverage.com/ticker/global/USD/last";

  request(url, function(error, response, body) {
    setTimeout(function() {
      bot.sendMessage(chatId, "1 BTC = $ " + body);
    }, 1200);
  });
});


/////////////////////////////////////////////////// Matches /eur24
bot.onText(/\/euro24/, function(msg) {
  var chatId = msg.chat.id;
  // console.log(chatId);
  var url = "https://api.bitcoinaverage.com/ticker/global/EUR/24h_avg";
  request(url, function(error, response, body) {
    setTimeout(function() {
      bot.sendMessage(chatId, "1 BTC = € " + body);
    }, 1200);
  });
});


/////////////////////////////////////////////////// Matches /usd24
bot.onText(/\/usd24/, function(msg) {
  var chatId = msg.chat.id;
  //  console.log(chatId);

  var url = "https://api.bitcoinaverage.com/ticker/global/USD/24h_avg";
  setTimeout(function() {
    request(url, function(error, response, body) {
      bot.sendMessage(chatId, "1 BTC = $ " + body);
    });
  }, 1200);

});


/////////////////////////////////////////////////// Matches /dream
bot.onText(/\/dream/, function(msg) {
  var chatId = msg.chat.id;
  // console.log(chatId);

  setTimeout(function() {
    getStats(urls[0], chatId, onions[0]);
  }, 1200);
});


/////////////////////////////////////////////////// Matches /outlaw
bot.onText(/\/outlaw/, function(msg) {
  var chatId = msg.chat.id;
  // console.log(chatId);
  setTimeout(function() {
    getStats(urls[1], chatId, onions[1]);
  }, 1200);
});

/////////////////////////////////////////////////// Matches /nucleus
bot.onText(/\/nucleus/, function(msg) {
  var chatId = msg.chat.id;
  //  console.log(chatId);

  setTimeout(function() {
    getStats(urls[2], chatId, onions[2]);
  }, 1200);
});

/////////////////////////////////////////////////// Matches /gamma
bot.onText(/\/gamma/, function(msg) {
  var chatId = msg.chat.id;
  //  console.log(chatId);
  var onion = "http://pushingtabu7itqj.onion";
  setTimeout(function() {
    getStats(urls[3], chatId, onions[3]);
  }, 1200);
});


/////////////////////////////////////////////////// Matches /markets
bot.onText(/\/markets/, function(msg) {
  var chatId = msg.chat.id;
  // console.log(chatId);
  var opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['/dream'],
        ['/outlaw'],
        ['/gamma'],
        ['/nucleus'],
        ['close']
      ]
    })
  };
  setTimeout(function() {
    bot.sendMessage(chatId, 'Choose a market', opts);
  }, 2000);
});



/////////////////////////////////////////////////// Matches /allmarkets
bot.onText(/\/allmarkets/, function(msg) {
  var chatId = msg.chat.id;
  // console.log(chatId);



  setTimeout(function() {
    for (var i = 0; i < urls.length; i++) {
      getStats(urls[i], chatId, onions[i]);
    }
  }, 1200);
});


/////////////////////////////////////////////////// Matches close (to close the custom keyboard)
bot.onText(/close/, function(msg) {
  var chatId = msg.chat.id;
  //  console.log(chatId);

  var opts = {
    reply_markup: JSON.stringify({
      hide_keyboard: true //hides keyboard when user receives message
    })
  };
  bot.sendMessage(chatId, "where da ballaz at", opts);
});


/////////////////////////////////////////////////// Matches /dev
bot.onText(/\/dev/ || "help", function(msg) {
  var chatId = msg.chat.id;
  console.log(msg);

  var text = "Need help? DeadDropBot will react to these commands:" +
    "\n /markets or /allmarkets - (Check if a DNM is up)" +
    "\n /euro - (1 BTC = xx EUR)" +
    "\n /dollar - (1 BTC = xx USD)" +
    "\n /usd24-  (24h avg btc to usd)" +
    " \n /eur24 - (24h avg btc to eur)" +
    "\n /help - (displays this msg)" +
    "\n /start - (displays bot options) ";
  setTimeout(function() {
    bot.sendMessage(chatId, "u sent this : \n" + msg.text);
  }, 2000);

});

/////////////////////////////////////////////////// Matches /euro <number>

bot.onText(/(\/toeuro [0-9.09]+)/, function(msg) {
  var chatId = msg.chat.id;

  var input = msg.text.replace("/toeuro ", "");

  var euroUrl = "https://blockchain.info/tobtc?currency=EUR&value=" + input;

  request(euroUrl, function(error, response, body) {
    answer = body;
  });

  setTimeout(function() {
    bot.sendMessage(chatId, input + " eur is " + answer + " BTC.");
  }, 2000);

});

/////////////////////////////////////////////////// Matches /usd <number>

bot.onText(/(\/tousd [0-9.09]+)/, function(msg) {
  var chatId = msg.chat.id;

    var input = msg.text.replace("/tousd ", "");
    var usdUrl = "https://blockchain.info/tobtc?currency=USD&value=" + input;

    request(usdUrl, function(error, response, body) {
      answer = body;
    });

    setTimeout(function() {
      bot.sendMessage(chatId, input + " usd is " + answer + " BTC.");
    }, 2000);

});

///////////////////////////////////////////////// Functions

function getStats(url, chatid, onion) {
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var res = JSON.parse(body);
      var txt = url.substr(35).replace(/\+/g, " ") +
        " is " +
        res.status.toString().toUpperCase() +
        "\n URL on jan 2016 - " + onion;
      console.log(txt);
      bot.sendMessage(chatid, txt);
    }
  });
}


function toBtc(amount, currency) {

  var answer;

  switch (currency) {
    case "eur":
      var euroUrl = "https://blockchain.info/tobtc?currency=EUR&value=" + amount;
      request(euroUrl, function(error, response, body) {
        answer = body;
      });
      break;

    case "usd":
      var usdUrl = "https://blockchain.info/tobtc?currency=USD&value=" + amount;
      request(usdUrl, function(error, response, body) {
        answer = body;
      });
      break;

    default:
      answer = "lol no data";
      break;
  }

  return answer;
}

// https://api.bitcoinaverage.com/ticker/global/EUR/

// {
//   "24h_avg": 351.14,
//   "ask": 350.61,
//   "bid": 350.24,
//   "last": 350.51,
//   "timestamp": "Sat, 30 Jan 2016 21:36:39 -0000",
//   "volume_btc": 7592.1,
//   "volume_percent": 12.04
// }
//


// { message_id: 782,
//   from:
//    { id: 113923797,
//      first_name: 'Dza',
//      last_name: 'L',
//      username: 'Dza_L' },
//   chat:
//    { id: 113923797,
//      first_name: 'Dza',
//      last_name: 'L',
//      username: 'Dza_L',
//      type: 'private' },
//   date: 1465051513,
//   text: '/dev',
//   entities: [ { type: 'bot_command', offset: 0, length: 4 } ] }



// setInterval(function(){ //spamming works
//   console.log("spamming in progress")
//   var chatId = "113923797";
//     bot.sendMessage(chatId, 'who said that');
//     }, 2000);



// // Matches /love
// bot.onText(/\/love/, function(msg) {
//   var chatId = msg.chat.id;
//   console.log(chatId);
//   var opts = {
//     reply_to_message_id: msg.message_id,
//     reply_markup: JSON.stringify({
//       keyboard: [
//         ['diggie jiggy'],
//         ['Gimme shelter']
//       ]
//     })
//   };

//   setTimeout(function() {
//     bot.sendMessage(chatId, 'shit', opts);
//   }, 2000);
// });


// // Any kind of message
// bot.on('message', function (msg) {
//   var chatId = msg.chat.id;
//   var fromId = msg.from.id;
//   var other = msg.text;
//   var resp   = other  + ", prick";

// setTimeout(function(){
//     bot.sendMessage(chatId, resp);
//     }, 2000);

//   bot.sendMessage(fromId, resp);
// });

// only on /start command - text message

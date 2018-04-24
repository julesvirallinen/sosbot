const LastFm = require('lastfm-njs')

module.exports = (bot) => {

console.log("sos")

const randomPuppy = require('random-puppy');
 




  bot.onText(/\/sos (.+)/, (msg, match) => {
    randomPuppy(match[1])
      .then(url => {
        bot.sendMessage(msg.chat.id, url)
    })
  })

  bot.onText(/\/recent/, (msg) => {
    const tClone = tracks.slice(0).reverse()
    bot.sendMessage(msg.chat.id, tClone.map(formatRecent).join('\n'), {
      'disable_web_page_preview': true,
      'parse_mode': 'markdown'
    })
  })


  function printRes (res) {
    if (!res || !('track' in res) || res.track.length === 0) {
      return
    }
    tracks = res.track.map(convertDate)
    if ((new Date() - tracks[0].date <= FETCH_INTERVAL) && (tracks[0].date - tracks[1].date > ONE_HOUR)) {
      announce()
    }
  }

  function printError (err) {
    console.error(err)
  }

 


}

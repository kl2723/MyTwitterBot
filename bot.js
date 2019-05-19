var Tweet = require('twit');
var config = require('./config');

var t = new Tweet(config);

/*
//Find tweets with...
 t.get('search/tweets', { q: '#blm', count: 3 }, function(err, data, response) {
   var tweets = data.statuses;
   for (var i = 0; i < tweets.length; i++){
     console.log(tweets[i].text);
   }
 })
*/


/*
//Post tweet
t.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})
*/



makeTweet();
setInterval(makeTweet, 5000)
function makeTweet(){
var twtID = Math.floor(Math.random()*100);
t.post('statuses/update', { status: '#'+twtID+ ':'+' Follow Me!!' }, function(err, data, response) {

})

}

var quoteText = "Meet the dusk";
var quoteAuthor = "Sirius, Battlerite";
var quotes = new Array();
var counter = 0;

window.onload = function() {
  requestQuote();
  writeQuote();

$('button').click(function getQuote(){
  writeQuote();
  requestQuote();
  });
};

function requestQuote(){
  var forismaticAPI = "http://api.forismatic.com/api/1.0/?method=getQuote";
  var format = "&format=json";
  var lang = "&lang=en";
  var fullRequest = forismaticAPI+format+lang;

  $.getJSON(fullRequest, function(data) {
    quotes.push({
      quoteText: data.quoteText,
      quoteAuthor: data.quoteAuthor
    });
//  console.log(quotes);
});
}

function writeQuote(){
  console.log(quotes[counter]);


//  document.getElementById("quoteText").innerHTML = quotes[counter].quoteText;
//  document.getElementById("quoteAuthor").innerHTML = quotes[counter].quoteAuthor;
//  counter++;
}

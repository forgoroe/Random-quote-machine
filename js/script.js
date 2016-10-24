var quoteText;
var quoteAuthor;
var quote = {};

window.onload = function() {
    var relaxTime = 0.1;
    $('#nextQuoteBtn').click(function() {
        requestQuote();
        var button = $(this);
        button.prop('value', relaxTime);
        button.prop('disabled', true);

        setTimeout(function() {
            button.prop('disabled', false);
        }, relaxTime * 1000);
    });

    function requestQuote() {
        var forismaticAPI = "//api.forismatic.com/api/1.0/?method=getQuote";
        var format = "&format=jsonp";
        var jsonP = '&jsonp=?';
        var lang = "&lang=en";
        var fullRequest = forismaticAPI + format + jsonP + lang;

        $.getJSON(fullRequest, function(data){
          console.log(data);
          quote = {
              quoteText: data.quoteText,
              quoteAuthor: data.quoteAuthor,
              quoteLink: data.quoteLink
          };
          displayQuote();
        });
    }

    function callback(data){
      var result = data;
      console.log(data);
    }

    function displayQuote() {
        document.getElementById("quoteText").innerHTML = quote.quoteText;
        document.getElementById("quoteAuthor").innerHTML = quote.quoteAuthor;
        document.getElementById("quoteLink").innerHTML = quote.quoteLink;
        document.getElementById("quoteLink").href = quote.quoteLink;
        document.getElementById("tweet").parentElement.href = "https://twitter.com/intent/tweet?text=" + quote.quoteText + ' - ' + quote.quoteAuthor;
    }
};

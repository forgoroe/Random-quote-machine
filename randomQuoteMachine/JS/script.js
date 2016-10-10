var quoteText;
var quoteAuthor;
var quote = {};

window.onload = function() {
    var relaxTime = 3.5;
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
        var forismaticAPI = "http://api.forismatic.com/api/1.0/?method=getQuote";
        var format = "&format=json";
        var lang = "&lang=en";
        var fullRequest = forismaticAPI + format + lang;

        $.getJSON(fullRequest, function(data) {
            quote = {
                quoteText: data.quoteText,
                quoteAuthor: data.quoteAuthor
            };
            console.log(quote);
            displayQuote(quote);
        });
    }

    function displayQuote() {
        document.getElementById("quoteText").innerHTML = quote.quoteText;
        document.getElementById("quoteAuthor").innerHTML = quote.quoteAuthor;
    }
};

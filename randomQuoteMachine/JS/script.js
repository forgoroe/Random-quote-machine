var quoteText;
var quoteAuthor;
var quote = {};

window.onload = function() {
    var relaxTime = 3;
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
                quoteAuthor: data.quoteAuthor,
                quoteLink: data.quoteLink
            };
            console.log(data);
            displayQuote(quote);
        });
    }

    function displayQuote() {
        document.getElementById("quoteText").innerHTML = quote.quoteText;
        document.getElementById("quoteAuthor").innerHTML = quote.quoteAuthor;
        document.getElementById("quoteLink").innerHTML = quote.quoteLink;
        document.getElementById("quoteLink").href = quote.quoteLink;
        document.getElementById("tweet").parentElement.href = "https://twitter.com/intent/tweet?text=" + quote.quoteText + ' - ' + quote.quoteAuthor;
    }
};

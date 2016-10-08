window.onload = function() {
    if (window.jQuery) {
        // jQuery is loaded
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }

    document.getElementById("quote").innerHTML = "Meet the dusk - Sirius, Battlerite";

    $('button').click(function(){
      var forismaticAPI = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
      $.getJSON(forismaticAPI, function(data) {
      document.getElementById("quote").innerHTML = data.quoteText + ' - ' + data.quoteAuthor;
    });
  });
}

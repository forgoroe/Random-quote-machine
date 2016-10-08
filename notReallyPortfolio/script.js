//change highlighted tab
$(".nav a").on("click", function(){
 $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

//navigation
function goToElement(elementClicked){
  var startElement = elementClicked;
  var elementToGo = '#'+ startElement.substring(0, startElement.length-4);
  
$('html, body').animate({
       scrollTop: $(elementToGo).offset().top -70
   }, 1000);
}
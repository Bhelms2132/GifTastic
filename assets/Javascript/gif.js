//--Array of strings--//
var topics = ["Carolina Panthers", "Beach", "Zakk Wylde", "Tyler Childers", "Golf", "Javascript"];
  console.log(topics);
  
//--Funtion for displaying topics data--//
function renderButtons() {
   $("#buttons-view").empty();
   //--Looping through topics array--//   
     for (var i = 0; i < topics.length; i++) {
     //--Adds button in jquery--//
       var a = $("<button>");
         a.addClass("topic");
           a.attr("data-name", topics[i]);
             a.text(topics[i]);
       //--Adds button to the html--//
         $("#buttons-view").append(a);
   }
}

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=yPggTPiRiu1TWfJN8xHwQP5AtSRuOkcl";

//--Ajax request with queryURL--//
$.ajax({
   url: queryURL,
   method: "Get"
})

//--Form function--//
$("#add-topic").on("click", function(event) {
   event.preventDefault();
//--Grabs text from the input box--//
   var topic = $("#topic-input").val().trim();
       topics.push(topic);
       renderButtons();
})
renderButtons();


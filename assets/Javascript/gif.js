//--Array of strings--//
var topics = ["Carolina Panthers", "Jocko Wilink", "Jordan B. Peterson", "jquery", "javascript"];
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

$("#add-topic").on("click", function(event) {
   event.preventDefault();
//--Grabs text from the input box--//
   var topic = $("#topic-input").val().trim();
       topics.push(topic);

       renderButtons();
})

renderButtons();
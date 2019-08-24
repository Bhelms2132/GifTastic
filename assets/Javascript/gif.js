//--Array of strings--//
var topics = ["Carolina Panthers", "Beach", "Zakk Wylde", "Tyler Childers", "Golf", "DeadPool"];
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
//--Click event listener added to buttons--//
$(document).on("click", ".topic", function(){
   console.log("button clicked");
   var topic = $(this).attr("data-name")
   var queryURL = "http:api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=yPggTPiRiu1TWfJN8xHwQP5AtSRuOkcl&limit=10";
   //--Ajax request with queryURL--//
    $.ajax({
     url: queryURL,
     method: "GET"
    })
    .then(function(response){
      console.log(response);
     console.log(response.data [0].rating);
   //--Looping through each result item--//
     for (var i = 0; i < response.data.length; i++){
       console.log(response.data[i].rating);
       $("#gif").prepend("<p>Rating: " + response.data[i].rating + "</p>");
        $("#gif").prepend("<img src='" + response.data[i].images.downsized_still.url + "'>");
     }
    });
});
//--Form function--//
$("#add-topic").on("click", function(event) {
   event.preventDefault();
//--Grabs text from the input box--//
   var topic = $("#topic-input").val().trim();
       topics.push(topic);
       renderButtons();
})
renderButtons();


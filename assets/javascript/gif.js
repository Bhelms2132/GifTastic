//--Array of strings--//
var topics = ["Carolina Panthers", "Kings of Leon", "Zakk Wylde", "Tyler Childers", "jiu jitsu", "Golf"];
  
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
   var topic = $(this).attr("data-name")
   var queryURL = "https:api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=yPggTPiRiu1TWfJN8xHwQP5AtSRuOkcl&limit=10";
   //--Ajax request with queryURL--//
    $.ajax({
     url: queryURL,
     method: "GET"
    })
    .then(function(response){
  //--Looping through each result item--//
  console.log(response);
     for (var i = 0; i < response.data.length; i++){
        $("#gif").prepend("<p>Rating: " + response.data[i].rating + "</p>");
        $("#gif").prepend("<img data-state='still' data-still='"+ response.data[i].images.downsized_still.url + "' data-animate='"+ response.data[i].images.downsized.url + "' src='" + response.data[i].images.downsized_still.url + "' >");
       }
      });
      //--Function to animate but not working--//
      $(document).on("click", "img", function(){
        console.log("#gif");
        var state = $(this).attr("data-state");
        console.log("State: " + state);
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
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


//--Array of strings--//
var topics = ["Carolina Panthers", "Jocko Wilink", "Beach", "Zakk Wylde", "Tyler Childers", "Golf", "Javascript"];
  console.log(topics);




$("#add-topic").on("click", function(event) {
   event.preventDefault();
//--Grabs text from the input box--//
   var topic = $("#topic-input").val().trim();
       topics.push(topic);
       renderButtons();
       
})


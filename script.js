// import Unsplash from 'unsplash-js';
//
// const unsplash = new Unsplash({
//   applicationId: "d7da22b7d66c385e2832256137d0f82a0d4b19428f1984c5daa0160f47a27729",
//   secret: "30b200cb9c201b3a1b3257ce9b2cf208577a209d913fe607e0dd97f7569c4cb7",
//   callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
// });

$(document).ready(function() {
  var todoItem = $("#todo-item");
  var url = 'https://api.unsplash.com/';

  $("#todo").submit(function(event) {
    event.preventDefault();
    var todoInput = $("#todo-item").val();

    $("#todo").hide();
    $("body").append("<div>" + "<h1>" + todoInput + "</h1>" + "</div>");
    // $("body").css("background-image", "url(https://source.unsplash.com/1600x900/?mountain)");
    $("title").text(todoInput);

  });
});

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
  var userLogin = {
    name: "",
    email: "",
    password: ""
  }

  $("#email").hide();
  $("#pwd").hide();
  $("#todo").hide();

  // User input name
  $("#name").keypress(function (e) {
   var key = e.which;
   if(key === 13) {
      $("#name").hide();
      $("#tab-prompt").text("Please enter your EMAIL!")
      $("#email").show();
    }
  });
  // User input email
  $("#email").keypress(function (e) {
   var key = e.which;
   if(key === 13) {
      $("#email").hide();
      $("#tab-prompt").text("Please enter a password!")
      $("#pwd").show();
    }
  });
  // User input password
  $("#pwd").keypress(function (e) {
   var key = e.which;
   if(key === 13) {
      $("#pwd").hide();
      $("#header").text("TabIt!");
      $("#tab-prompt").text("Hi Sam, what would you like to tab?")
      $("#todo").show();
    }
  });
  // User input new todo
  $("#todo").submit(function(event) {
    event.preventDefault();
    var todoInput = $("#todo-item").val();

    $("#todo").hide();
    $("#tab-prompt").hide();
    $("#header").text(todoInput);
    $("title").text(todoInput);
    $("#main").append("<button class='btn btn-primary' id='btn-complete'>" + "Completed" + "</button>");

  });
  // Tab completed
  $("#btn-complete").click(function(event) {
    console.log(event);
    $("#complete").hide();
    $("#main").append("<div id='success'>" + "<h1 style='color:white'>" + "Way to go, and keep it up!" + "</h1>" + "</div>")
  })
});

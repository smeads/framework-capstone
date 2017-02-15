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
  $("#todo").hide();

$("#signin-btn").click(function() {
  // Chrome OAuth
  chrome.identity.getAuthToken({ interactive: true }, function(token) {
    if (chrome.runtime.lastError) {
        alert(chrome.runtime.lastError.message);
        return;
    }
    var objReq = new XMLHttpRequest();
    objReq.open('GET', 'https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=' + token);
    objReq.onload = function() {
      var userInfo = JSON.parse(objReq.response);
      var userName = userInfo.given_name;

      $("#signin").hide();
      $("#todo").show();
      $("#header").text("TabIt!");
      $("#header").after("<p id='user-greet'>" + "Hello " + userName + ", " + "what would you like to tab?" + "</p>" );
    };
    objReq.send();
  });
});

  // User input new todo
  $("#todo").submit(function(event) {
    event.preventDefault();
    var todoInput = $("#todo-item").val();

    $("#todo").hide();
    $("#user-greet").hide();
    $("#header").text(todoInput);
    $("title").text(todoInput);
    $("#main").append(
      "<form>" +
        "<button type='submit' class='btn btn-primary' id='btn-complete'>" +
          "Completed" +
        "</button>" +
      "</form>"
    );
  });
  // Tab completed
  $("#btn-complete").on('click', function(event) {
    event.preventDefault();
    console.log(event);
    window.top.close();
  });
});

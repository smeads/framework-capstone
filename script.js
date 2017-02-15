$(document).ready(function() {
  var todoItem = $("#todo-item");
  var url = 'https://api.unsplash.com/';
  var userStuff = localStorage.getItem('username');

  if (!userStuff) {
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

          localStorage.setItem('username', userName);
          console.log(userStuff);

          $("#signin").hide();
          $("#todo").show();
          $("#header").text("TabIt!");
          $("#header").after("<p id='user-greet'>" + "Hello " + userName + ", " + "what would you like to tab?" + "</p>" );
        };
        objReq.send();
      });
    });
  } else {
    // console.log(userStuff);
    $("#signin").hide();
    $("#todo").show();
    $("#header").text("TabIt!");
    $("#header").after("<p id='user-greet'>" + "Hello " + userStuff + ", " + "what would you like to tab?" + "</p>" );
  }
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

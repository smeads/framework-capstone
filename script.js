$(document).ready(function() {
  var todoItem = $("#todo-item");

  $("#todo").submit(function(event) {
    event.preventDefault();
    var todoInput = $("#todo-item").val();
    $("#todo").hide();
    $("body").append("<div>" + "<h1>" + todoInput + "</h1>" + "</div>");
    $("title").text(todoInput);
  });
});

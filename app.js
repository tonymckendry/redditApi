var results = "";

$("#submit").click(function(){
  var search = document.getElementById('search').value;

  var getter = $.ajax({
    url: "https://www.reddit.com/subreddits/search.json?q="+search,
    method: "GET",
    dataType: "json"
  });
  //
  getter.done(function(response){

});

$("#delete").click(function(){
  var dlt = document.getElementById('remove').value;
  $("tr").remove(':contains('+dlt+')');
});

$("#locate").click(function(){
  var finder = document.getElementById('finder').value;
  $('tr:contains('+finder+')').css("background-color", "#EEEE00")
});

$("#nuke").click(function(){
  $("tr").remove();
})

$("#guesser").click(function(){
  var guess = document.getElementById('guess').value;
  if (guess == results){
    window.alert("Correct!");
  }
  else{
    window.alert("Wrong!")
  }
})

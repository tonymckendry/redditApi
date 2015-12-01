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
    for (var i = 0; i < response["data"]["children"].length; i++) {
    var title = response["data"]["children"][i]["data"]["title"];
    var subreddit = response["data"]["children"][i]["data"]["display_name"]
    var image = response["data"]["children"][i]["data"]["header_img"]
    if (image == null){
      image = "http://placehold.it/350x65";
    }
      $("#subtable").append("<tr><td>"+subreddit+"</td><td>"+title+"</td><td><img src="+image+"></td></tr>")
      results =  response["data"]["children"].length;
      console.log("Number of results: " + results);
    }
  });
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

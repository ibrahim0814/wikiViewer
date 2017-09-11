$(document).ready(function(){

  $("#search").click(function(){

    //user entered search term
    var searchItem = $("#searchTerm").val();

    //search url
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchItem+"&format=json&callback=?";

    //ajax call
    //how we get the json file
    $.ajax({

      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data){

         //want to wipe data before new call
        $("#output").html("");

        //no results found
        if(data[1].length ===0){
          $("#output").html("No results found");

        }

        data[1] = data[1].reverse();
        data[2] = data[2].reverse();
        data[3] = data[3].reverse();

        //inside of prepend, you basically want to write out html like a string
        for(var i =0; i<data[1].length;i++){
        $("#output").prepend("<a href="+data[3][i]+" target='_blank'><h3 class='resultTitle'>"+data[1][i]+"</h3></a><br><p class='resultBody'>"+data[2][i]+"</p>");
        }

      },
      error: function(err){

        alert(err);


      }



    })

  })
})

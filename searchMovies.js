$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function(){
     $('#result').html('');
     $('#state').val('');
     var searchField = $('#search').val();
     var expression = new RegExp(searchField, "i");
     $.getJSON('http:localhost:3000/api/movies', function(data) {
      $.each(data, function(index, movie){
       if (movie.title.search(expression) != -1 || movie.director.search(expression) != -1 || movie.genre.search(expression) != -1)
       {
        $('#result').append('<li class="list-group-item link-class"><img src="'+movie.image+'" height="40" width="40" class="img-thumbnail" /> '+movie.title+' | <span class="text-muted">'+movie.director+'</span> | <span class="text-muted">'+movie.genre+'</span></li>');
       }
      });   
     });
    });
    
    $('#result').on('click', 'li', function() {
     var click_text = $(this).text().split('|');
     $('#search').val($.trim(click_text[0]));
     $("#result").html('');
    });
   });


// $(document).ready(function(){
//   $("#search").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("#table").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// });

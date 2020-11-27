function getAllMovies() {
    $(document).ready(function () { //function available after the document is loaded:
        $.ajax ({
            url: 'http:localhost:3000/api/movies',
            dataType: "json",
            type: "GET",
            success: function (data, textStatus, jqXHR) {
                $('.table-body').html(''); //empties table
                $.each(data, function (index, movie) { //.each ~loop for jQuery for each object, return key value pair
                    $('.table-body').append(
                        "<tr class='table-items' id='movie_"+movie.id+"'>" +
                        "<td>" + movie.id + "</td>" +
                        "<td>" + movie.title + "</td>" +
                        "<td>" + movie.director + "</td>" +
                        "<td>" + movie.genre + "</td>" +
                        "<td>" + movie.image + "</td>" +
                        "</tr>"
                        
                    );
                });
            }
        })
    });
}

getAllMovies();

function addMovie() {

    let movie = {
        "title": $("#movieList-input1").val(),
        "director": $("#movieList-input2").val(),
        "genre": $("#movieList-input3").val()

    }

    $.ajax ({
        url: 'http:localhost:3000/api/movies',
        dataType: "json",
        type: "POST",
        data: movie,
        success: function (data, textStatus, jqXHR) {
            alert("Success");
            $('.table-body').html(''); //empties table
            getAllMovies();
            
        }
    })
}

function updateMovie() {

    let movie = {
        "id": $("#movie-id").val(),
        "title": $("#movieList-input4").val(),
        "director": $("#movieList-input5").val(),
        "genre": $("#movieList-input6").val()

    }
    $.ajax ({
        url: 'http:localhost:3000/api/movies',
        dataType: "json",
        type: "PUT",
        data: movie,
        success: function (data, textStatus, jqXHR) {
            alert("Success");
            $('.table-body').html(''); //empties table
            getAllMovies();
            
        }
    })
}


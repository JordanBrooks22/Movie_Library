function getAllMovies() {
    $(document).ready(function () { //function available after the document is loaded:
        $.ajax({
            url: 'http:localhost:3000/api/movies',
            dataType: "json",
            type: "GET",
            success: function (data, textStatus, jqXHR) {
                $('.table-body').html(''); //empties table
                $.each(data, function (index, movie) { //.each ~loop for jQuery for each object, return key value pair
                    $('.table-body').append(
                        "<tr class='table-items' contenteditable='true' id='movie_" + movie.id + "'>" +
                        "<td>" + movie.id + "</td>" +
                        "<td>" + movie.title + "</td>" +
                        "<td>" + movie.director + "</td>" +
                        "<td>" + movie.genre + "</td>" +
                        `<td> <img id="movieImage" src ="${movie.image}" height="70px"></td>` + //I THINK I need a unique ID for each image for the modal pop-up
                        `<td> </span> <span class="table-remove"><button type="button"class="btn btn-danger btn-rounded btn-sm my-0" onclick="deleteMovie(${movie.id})"> Remove </button> </span> </td>` +
                        "</tr>"
                    );
                });
            }
        })
    });
}
/* <span class="table-update"><button type="button"class="btn btn-primary btn-rounded btn-sm my-0" onclick="updateMovie()"> Update </button>  */
getAllMovies();

function addMovie() {

    let movie = {
        "title": $("#movieList-input1").val(),
        "director": $("#movieList-input2").val(),
        "genre": $("#movieList-input3").val(),
        "image": $("#movieList-input4").val()
    }

    $.ajax({
        url: 'http:localhost:3000/api/movies',
        dataType: "json",
        type: "POST",
        data: movie,
        success: function (data, textStatus, jqXHR) {
            $('.table-body').html(''); //empties table
            getAllMovies();
        }
    })
}

function updateMovie() {

    let movie = {
        "id": $("#movie-id").val(),
        "title": $(".movieList-input-title").val(),
        "director": $(".movieList-input-director").val(),
        "genre": $(".movieList-input-genre").val(),
        "image": $(".movieList-input-image").val()
    }
    $.ajax({
        url: 'http:localhost:3000/api/movies',
        dataType: "json",
        type: "PUT",
        data: movie,
        success: function (data, textStatus, jqXHR) {
            $('.table-body').html(''); //empties table
            getAllMovies();

        }
    })
}

function deleteMovie(data) {

    $.ajax({
        url: 'http:localhost:3000/api/movies/' + data,
        dataType: "json",
        type: "DELETE",

        success: function (data, textStatus, jqXHR) {
            $('.table-body').html(''); //empties table
            getAllMovies();

        }
    })
}


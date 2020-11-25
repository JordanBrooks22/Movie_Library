function getAllMovies() {
    $(document).ready(function () { //function available after the document is loaded:
        $.ajax ({
            url: 'http:localhost:3000/api/movies',
            dataType: "json",
            type: "GET",
            success: function (data, textStatus, jqXHR) {
                $('.table-body').html(''); //empties table

            }
        })
            .then(function (data) {
                $.each(data, function (index, movie) { //.each ~loop for jQuery for each object, return key value pair
                    $('.table-body').append(
                        "<tr>" +
                        "<td>" + movie.id + "</td>" +
                        "<td>" + movie.title + "</td>" +
                        "<td>" + movie.director + "</td>" +
                        "<td>" + movie.genre + "</td>" +
                        "</tr>"
                    );
                });
            });
        });
}

getAllMovies();
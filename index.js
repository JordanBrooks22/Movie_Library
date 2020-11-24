const repoContext = require("./repository/repository-wrapper.js");
const express = require('express');

const app = express();

app.listen(3000, function () {
    console.log('Server started. Listening on port 3000.');
});
app.get("/api/movies", (req, res) => {
    let movies = repoContext.movies.findAllMovies();
    res.send(movies);
   });
app.get("/api/movies/:id", (req, res) => {
    let id = req.params.id;
    let movies = repoContext.movies.findMovieById(id);
    res.send(movies);
   });
   
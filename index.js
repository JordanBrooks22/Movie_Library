
var cors = require("cors");
const validators = require("./validators/custom-validations.js");
const repoContext = require("./repository/repository-wrapper.js");
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => validators.body(req, res, next));

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

app.post("/api/movies", (req, res) => {
    let newMovie = req.body;
    let addedMovie = repoContext.movies.createMovie(newMovie);
    res.send(addedMovie);
});

//created a put command that works in postman. movieUpdate is the JSON object, and the updateMovie is the execution [RDM]. 
app.put("/api/movies", (req, res) => {
    let movieUpdate = req.body;
    let updatedMovie = repoContext.movies.updateMovie(movieUpdate);
    res.send(updatedMovie);
})

app.delete("/api/movies/:id", (req, res) => {
    let id = req.params.id;
    let updatedDataSet = repoContext.movies.deleteMovie(id);
    res.send(updatedDataSet);
});


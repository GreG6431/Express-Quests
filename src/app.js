const express = require("express");

const app = express();

app.use(express.json());

const movieControllers = require("./controllers/movieControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

app.get("/api/users", movieControllers.getUsers);
app.get("/api/users/:id", movieControllers.getUserById);

app.post("/api/movies", movieControllers.postMovie);
app.post("/api/users", movieControllers.postUser);

app.put("/api/movies/:id", movieControllers.updateMovie);

app.put("/api/users/:id", movieControllers.updateUser);

module.exports = app;

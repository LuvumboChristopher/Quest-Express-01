const express = require('express');
const movies = require('./movies');
const app = express();
const port = 4000;

app.get("/", (req,res) => {
    res.send('Welcome to my favourite movie list');
})

app.get("/api/movies", (req,res, ) => {
    res.json(movies);
})

app.get("/api/movies/:id", (req,res,) => {
    const movie = movies.find((movie => movie.id === parseInt(req.params.id)))
    if(movie){
        res.status(200).json(movie);
    }else {
        res.status(404).send("Not found")
    }    
    res.end
})

app.get("/api/users", (req,res,) => {
    res.status(404).send( "Unauthorized")
})

app.listen( port , () => {
    console.log(`Server runing on: http://localhost:${port}`);
})
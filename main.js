import express from "express";
import movieRoutes from "./routes/movies.route.js"


const app = express();
const PORT = 6969

app.get('/', (req,res) => {
    res.json({msg: "Hello students!!"});
})


app.use('/movies', movieRoutes )

app.listen(6969, () => {
    console.log(`the server is running at http://localhost:${PORT}`);
});



import express from "express";

const app = express();
const PORT = 6969

app.get('/', (req,res) => {
    res.json({msg: "Hello students"});
})

app.get('/movies', () => {
   
})
app.post('/movies', () => {
   
})
app.put('/movies/:id', () => {
   
})
app.delete('/movies/:id', (req,res) => {
   
})


app.listen(6969, () => {
    console.log(`the server is running at http://localhost:${PORT}`);
});



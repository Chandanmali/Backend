const express = require("express")
const app = express()
const PORT = 8000;

app.post("/signup", (req, res) => {
    
})

app.post("/login", (req, res) => {
    
})

app.post("/todo", (req, res) => {
  
})

app.get("/alltodos", (req, res) => {
    res.send("Hello")
})


app.listen(PORT, () => {
    console.log("server started at", PORT)
})
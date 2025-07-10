const express = require("express")
const app = express()
const PORT = 8000;
const {UserModel} = require("./Model/model");
const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/todo-app-database").then(() => console.log("mongoDB connected")).catch((err) => console.log("failed to connect", err))

app.use(express.json())

app.post("/signup", async(req, res) => {

    const body = req.body.username
    console.log(body)

    const result = await UserModel.create({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name
    })

    console.log(result)

    res.json({msg: "data pass"})

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
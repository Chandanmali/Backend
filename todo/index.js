const express = require("express")
const app = express()
const PORT = 8000;
const { UserModel, TodoModel } = require("./Model/model");
const { default: mongoose } = require("mongoose");
const { auth, JWT_SECRET } = require("./middleware/auth")
const jwt = require("jsonwebtoken")



mongoose.connect("mongodb://127.0.0.1:27017/todo-app-database").then(() => console.log("mongoDB connected")).catch((err) => console.log("failed to connect", err))

app.use(express.json())

app.post("/signup", async (req, res) => {

    const body = req.body.username
    //console.log(body)

    const result = await UserModel.create({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name
    })

    console.log(result)

    res.json({ msg: "data pass" })

})

app.post("/login", async (req, res) => {

    const body = req.body;

    const user = await UserModel.findOne({ username: body.username, password: body.password })
    console.log(user)

    if (user) {
        const token = jwt.sign({
            //payloads
            id: user._id.toString()
        }, JWT_SECRET);

        res.json({
            token: token
        })

        // res.setHeader("Authorization", `Bearer ${token}`); // ✅ Send token in response header

        // res.json({
        //     message: "Login successful"
        // });
    }

    else {
        res.json({ msg: "Incorrect Credentials" })
    }
    res.json({ msg: "user login" })
})

app.post("/todo", auth, async (req, res) => {
    const body = req.body;
    //console.log(body)

    const result = await TodoModel.create({
        description: req.body.description,
        done: req.body.done,
        userId: req.userId
    })

    console.log(result)

    res.json({ msg: "todo created" })

})

app.get("/alltodos", auth, async(req, res) => {
    const userId = req.userId

    const todos = await TodoModel.find({
        userId
    })
    res.json({
        todos
    })

})



app.listen(PORT, () => {
    console.log("server started at", PORT)
})
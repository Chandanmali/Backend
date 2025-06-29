//create a server with global Middleware with varialble, you have to use that variable and create a increament count how many time user go to my website(login route)

const express = require("express")
const app = express()
const PORT = 5000;

let serverDirectCount = 0;

const serverCoutMiddleware = (req, res, next) => {
    serverDirectCount = serverDirectCount + 1;
    next()

}

app.get("/", (req, res) => {
    res.json({msg: "Hello server"})
})

app.get("/login", serverCoutMiddleware, (req, res) => {
    res.json({msg: "My main website"})
})

app.get("/directCout", (req, res) => {
    res.json({serverDirectCount})
})

app.listen(PORT, () => {
    console.log("server started at", PORT)
})
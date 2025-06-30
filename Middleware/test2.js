//Q. create Middleware were give the all info like http method, url, timestamps

const express = require("express")
const app = express()

//Middleware
const dataLogsMiddleware = (req, res, next) => {
    req.requestTime = new Date();
     console.log(req.url)
     console.log(req.method)
     console.log(req.requestTime)
     next()
}

app.use(dataLogsMiddleware);

app.get("/", (req, res) => {
    res.json({msg: "Hello bhai sahab"})
})

app.listen(5000, () => {
    console.log("server running at ", 5000)
})
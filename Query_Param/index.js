const express = require("express")
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
    const body = req.query.ans  // in url http://localhost:4000/?ans=40
    res.json({body})
})

app.get("/sum", (req, res) => {
    const val1 = parseInt(req.query.val1) // always give res in string for that parseInt
    const val2 = parseInt(req.query.val2)
    const sum = val1+val2

    res.json({sum})     // http://localhost:4000/sum?val1=10&val2=20

})

//for creating dynamic routes(params)
app.get("/sum/:argu1/:argu2", (req, res) => {
    const val1 = parseInt(req.params.argu1) // always give res in string for that parseInt
    const val2 = parseInt(req.params.argu2)
    const sum = val1+val2

    res.json({sum})       // http://localhost:4000/sum/10/80
})

//create sum by query parameter
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})
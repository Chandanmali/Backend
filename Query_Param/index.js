const express = require("express")
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
    res.send("Hello query params")
})
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})
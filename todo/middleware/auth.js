//middleware for users validation authentication
const jwt = require("jsonwebtoken")
const JWT_SECRET = "Ajjjaaj@12345"   //use for generate and verify user using token

function auth(req, res, next){
    const token = req.headers.token;

    //check the token is correct using JWT_SECRET
    const decodedData = jwt.verify(token, JWT_SECRET)

    if(decodedData)
    {
        req.userId = decodedData.id
        next()
    }
    else
    {
        res.json({
            msg: "Invalid Credentials"
        })
    }

}

module.exports = {
    auth,
    JWT_SECRET,
}

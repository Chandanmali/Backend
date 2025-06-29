//Middleware in node json

const express = require('express')
const app = express()
const port = 3000


//without using Middleware
const ageRistrict = (age) => {
  if(age >= 18)
  {
    return true
  }
  else{
    return false
  }
}

app.get('/ride', function(req, res)  {
  if(ageRistrict(req.query.age))
  {
    res.json({msg: "You are eligible for ride"})
  }
  
  else{
    res.json({msg: "You are not eligible for ride"})
  }
})

//use Middleware for same operation

//Middleware
const ageRistrictMiddleware = (req, res, next) => {
  
  const age = req.query.age
  if(age >= 18)
  {
    next();
  }
  else{
    res.status(411).json({msg: "Sorry you are not eligible"})
  }

}


app.get('/ride2', ageRistrictMiddleware, function(req, res)  {
  res.status(200).json({msg: "You are eligible for ride"})
})


app.listen(port, () => {
  console.log(`server started at ${port}`)
});
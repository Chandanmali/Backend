const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.ObjectId

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String
})

const TodoSchema = new mongoose.Schema({
    description: String,
    done: Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model("users", UserSchema)
const TodoModel = mongoose.model("todos", TodoSchema)

module.exports = {
    UserModel,
    TodoModel
}
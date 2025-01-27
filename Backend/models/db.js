const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const { ObjectId } = mongoose.Schema.Types

const userScama = new mongoose.Schema({
    userId: { type: ObjectId, required: true, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
})

const todoScema = new mongoose.Schema({
    todoId: { type: String, unique: true, default: () => uuidv4() },
    title: { type: String },
    description: { type: String },
    done: { type: Boolean },
    createdAt: { type: Date, default: Date.now },
    userId: { type: ObjectId, ref: "user", required: true }
})

const userModel = mongoose.model("user", userScama)
const todoModel = mongoose.model("todo", todoScema)

module.exports = {
    userModel,
    todoModel
}
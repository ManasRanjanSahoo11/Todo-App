require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')

const { userModel, todoModel } = require('./models/db')
const { auth } = require('./middleware/auth')

const app = express()
app.use(express.json())
app.use(cookieParser())

//connect to DB
async function connDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,  //Use the new URL parser
            useUnifiedTopology: true  // Use the new Server Discover and Monitoring engine
        })
    } catch (err) {
        console.log('Error while connecting to the MongoDB' + err);
        return
    }
}
connDB()


app.post("/", (req, res) => {
    res.send('Welcome!, to the todo app.');
})

app.post("/v1/api/signup", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (user) {
            res.status(400).json({ "msg": "User already exits" })
        }

        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                return res.send("Err! while hashing password", err)
            }

            await userModel.create({
                email,
                password: hash
            })

            res.status(201).json({ "msg": "You r signup." })
        })
    } catch (err) {
        console.log(err);
        return res.status(501).send("Internal server err!")
    }
})

app.post("/v1/api/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(401).json({ "msg": "Invalid credentials" })
        }

        //compare password
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(401).json({ "msg": "Invalid credentials" })
        }

        //create jwt token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })

        //set cookie
        res.cookie("authorization", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        })

        return res.status().json({ "msg": "You r signin." })
    } catch (err) {
        console.log(err);
        return res.status(501).send("Internal server err!")
    }
})

app.post("/v1/api/logout", (req, res) => {
    try {
        res.clearCookie("authorization", "")
        return res.status(200).json({ "msg": "logout successful." })
    } catch (err) {
        console.log(err);
        return res.status(501).send("Internal server err!")
    }
})

app.post("/v1/api/create-todo", auth, async (req, res) => {
    try {
        const { title, description, done } = req.body;

        const todo = await todoModel.create({
            title,
            description,
            done: done || false,
            userId: req.userId
        })
        res.status(201).json({ "msg": "Todo created succeessful.", todo })
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal server err!")
    }
})

app.put("/v1/api/edit-todo/:todoId", async (req, res) => {
    try {
        const todoId = req.params.todoId;
        const { title, description, done } = req.body;

        const updatedTodo = await todoModel.findOneAndUpdate({ todoId }, {
            title, description, done: done || false, userId: req.userId
        }, { new: true })

        if (!updatedTodo) {
            return res.status(401).send('Todo not found.')
        }

        res.status(201).json({ "msg": "Todo updated successful.", updatedTodo })
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal server err!")
    }
})

app.delete("/v1/api/delete-todo/:todoId", auth, async (req, res) => {
    try {
        const todoId = req.params.todoId;

        const deleteTodo = await todoModel.findByIdAndDelete(todoId)

        if (!deleteTodo) {
            return res.status(401).send('Todo not found.')
        }

        res.status(201).json({ "msg": "Todo deleted successful." })
    } catch (err) {
        console.log(err);
        return res.status(501).send("Internal server err!")
    }
})

app.get("/v1/api/get-todos", auth, async (req, res) => {
    try {
        const userId = req.userId;

        const userTodo = await todoModel.find({ userId })

        if (!userTodo) {
            return res.status(401).send('Todo not found.')
        }

        res.status(200).json({
            "msg": "Todos retrieved successful.",
            todos: userTodo
        })
    } catch (err) {
        console.log(err);
        return res.status(501).send("Internal server err!")
    }
})

app.listen(8000, () => console.log('server started'))
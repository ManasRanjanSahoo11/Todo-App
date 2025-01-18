require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const { userModel, todoModel } = require('./models/db')
const { auth } = require('./middleware/auth')

const app = express()
app.use(express.json())

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


app.post("/", (req, res) => { })
app.post("/v1/api/signup", async (req, res) => {
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
})

app.post("/v1/api/signin", async (req, res) => {
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
})

app.post("/v1/api/logout", (req, res) => {
    res.clearCookie("authorization", "")

    return res.status(200).json({ "msg": "logout successful." })
})


app.post("/v1/api/create-todo", auth, (req, res) => {
    /*todoId: { type: ObjectId, required: true, unique: true },
    title: { type: String },
    description: { type: String },
    done: { type: Boolean },
    createdAt: { type: Date, default: Date.now },
    userId: { type: ObjectId, ref: "user", required: true } */

    const { title, description } = req.body;
})
app.put("/v1/api/update-todo/:todoId", (req, res) => { })
app.delete("/v1/api/delete-todo/:todoId", (req, res) => { })
app.get("/v1/api/get-todos", (req, res) => { })


app.listen(3000, () => console.log('server started'))
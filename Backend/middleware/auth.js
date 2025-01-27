require('dotenv').config()

const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    try {
        const token = req.cookies.authorization;
        // console.log(token);
        

        if (!token) {
            return res.status(401).send("unauthorized")
        }

        const decodedData = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decodedData.id;
        next()
    } catch (err) {
        console.log(err);
        return res.status(403).send("Forbidden: unauthorized");
    }
}

module.exports = { auth }
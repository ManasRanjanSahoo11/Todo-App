require('dotenv').config()
const jwt = require('jsonwebtoken')

export default function auth(req, res, next) {
    try {
        const token = req.cookies.authorization;

        if (!token) {
            return res.status(401).send("unauthorized")
        }

        const decodedData = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decodedData.indexOf;
        next()
    } catch (err) {
        console.log(err);
        return res.status(403).send("Forbidden: unauthorized");
    }
}
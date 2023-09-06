const expr = require("express")
const mg = require("mongoose")
const bodyParser = require("body-parser")
const app = expr()
const cors = require("cors")

app.use(cors())
app.use(bodyParser.json())

mg.connect('mongodb://127.0.0.1:27017/Kismat1').then(() => {
    console.log("Connected")
}).catch(() => {
    console.log("Error")
})

const userschema = new mg.Schema({ username: String })
const user = new mg.model('user', userschema)

app.post('/signup', async (req, res) => {
    try {
        const { username } = req.body
        console.log(`Username ${username}`)
        const newUser = new user({ username })
        await newUser.Save()
        res.send()
    } catch (error) {
        res.send(error)
    }
})

app.listen(5000)
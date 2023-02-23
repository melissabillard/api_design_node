import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'
import { createNewUser, signin } from './handlers/user'

// running on http://localhost:3001/

const app = express()

const customLogger = (message) => (req, res, next) => {
    // console.log(`Hello from ${message}`)
    next()
}

// Middleware
// order of your calls matters ! 
app.use(cors())
app.use(morgan('dev')) // every request will come first by morgan !!
app.use(express.json()) // authorise client to send some json
app.use(express.urlencoded({ extendde: true })) // allowed the client to decode and encode correctly
app.use(customLogger('custom logger'))

app.use((req, res, next) => {
    req.shhhh_secret = 'doggy' // make request available on router
    next()
})

app.get('/', (req, res) => {
    // console.log('hello from express')
    res.status(200)
    res.json({ message: 'hello' }) // afficher un json sur la page du serveur
})

app.use('/api', protect, router)
app.post("/user", createNewUser);
app.post("/signin", signin);

export default app
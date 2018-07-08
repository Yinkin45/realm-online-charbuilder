const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')

const AccountsRouter = require('./routers/AccountsRouter')

const app = new Koa()

const MONGO_CONNECTION_URL = 'mongodb://localhost:27017/realm-charbuilder'
const API_PORT = 3000

// Parse all bodies using middleware
app.use(bodyParser())

// Add router for handling /accounts API
app.use(AccountsRouter.routes())
app.use(AccountsRouter.allowedMethods())

// Connect to the MongoDB database
console.log('Connecting to the database...')
mongoose.connect(MONGO_CONNECTION_URL, { useNewUrlParser: true })

// Start the web API
app.listen(API_PORT)
console.log(`API is now running on port ${API_PORT}...`)

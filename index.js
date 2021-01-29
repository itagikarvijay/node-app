const express = require('express');
const bodyParser = require('body-parser');
const db = require('./mongoDbUtils');
const cors = require('cors')
const productRouter = require('./routes/product-router');
const loginRouter = require('./routes/login-router')
const userRouter = require('./routes/user-router')

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())
app.options('*', cors())

app.use('/api/products', productRouter)
app.use('/api/login', loginRouter)
app.use('/api/user', userRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
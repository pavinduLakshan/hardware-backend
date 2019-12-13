const mongoose = require('mongoose')

const MONGODB_URL=process.env.NODE_ENV === "production" ? process.env.MONGODB_URL : process.env.PROD_MONGODB_URL

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
})
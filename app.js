const express = require('express')
const config = require('./config')
const authRoutes = require('./Routes/authRoute')
const studentRoutes = require('./Routes/studentRoute')
const mongoose = require('mongoose')

const app = express();

app.use(express.json())

mongoose.connect(config.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
});

app.use('/api/auth' , authRoutes)
app.use('/api/students', studentRoutes)

app.listen(config.PORT, ()=> {
    console.log(`Server started running on PORT: ${config.PORT}`);
})
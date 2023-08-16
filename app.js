const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const cors = require('cors')

const authRoutes = require('./Routes/authRoute')
const studentRoutes = require('./Routes/studentRoute')
const facultyRoutes = require('./Routes/facultyRoute')
const eventRoutes = require('./Routes/eventRoutes')
const notificationRouter = require('./Routes/notificationRoutes')

const app = express();

app.use(express.json())
app.use(cors())

mongoose.connect(config.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
});

app.use('/api/auth' , authRoutes)
app.use('/api/students', studentRoutes)
app.use('/api/faculty',facultyRoutes)
app.use('/api/events',eventRoutes)
app.use('/api/notification',notificationRouter)

app.listen(config.PORT, ()=> {
    console.log(`Server started running on PORT: ${config.PORT}`);
})
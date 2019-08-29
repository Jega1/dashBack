const express = require ('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 4000;
const app = express()

app.use(bodyParser.json())
app.use(cors())

//require or import router api from the folder routes 
const apiStudent = require('./routes/student')
const apiProf = require("./routes/prof")
//use router start with index name api and the variable api

app.use('/student', apiStudent)
app.use("/prof", apiProf)


app.listen(PORT, () => {
        console.log('server is running in the PORT: ' + PORT)
})

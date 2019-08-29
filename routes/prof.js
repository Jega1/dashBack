const express = require('express')
const router = express.Router()

//bring here student.js that was created inside the models folder this variable should be start with capital letter
const Prof = require ('../models/prof')
//for connect db
const mongoose = require('mongoose')
let db = 'mongodb://localhost:27017/promo_dev'
mongoose.connect(db, { useNewUrlParser: true }, err => {
        if (err) {
                console.log('Error!! ' + err)
        } else {
                console.log('Connected mongodb')
        }
})



router.post('/registerProf', (req, res) => {
        //extract the student information from the body 
        let profData = req.body.user
        //next this studentData has to be cast into student models to understand the mongoDB
        let prof = new Prof(profData)
        //above the student model or student objet simply call to save mode in DB
        prof.save((error, registerProfes) => {
                if (error) {
                        console.log(error)
                } else {
                        res.status(200).send(registerProfes)
                }
        })
})

router.post('/loginProf', (req, res) => {
        //extract the student information from the body 
        let profData = req.body
        console.log(profData)
        console.log(profData.user.email)
        //check the email & pw are exist  in the DB :::use the Student mongo model
        Prof.findOne({ email: profData.user.email }, (error, prof) => {
                if (error) {
                        //pourquoi error ici directement !student
                        console.log(error)
                } else {
                        if (!prof) {
                                res.status(401).send('Invalide email')
                        }
                        else if (prof.password !== profData.user.password) {
                                res.status(401).send('Invalide password')
                        } else {
                                console.log(prof)
                                res.status(200).send(prof)
                        }

                }
        })

})


      // List student START
router.get('/listProf', (req, res) => {
        Prof.find((error, listProf) => {
                if (error) {
                        console.log(error)
                        res.status(500).send(error)
                } else {
                        console.log(listProf)
                        res.status(200).send(listProf)
                }
        })
})
// List student END

module.exports = router
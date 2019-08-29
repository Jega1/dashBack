const express = require('express')
const router = express.Router()
//bring here student.js that was created inside the models folder this variable should be start with capital letter
const Student = require ('../models/student')
const Projet = require('../models/projet')
// const Presence = require('../models/presence')
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


// Register student START ************
router.post('/registerStu', (req, res) => {
        let studentData = req.body.user//extract the student information from the body 
        let student = new Student(studentData) //next this studentData has to be cast into student models to understand the mongoDB
        //above the student model or student objet simply call to save mode in DB
        student.save((error, registerStudent) => {
                if(error) {
                        console.log(error)
                }else{
                        res.status(200).send(registerStudent)
                }
        })
})
// Register student START ************


// Login student START************
router.post('/loginStu', (req, res) => {
        //extract the student information from the body 
        let studentData = req.body
        console.log(studentData.user.password)
        //check in the is't available in the db
        Student.findOne({email : studentData.user.email}, (error, logStu) =>{
                if(error){
                        console.log(error)
                } else {
                        if (!logStu) {
                                res.status(401).send('Invalide email')
                        }
                        else if (logStu.password !== studentData.user.password) {
                                res.status(401).send('Invalide password')
                        } else {
                                console.log(logStu)
                                res.status(200).send(logStu)

                        }
                }
                })

        })


// Login student END*****************



// List student START
router.get('/listStu', (req, res) => {
        Student.find((error, listStudent) => {
                if (error) {
                        console.log(error)
                        res.status(500).send(error)
                } else {
                        console.log(listStudent)
                        res.status(200).send(listStudent)
                }
        })
})
// List student END

router.post('/getStudent', (req, res) =>{
        let id = req.body.id
        console.log( id)
        Student.findById(id, (err, student)=>{
                if(!err){
                        res.send(student)
                }else{
                        res.status(401)
                }
        })
})







//
router.post('/createProjet', (req, res) =>{
       let projet = req.body.projet
        let p = new Projet(projet) // on instancie le schema mongoose
        // p.owner = id;
        // p.name = req.body.name;
        // p.comment = req.body.comment;
        // p.note = req.body.note
        p.save((err, projet)=>{
                res.send(projet)
        })

})


//
router.get('/getAllProjet', (req, res) => {
        Projet.find((err, projet) => {
                res.send(projet)
                console.log(projet)
        })

})





//
router.get('/getProjet', (req, res) => {
            Projet.findOne((err, projet) => {
                res.send(projet)
                console.log(projet)
        })

})



// router.post('/notePresence', (req, res) =>{
//                         let presence = req.body.presence
//                         let prese = new Presence(presence)
//                         prese.save((err, presence) =>{
//                                 res.send(presence)
//                         })

//                 })

module.exports = router
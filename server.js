const express = require('express')
const mongodb = require('mongodb')
const { MongoClient, ObjectID } = require('mongodb')
const app = express()

app.use(express.json())

const mongo_url = "mongodb://localhost:27017"
const database = "contact-list-december"


MongoClient.connect(mongo_url, { useUnifiedTopology: true },(err, client) => {
    if(err){
        console.log("Error on connection to database");
    }else{
        const db = client.db(database)

        app.post('/new-contact', (req, res) => {
            let newContact = req.body
            db.collection('contact').insertOne(newContact, (err, data) => {
                if(err) throw err
                res.send("Contact Added!")
            })
        })
        // Get All Contacts
        app.get('/contacts', (req, res) => {
            db.collection('contact').find().toArray((err, data) => {
                if(err) throw err
                res.send(data)
            })
        })

        // Get Contact by ID
        app.get('/:id', (req, res) => {
            let contactId = ObjectID(req.params.id)
            db.collection('contact').findOne({_id: contactId}, (err, data) => {
                if(err) throw err
                res.send(data)
            })
        })

        app.delete('/:id', (req, res) => {
            let contactId = ObjectID(req.params.id)
            db.collection('contact').findOneAndDelete({_id: contactId}, (err, data) => {
                if(err) throw err
                res.send('Contact Deleted!')
            })
        })

        app.put('/:id', (req, res) => {
            let contact = req.body
            let contactId = ObjectID(req.params.id)
            db.collection('contact').findOneAndUpdate({_id: contactId}, {$set: {...contact}}, (err, data) => {
                if(err) throw err
                res.send('Contact Modified!')
            })
        })
    }
})

app.listen(5000, (err) => {
    if(err) throw err
    else console.log("Server is up and running on Port 5000")
})
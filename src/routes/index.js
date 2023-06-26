const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://fir-with-next-81696-default-rtdb.firebaseio.com/'
});

const db = admin.database();


router.get('/', (req, res) => {
    res.render("index")
});

router.post('/new-contact', (req, res) => {
    const newContact = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
    }
    console.log(req.body);
    db.ref('contacts').push(newContact);
    res.send("index")
});

module.exports = router;
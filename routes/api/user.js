const express = require('express');

const router = express.Router();

//item model

const User = require('../../models/User');

//@route GET api/items
//@desc Get all items
//@access public

router.get('/', (req, res) => {
    User.find()
        .sort({ date: -1 })
        .then(user => res.json(user))
});

//@route POST api/items
//@desc Post an Item
//@access public

router.post('/', (req, res) => {
    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    });

    newUser.save()
        .then(user => {res.json(user),
        console.log(user)})
        .catch(err => console.log('test',res.json(err.code)));
});

module.exports = router;
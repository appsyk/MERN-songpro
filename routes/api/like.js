const express = require('express');

const router = express.Router();

//item model

const Like = require('../../models/Like');

//@route GET api/items
//@desc Get all items
//@access public

router.get('/', (req, res) => {
    Like.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

//@route POST api/items
//@desc Post an Item
//@access public

router.post('/', (req, res) => {
    const newPost = new Like({
        user: req.body.user,
        data: req.body.data,
        isLike: req.body.isLike
    });

    newPost.save().then(Like => res.json(Like));
});

//@route DELETE api/items
//@desc Delete an Item
//@access public

router.delete('/:id', (req, res) => {
    Like.findById(req.params.id)
        .then(like => {
            like.remove().then(() => res.json({ success: true }))
        })
        .catch(err => res.status(404).json({ success: false }))
});

module.exports = router;
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

//Create a new post
router.post('/', async (req, res) => {
    try {
        const post = await Post.create({
            title: req.body.title,
            contents: req.bodycontents,
            user_id: req.session.user_id
        });
        res.status(200).json({post, message : 'New Post Created!'})
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
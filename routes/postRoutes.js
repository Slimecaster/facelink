const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const Post = require('../models/postModel');

router.get('/new', (req, res) => {
    res.render('new');
})

// Route to render form for editing an existing film
router.get('/post/:id/update', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.render('edit', { post });
    } catch (err) {
        console.error("Fejl ved hentning af film:", err);
        res.status(500).send("Fejl ved hentning af film.");
    }
});

router.get('/',postController.getAllPosts);
router.post('/post', postController.createPost);
router.put('/post/:id/update', postController.updatePost);
router.delete('/post/:id/delete', postController.deletePost);

module.exports = router;


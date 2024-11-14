const post = require('../models/postModel');

exports.createPost = async (req, res) => {
    try {
        const newPost = new post({
            userid: req.body.userid,
            text: req.body.text,
            timestamp: req.body.timestamp,
            likes: req.body.likes,
        });
        await newPost.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).send("fejl ved oprettelse af post");
    }
}

exports.getAllPosts = async (req, res) => {
    try {
        const posts =await post.find()
        res.render('index', {posts})
    } catch (error) {
        res.status(500).send("fejl ved hentning af post");
    }
}

exports.updatePost = async (req, res) => {
    try {
        await post.findByIdAndUpdate(req.params.id,{
            text: req.body.text,
            timestamp: req.body.timestamp,
        })
        res.redirect('/')
    } catch (error) {
        res.status(500).send("fejl ved opdatering af post");
    }
}

exports.deletePost = async (req, res) => {
    try {
        await post.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.status(500).send("fejl ved opdatering af post");
    }
}
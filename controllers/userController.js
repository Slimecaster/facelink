const user = require('../models/userModel');

//Tilføjer en ny user
exports.createUser = async (req, res) => {
    try{
        const newUser=new user({
            name: req.body.name,
            email: req.body.email,
            posts: req.body.posts
        });
        await newUser.save();
        res.redirect('/');
    }catch(err){
        console.error("Fejl ved tilføjelse af user:",err);
        res.status(500).send("Fejl ved tilføjelse af user.");
    }
};

//Henter alle users og viser dem
exports.getAllUsers = async (req, res) => {
    try {
        const users = await user.find();
        res.render('index', {users: users});
    }catch(err){
        console.error("Fejl ved hentning af user:",err);
        res.status(500).send("Fejl ved hentning af person.")
    }
};

//Opdaterer en user
exports.updateUser = async (req, res) => {
    try {
        await user.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            posts: req.body.posts
        });
    }catch(err){
        console.error("Fejl ved opdatering af user:",err);
        res.status(500).send("Fejl ved opdatering af user:",err);
    }
};

//Sletter en user
exports.deleteUser = async (req, res) => {
    try {
        await user.findByIdAndDelete(req.params.id);
        res.redirect('/');
    }catch(err){
        console.error("Fejl ved sletning af user:",err);
        res.status(500).send("Fejl ved sletning af user.");
    }
};










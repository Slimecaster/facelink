const express=require('express');
const router = express.Router();
const User=require('../controllers/userController');
const userController=require('../controllers/userController');

//Route til visning af formularen for en ny user
router.get('/new',(req,res)=>{
    res.render('new') // Render new.ejs
});

//Route to render form for edting an existing user
router.get('/user/:id/update', async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.render('edit',{user:user});
    } catch(err){
        console.error("Fejl ved hentning af user:",err);
        res.status(500).send("Fejl ved hentning af user");
    }
});

router.get('/',userController.getAllUsers);
router.post('/user',userController.createUser);
router.post('/user/:id/update',userController.updateUser);
router.post('/user/:id/delete',userController.deleteUser);

module.exports = router;

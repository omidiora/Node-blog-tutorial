const router=require('express').Router();
const Post=require('../models/postModel');

router.post('/' , async(req , res)=>{
  
    const {title , createAt ,tags , html} =req.body;

    const newPost= new Post({
        title ,createAt ,tags , html
    });

    try{

     const savedPost = await newPost.save();
     res.json(savedPost);
    }
    catch(err){
        console.log(err);
    }
});

router.get('/' , async(req ,res)=>{
    const posts= await Post.find();
    res.json(posts);
});

router.get("/:id" , async(req , res)=>{
    const post =await Post.findById(req.params.id);
    res.json(post);
})



module.exports=router;
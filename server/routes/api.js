const { RouteReuseStrategy } = require('@angular/router');
const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Video=require('../models/video');

const db="mongodb+srv://videoDbUser:Nandhu20@cluster0.gdyzs.mongodb.net/videoplayer?retryWrites=true&w=majority";
mongoose.Promise=global.Promise;
mongoose.connect(db,function(err){
    if(err){
        console.error("Error! "+err);
    }
});

router.get('/videos',function(req,res){
    console.log("Get all videos")
    Video.find({}).exec(function(err,videos){
        if(err){
            console.log("Error");
        }else{
            res.json(videos);
        }

    });
    //res.send('api works');
});

router.get('/videos/:id',function(req,res){
    console.log("Get single video ")
    Video.findById(req.params.id).exec(function(err,video){
        if(err){
            console.log("Error");
        }else{
            res.json(video);
        }

    });
    //res.send('api works');
});

router.post('/videos',function(req,res){
    console.log("Post video")
    var newVideo=new Video();
    newVideo.title=req.body.title;
    newVideo.url=req.body.url;
    newVideo.description=req.body.description;
    newVideo.save(function(err,insertedVideo){
        if(err){
            console.log("Error");
        }else{
            res.json(insertedVideo);
        }

    });
    //res.send('api works');
});

router.put('/videos/:id',function(req,res){
    console.log("update a video");
    Video.findByIdAndUpdate(req.params.id,{
        $set:{ title:req.body.title,
        url:req.body.url,
        description:req.body.description
        }
    },
    {
        new:true
    },
    function(err,updatedVideo){
        if(err){
            res.send("Error updating video");
        }else{
            res.json(updatedVideo);
        }
    }
    )
})


router.delete('/videos/:id',function(req,res){
    console.log("Deleting a video")
  
    Video.findByIdAndRemove(req.params.id,function(err,deletedVideo){
        if(err){
            console.log("Error");
        }else{
            res.json(deletedVideo);
        }

    });
    //res.send('api works');
});


module.exports=router;
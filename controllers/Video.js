const express = require('express');
const {Video} = require('../models');

const videoIndex = (req, res)=>{
    Video.find({}, (err, foundVideos) => {
        if (err) console.log('Error in video index: ', err)

        if (!foundVideos) return res.json({
            message: 'No Videos found in database.'
        })

        res.status(200).json({ videos: foundVideos});
        // console.log(foundVideos[foundVideos.length - 1]._id);
        console.log(foundVideos);
    });
}

// Show
const videoShow = (req, res)=>{

}

// Delete
const videoDelete = (req, res)=>{

}

// Update
const videoUpdate = (req, res)=>{
  
}

// Create
const videoCreate = (req, res)=>{
    Video.create(req.body, (err, savedVideo) => {
        if (err) console.log('Error in video create: ', err)

        res.status(201).json({ video: savedVideo });
    });
}

///////////////////////
// EXPORT
///////////////////////
module.exports = {
    videoIndex,
    videoShow,
    videoDelete,
    videoUpdate,
    videoCreate,
}
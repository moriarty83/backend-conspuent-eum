const { text } = require('express');
const express = require('express');
const {Comment} = require('../models')

// Index
const commentIndex = (req, res)=>{

}

// Show
const commentShow = (req, res)=>{

}

// Delete
const commentDelete = (req, res)=>{

}

// Update
const commentUpdate = (req, res)=>{
  
}

// Create
const commentCreate = async (req, res)=>{
    try {
        req.body = {
            author: req.currentUser,
            videoId: req.params.id,
            text: req.body.text,
            responseTo: req.body.text,
        }

        const createdComment = await Comment.create(req.body);
    
        res.status(201).json(createdComment);

    } catch (err) {
        return console.log(err);
    }



}

///////////////////////
// EXPORT
///////////////////////
module.exports = {
    commentIndex,
    commentShow,
    commentDelete,
    commentUpdate,
    commentCreate,
}
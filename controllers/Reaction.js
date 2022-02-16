const express = require('express');
const {Reaction} = require('../models')

///////////////////////
// ROUTER
///////////////////////
const router = express.Router();

///////////////////////
// ROUTES
///////////////////////

// Index
router.get('/', (req, res)=>{

})

// New
router.get('/new', (req, res)=>{

});

// Delete
router.delete('/:id', (req, res)=>{

});

// Update
router.put('/:id', (req, res)=>{
  
});

// Create
const reactionCreate = async (req, res)=>{
  try {
      req.body = {
          userId: req.currentUser,
          commentId: req.body.commentId,
          like: req.body.like,
      }

      const createdReaction = await Reaction.create(req.body);
  
      res.status(201).json(createdReaction);

  } catch (err) {
      return console.log(err);
  }



}

// Edit
router.get('/:id/edit', (req, res)=>{

});

// Show
router.get('/:id', (req, res)=>{

});


///////////////////////
// EXPORT
///////////////////////
module.exports = {
  reactionCreate,
}
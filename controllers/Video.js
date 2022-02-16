const express = require('express');
const Video = require('../models/Video')

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
router.post('/', (req, res)=>{
    
});

// Edit
router.get('/:id/edit', (req, res)=>{

});

// Show
router.get('/:id', (req, res)=>{

});


///////////////////////
// EXPORT
///////////////////////
module.exports = router;
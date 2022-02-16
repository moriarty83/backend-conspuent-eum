const {Video} = require('../models')

const videoIndex = (req, res)=>{

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
const videoCreate =  async (req, res)=>{
    try {
        req.body = {
            instructor: req.params.instructor,
            category: req.body.category,
            courseNumber: req.body.courseNumber,
            sectionNumber: req.body.sectionNumber,
            title: req.body.title,
            vimeoUrl: req.body.vimeoUrl
        }

        const createdVideo = await Video.create(req.body);
    
        res.status(201).json(createdComment);

    } catch (err) {
        return console.log(err);
    }
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
const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/item.js');

module.exports = router; 

// @route GET api/items 
// @desc GET ALL ITEMS
// @access Public 

// Below is to do GET request.
router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
}); 

// @route POST api/items 
// @desc Create An Item
// @access Public (if hv authentication, will be private)

// Below is to do POST request. 
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

module.exports = router;

// @route DELETE     api/items 
// @desc Delete An item
// @access Public (if hv authentication, will be private)

// Below is to do POST request. 
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
})                                              


module.exports = router;
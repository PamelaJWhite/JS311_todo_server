const express = require('express')

const router = express.Router()

let nextID = 3;

let db = [{
    "id": 1, 
    "label": "Reading for class 3",
    "done": false,
    "priority": "High",
    "dueDate": "8/31/21" 

},{
    "id": 2, 
    "label": "Homework for class 3",
    "done": false,
    "priority": "High",
    "dueDate": "9/7/21" 
}
]

//DEFINE ALL THE ROUTES:

router.get('/', function(req, res){
    res.json("Best Todo List App EVER")
})

// router.get('/items', getItemSummaries)

// router.get('/item/:id', getItemById)

// router.post('/items', updateItemsById)

// router.put('/items/:id', VARIABLE HERE)

// router.delete('/items/:id', deleteItemsById)

module.exports
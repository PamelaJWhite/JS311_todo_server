const express = require('express')

const router = express.Router()

//I think I need to access the controller.js file here
const controller = require("./controller")
// app.use(items)



//DEFINE ALL THE ROUTES:

router.get('/', controller.getAllItems)

router.get('/items', controller.getItemSummaries)

router.get('/items/:id', controller.getItemById)

router.post('/items', controller.createAnItem)

router.put('/items/:id', controller.updateItemsById)

router.delete('/items/:id', controller.deleteItemsById)

module.exports = router
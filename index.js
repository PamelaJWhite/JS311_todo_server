//import the express module
const express = require("express")

//instantiate an application server
const app = express();

//add support to parsing json in the body
//this replaces the body-parsing piece from the text book
app.use(express.json())

//get access to routes
const items = require("./items/routes.js")
app.use(items)

//define the folder where the static content is
app.use(express.static("./public"))

//define the port that this application is listening on
const PORT = 4000

/**
 * GET /
 * GET /items
 * GET /items/:id
 * POST /items              body{}
 * PUT /items/:id           body{}
 * DELETE /itmes/:id
 */

//start the application server
app.listen(PORT, function(){
    console.log("App has started")
})
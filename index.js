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

let nextId = 3

let db = [{
    "id": 1, 
    "label": "Reading for class 3",
    "done": false,
    "priority": "High",
    "dueDate": "8/31/21" 
}, {
    "id": 2, 
    "label": "Homework for class 3",
    "done": false,
    "priority": "High",
    "dueDate": "9/7/21" 
}
]
/**
 * GET /
 * GET /items
 * GET /items/:id
 * POST /items              body{}
 * PUT /items/:id           body{}
 * DELETE /itmes/:id
 */

 //I think I can delete this:
//  //returns some banner info for a sanity check
//  app.get("/", function(req, res){
//      res.json("Best Todo List App EVER")
//  })

//I think I can delte this:
//  //GET / items
//  //return the basic info for all the items
//  app.get("/items", 
// //return label, id, done

//I think i can delete this
 //GET /items/:id
 //return the entire item matching the id
//  app.get("/items/:id", function(req, res){
//      //I want to know that this function is working and all the params that it has sent back 
//      console.log("GET /items/:id yay", req.params)
//     let theId = req.params.id;
//      //get one of the objects from the array
//      //and return it

//      //loop through the array
//      //find the correct item
//      //and return it

//      //use a HOF find(); db.find()
//      res.json()
//  })

 //POST /items  body{id, name, done}
 //at minimum, label
 //body(label req, extra stuff)
 //if id is sent, we are going to replace it
 //if other attribute is sent, we will accept it as additional info
 //?if sent something without a label, return error?
 //if done is sent as true, we will accept it, otherwise we will set it to false
app.post("/items", function(req, res){
    console.log("POST /items", req.body)

    //create a box for the incoming information
    //this function will manage what's in this box
    let dataIn = req.body

    //find a way to come up with a new ID
    let newId = nextId
    nextId = nextId + 1;

    //if they sent an ID, override it
    dataIn.id = newId

    //label has to be truthy
    if(!dataIn.label) {
        //this code will execute if label is falsey 
        //have to decide what to do
        res.status(400).send("label required")
        return;
    }

    //if they send in anything other than true, the item is marked not done
    if(dataIn.done != true){
        dataIn.done = false
    }

    //add to database
    db.push(dataIn)

    //thumbs up OK message
    res.status(204).send("a-okay!")
})

//PUT /items/:id {body}
//if an id is included on the body, replace it with the id that is included on the path param
//?how? this isn't giving it a new id like the POST function
//this is saying keep the current id, correct?
//so... 
//this should uppdate an existing item for our DB, not replace it (not push)
app.put("/items/:id", function(res,req){
    //code here
})

//DELETE /itmes/:id
//find the item with this id in the database and remove it
app.delete("/items/:id", function(res,req){
    //code here
})


//start the application server
app.listen(PORT, function(){
    console.log("App has started")
})
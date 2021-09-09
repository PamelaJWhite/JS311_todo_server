//the actions, plain old JS

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

//make all the functions, that will be the callback functions
let getAllItems = function(req, res){
    res.json("Best Todo List App EVER")
}

let getItemSummaries = function(req, res){
//need id, label, done 
}

let getItemById = function(req, res){
      //I want to know that this function is working and all the params that it has sent back 
      console.log("GET /items/:id yay", req.params)
      let theId = req.params.id;
       //get one of the objects from the array
       //and return it
  
       //loop through the array
       //find the correct item
       //and return it
  
       //use a HOF find(); db.find()
       res.json()
}

//at minimum, label
 //body(label req, extra stuff)
 //if id is sent, we are going to replace it
 //if other attribute is sent, we will accept it as additional info
 //?if sent something without a label, return error?
 //if done is sent as true, we will accept it, otherwise we will set it to false
let createAnItem = function(req, res){
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
    //could/ should do it the other way, without the message. where does this message go?
    res.status(204).send("a-okay!")
}

//PUT /items/:id {body}
//if an id is included on the body, replace it with the id that is included on the path param
//?how? this isn't giving it a new id like the POST function
//this is saying keep the current id, correct?
//so... 
//this should uppdate an existing item for our DB, not replace it (not push)
let updateItemsById = function(req, res){
    //need the action in here
}

//DELETE /itmes/:id
//find the item with this id in the database and remove it
let deleteItemsById = function(req, res){
    //need the action in here
}

module.exports = {
    getAllItems,
    getItemSummaries,
    getItemById,
    createAnItem,
    updateItemsById,
    deleteItemsById
}
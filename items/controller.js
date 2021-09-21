//the actions, plain old JS




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

//practice
// let test = db.map(function summaryDb(element){
//     delete element.priority
//     delete element.dueDate
//     return element
//  })
// console.log("what does this do?", test)

//make all the functions, that will be the callback functions
let getAllItems = function(req, res){
    console.log("Best Todo List App EVER")
    res.json(db)
}

let getItemSummaries = function(req, res){
    console.log("items.controller.getItemSummaries")
    //need to grab id, label, and done keys and values
    //use a HOF? map()?
    let summaryDb = db.map(function summaryDb(element){
        delete element.priority
        delete element.dueDate
        return element
     })
     res.json(summaryDb)
}

let getItemById = function(req, res){
      //I want to know that this function is working and all the params that it has sent back 
      console.log("GET /items/:id yay", req.params)
      let id = req.params.id
      let found = db.find(function(element, index){
          if(element.id == id){
              return true
          }
          else{
              return false
          }
        
      })
      res.json(found)
}

let nextId = 3;
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

    
if(dataIn.label){
    //label has to be truthy
      //find a way to come up with a new ID
      let newId = nextId
      nextId = nextId + 1;
  
      //if they sent an ID, override it
      dataIn.id = newId
}
    else {
        
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
//this should uppdate an existing item for our DB, not replace it (not push)

let updateItemsById = function(req, res){
    console.log("items.controller.updateItemsById", req.body)
    //need the action in here
    //find the matching object by id
    let id = req.params.id
    let found = db.find(function(element, index){
        if(element.id == id){
            return true
        }
        else{
            return false
        }
    })
    //access the body of the incoming data, store it in a variable
    let dataIn = req.body
    
    //if dataIn has a label, replace the found label with it
    if (dataIn.label != null){
        console.log("there's a label in the new data")
        found.label = dataIn.label
  
    }
    //if dataIn has a done status, replace the found done status with it
    if (dataIn.done != null){
        console.log("there's a done status in the new data")
        found.done = dataIn.done
  
    }
    //if dataIn has a priority, replace the found priority with it
    if (dataIn.priority != null){
        console.log("there's a priority in the new data")
        found.priority = dataIn.priority
  
    }
    // if dataIn has a due date, replace the found due date with it
    if(dataIn.dueDate != null){
        console.log("there's a due date in the new data")
        found.dueDate = dataIn.dueDate
    }
    res.json(found)
}

//DELETE /itmes/:id
//find the item with this id in the database and remove it
let deleteItemsById = function(req, res){
    console.log("Ack you're deleting me!")
    //find the item with the matching id
    let id = req.params.id
    let found = db.find(function(element, index){
        if(element.id == id){
            return true
        }
        else{
            return false
        }
    })
    //get the index of that item
    index = db.indexOf(found)
    console.log("index of found:", index)

    //remove the object by its index
    db.splice(index, 1)
    res.json(db)
}

module.exports = {
    getAllItems,
    getItemSummaries,
    getItemById,
    createAnItem,
    updateItemsById,
    deleteItemsById
}
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

//middleware

var allowedOrigins = ['http://35.226.85.125:5000',
                      'http://35.226.85.125:5432'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
app.use(express.json()); //req.body

//ROUTES 

//create a todo

app.post("/todos", async (req, res)=> {
    try {
        //console.log(req.body);
        const {description} = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", 
            [description]
        );

        //res.json(newTodo);
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//get all todos

app.get("/todos", async (req, res)=> {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows)
    } catch (error) {
        console.error(error.message);
    }
});

//get a todo

app.get("/todos/:id", async (req, res) => {
    try {
     //console.log(req.params);
     const { id } = req.params;

     const todo = await pool.query(
         "SELECT * FROM todo WHERE todo_id = $1", 
         [id]
     );

     res.json(todo.rows[0]);

    } catch (error) {
        console.error(error.message);
    }
})

//updated a todo

app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;

        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
        );

        res.json("Todo was updated");

    } catch (error) {
        console.error(error.message);
    }
})

//delete  a todo

app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        );
        res.json("Todo was deleted");
    } catch (error) {
        console.log(error.message);
    }
})

//server start
app.listen(5057, ()=> {
    console.log("Server has stared on port 5057");
});


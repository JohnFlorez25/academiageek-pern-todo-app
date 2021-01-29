const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware

app.use(cors());
app.use(express.json()); //req.body

//Services db operations

//insert todos

const insertTodos = async (pool, todos) => {
  try {
    return await pool('todo').insert(todos);
  } catch (err) {
    throw Error(err);
  }
};

//get todos

const getTodos = async (pool) => {
  try {
    return await pool.select('*').from('todo').where('todo_id', id);
  } catch (err) {
    throw Error(err);
  }
};

//get a todo
const getTodo = async (pool, id) => {
  try {
    return await pool.select('*').from('todo').where(id);
  } catch (err) {
    throw Error(err);
  }
};

//ROUTES

//create a todo

app.post('/todos', async (req, res) => {
  const { todo } = req.body;

  try {
    await insertTodos(pool, todo);
  } catch (err) {
    logger.error(`Error while attempting to submit todo:${err}`);
    res
      .status(500)
      .send('Unable to cast todo; see logs for more details.')
      .end();
    return;
  }
  res.status(200).send(`Successfully todo`).end();
});

//get all todos

app.get('/todos', async (req, res) => {
  try {
    const todos = await getTodos(pool);
    res.json(todos);
  } catch (error) {
    console.error(error.message);
  }
});

//get a todo

app.get('/todos/:id', async (req, res) => {
  try {
    //console.log(req.params);
    const { id } = req.params;

    const todo = await getTodo(pool, id);

    res.json(todo);
  } catch (error) {
    console.error(error.message);
  }
});

//updated a todo

app.put('/todos/:id', async (req, res) => {});

//delete  a todo

app.delete('/todos/:id', async (req, res) => {});

//Main point

app.get('/', async (req, res) => {
    res.send("Hello to the Todo App")
 });


//server start
app.listen(5057, () => {
  console.log('Server has stared on port 5057');
});

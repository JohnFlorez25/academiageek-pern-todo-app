import React, { useState, useEffect } from 'react';

import EditTodo from './EditTodo';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function

  const deleteTodo = async (id) => {
      try {
          await fetch(`/todos/${id}`, {
              method: "DELETE"
          });

          //console.log(deletedTodo);
          setTodos(todos.filter(todo => todo.todo_id !== id));

      } catch (error) {
          console.log(error.message);
      }
  }


  const getTodos = async () => {
    try {
      const response = await fetch('/todos');
      const jsonData = await response.json();

      //console.log(jsonData);

      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  //console.table(todos);

  return (
    <>
      <table className='table mt-5 text-center'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map((todo) => (
            <tr key={`description-${todo.todo_id}`}>
              <td>{todo.description}</td>
              <td><EditTodo todo={todo}/></td>
              <td>
                <button className='btn btn-danger' onClick={() => deleteTodo(todo.todo_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;

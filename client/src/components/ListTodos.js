import React, {useState, useEffect} from 'react';

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5057/todos");
            const jsonData = await response.json();

            //console.log(jsonData);

            setTodos(jsonData);

        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(()=>{
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
          {todos.map(todo => (
              <tr>
                  <td>{todo.description}</td>
                  <td>Edit</td>
                  <td>Delete</td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;

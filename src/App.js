import React from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = React.useState({description: '', date: ''});
  const [todos, setTodos] = React.useState([]);

  const inputChanged = (event) => {
    const {name, value} = event.target;
    setTodo({...todo, [name]: value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({description: '', date: ''});
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" name="description" onChange={inputChanged} value={todo.description} placeholder="Description" />
            </td>
            <td>
              <input type="date" name="date" onChange={inputChanged} value={todo.date} placeholder="Date" />
            </td>
            <td>
              <button onClick={addTodo}>Add</button>
            </td>
          </tr>
          {
            todos.map((todo, index) => <tr key={index}><td>{todo.description}</td><td>{todo.date}</td></tr>)
          }
        </tbody>
      </table>
    </div>
  );
}
export default App;

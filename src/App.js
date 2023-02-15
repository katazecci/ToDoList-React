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
    if (todo.description.trim() && todo.date.trim()) {
      setTodos([...todos, todo]);
      setTodo({ description: '', date: '' });
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div>
      <table>
        <thead><tr>
            <th>Description</th>
            <th>Date</th>
            <th>Action</th></tr>
        </thead>
        <tbody><tr><td>
              <form onSubmit={addTodo}>
                <input type="text" name="description" onChange={inputChanged} value={todo.description} placeholder="Description" onKeyPress={(event) => event.key === 'Enter' && addTodo(event)} />
              </form></td><td>
              <form onSubmit={addTodo}>
                <input type="date" name="date" onChange={inputChanged} value={todo.date} placeholder="Date" onKeyPress={(event) => event.key === 'Enter' && addTodo(event)} />
              </form></td><td>
              <button onClick={addTodo}>Add</button></td></tr>
          {
            todos.map((todo, index) => <tr key={index}><td>{todo.description}</td><td>{todo.date}</td><td><button onClick={() => deleteTodo(index)}>Delete</button></td></tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;

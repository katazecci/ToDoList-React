import React from 'react';
import './App.css';

function App() {
  const [desc, setDesc] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const inputChanged = (event) => {
    setDesc(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, desc]);
  }

  return (
    <div>
      <input type="text" onChange={inputChanged} value={desc}/>
      <button onClick={addTodo}>Add</button>
      <table>
        <tbody>
          {
            todos.map(todo => <tr><td>{todo}</td></tr>)
          }
        </tbody>
      </table>   
    </div>
  );
};

export default App;

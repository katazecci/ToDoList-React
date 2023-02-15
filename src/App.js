import React from 'react';
import './App.css';
import TodoTable from './TodoTable';

function App() {
  const [todo, setTodo] = React.useState({ description: '', date: '' });
  const [todos, setTodos] = React.useState([]);

  const inputChanged = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

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
  };

  return (
    <div>
      <TodoTable todos={todos} onDelete={deleteTodo} addTodo={addTodo} todo={todo} onInputChanged={inputChanged} />
    </div>
  );
}

export default App
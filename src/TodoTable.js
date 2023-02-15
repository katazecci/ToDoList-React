import React from 'react';

function TodoTable(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" name="description" onChange={props.onInputChanged} value={props.todo.description} placeholder="Description" />
            </td>
            <td>
              <input type="date" name="date" onChange={props.onInputChanged} value={props.todo.date} placeholder="Date" />
            </td>
            <td>
              <button type="submit" onClick={props.addTodo}>Add</button>
            </td>
          </tr>
          {props.todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>
                <button onClick={() => props.onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoTable;

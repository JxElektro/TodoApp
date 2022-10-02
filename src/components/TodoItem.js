import React from "react";

// Todo item component 

function TodoItem({todo , onComplete}) {
  const getStyle = () => {
    return {
      textDecoration: todo.status ? 'line-through' : 'none',
      margin: '10px',
      border: '1px #ccc solid',
      background: todo.status ? '#008000' : '#dd0a00', 
    }
  }
  return (
    <div style = {getStyle()}>
      <input type="checkbox" checked={todo.status} onChange={() => onComplete(todo.id)} />
      {todo.task}
      <button className="add-btn">X</button>
    </div>
  )
}


export default TodoItem;
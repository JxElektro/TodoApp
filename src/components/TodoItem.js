import React from "react";

// Todo item component 

function TodoItem({todo , onComplete , onDelete}) {
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
      <button className="add-btn" onClick={() => onDelete(todo.id) } >X</button> 
      {// pass the id of the todo to the onDelete function
      }
    </div>
  )
}


export default TodoItem;
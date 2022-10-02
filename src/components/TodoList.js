import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todo, onComplete, onDelete }) {
  return (
    <div className='element'>
      {
        todo.map((todo, index) => (
          <TodoItem key={`todo-${index}`} todo={todo} onComplete={onComplete} onDelete={onDelete} />
           // pass the todo, onComplete and onDelete functions as props to TodoItem
        ))
      }
    </div>
  )
}

export default TodoList;
import React from 'react'
import TodoItem from './TodoItem'

 function TodoList({todo , onComplete , onDelete}) {
  return (
    <div className='element'>
      {
        todo.map((todo, index) => (
           <TodoItem key={`todo-${index}`} todo={todo} onComplete ={onComplete} onDelete = { onDelete}/>
          ))
      }
    </div>
  )
}

export default TodoList;
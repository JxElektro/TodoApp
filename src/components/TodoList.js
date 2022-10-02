import React from 'react'
import TodoItem from './TodoItem'

 function TodoList({todo , onComplete}) {
  return (
    <div>
      {
        todo.map((todo, index) => (
           <TodoItem key={`todo-${index}`} todo={todo} onComplete ={onComplete} />
          ))
      }
    </div>
  )
}

export default TodoList;
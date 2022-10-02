import React , {useState} from 'react'

export default function TodoForm({addTodo}) {
  
const [task, setTask] = useState('')
const handleChange = (e) => {
 setTask(e.currentTarget.value)
}

const handleSubmit  = (e) => {
  e.preventDefault()
  if (task.trim() !== '') {
    addTodo(task)
    setTask('')
  }
}

  return (
    <div>
      <form onSubmit= {handleSubmit}>
        <input type="text" placeholder="Add a task" value={task} onChange = {handleChange} />
        <button className="add-btn">Add</button>
      </form>
    </div>

  )
}

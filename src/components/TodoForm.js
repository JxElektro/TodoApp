import React , {useState} from 'react' // import useState hook from react

export default function TodoForm({addTodo}) { // addTodo is a function passed as a prop from App.js
  
const [task, setTask] = useState('') // useState hook to set the state of the task
const handleChange = (e) => { // handleChange function to handle the change in the input field  
 setTask(e.currentTarget.value) // set the state of the task to the value of the input field
}

const handleSubmit  = (e) => { // handleSubmit function to handle the submit event
  e.preventDefault() // prevent the default behaviour of the form
  if (task.trim() !== '') { // check if the task is not empty
    addTodo(task) // call the addTodo function passed as a prop from App.js
    setTask('') // set the state of the task to empty string
  }
}

  return ( // return the form
    <div> {// div to wrap the form
    }
      <form onSubmit= {handleSubmit}>
        <input type="text" placeholder="Add a task" value={task} onChange = {handleChange} />
        <button className="add-btn">Add</button>
      </form>
    </div>

  )
}

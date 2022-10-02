import './App.css';
import { useState } from 'react';
import data from './data.json';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {

  const [todo, setTodo] = useState(data);

  const onComplete = (id) => {
    console.log('task', id);
    setTodo(todo.map((todo) => {
      return todo.id === (id) ? { ...todo, status: !todo.status } : { ...todo }
    }
    ))
  }

  const onDelete = (id) => {
    setTodo([...todo].filter(todo => todo.id !== id))
  }

  const addTodo = (newTask) => {
    let newItem = { id : +new Date() , task : newTask , status : false};

    setTodo([...todo, newItem])
  }



  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm addTodo = {addTodo} />
      <TodoList todo={todo} onComplete={onComplete} onDelete={onDelete} />
    </div>
  );
}

export default App;

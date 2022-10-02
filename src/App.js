import './App.css';
import { useState } from 'react';
import data from './data.json';
import TodoList from './components/TodoList';

function App() {

   const [todo, setTodo] = useState(data);    
  
const onComplete = (id) => {
  console.log('task', id);

  setTodo(todo.map((todo) => {
  return todo.id === (id) ? { ...todo, status: !todo.status } : {...todo}
  }
  ))
}

  return (
    <div className="container">
     <TodoList todo = {todo} onComplete = { onComplete}/>
    </div>
  );
}

export default App;

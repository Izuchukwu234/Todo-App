import React, { useState, useEffect } from 'react'
import './App.css';
import { Todo } from './Todo';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState(initialState)

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo]);
  return (
    <div className="App">
      <Todo
      input={input}
      setInput={setInput}
      todo={todo}
      setTodo={setTodo}
      />
    </div>
  );
}

export default App;

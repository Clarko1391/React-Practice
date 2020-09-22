import React, {useState, useEffect} from 'react';
import './App.css';

// Importing Components
import Form from './components/Form';
import ToDoList from './components/TodoList';

function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Functions
    // Filter immutable toDos list 
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'incomplete':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

    //Save to local
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
      setTodos(localTodo);
    }
  }

  // Run once when app starts (must trigger before saveToLocal storage otherwise array is overwritten before it is read )
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div className="App"> 
      <header>
        <h1>Clark's To Do List</h1>
      </header>
      <Form 
      todos = {todos}
      setTodos = {setTodos}
      inputText = {inputText}
      setInputText = {setInputText} 
      setStatus = {setStatus}
      />
      <ToDoList 
      todos = {todos} 
      setTodos = {setTodos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;

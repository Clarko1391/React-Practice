import React from 'react';

// Import Components
import Todo from './Todo'

const ToDoList = ({todos, setTodos, filteredTodos}) => {
    return(
        <div className="toDoContainer">
            <ul className="toDoList">
                {filteredTodos.map(todo => (
                    <Todo 
                    text={todo.text} 
                    key={todo.id}
                    todos={todos}
                    todo={todo}
                    setTodos = {setTodos}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {

    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id ));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            };
            return item;
        }));
    };
    
    return (
        <div className="toDo">
            <li className={`toDoItem ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="completedButton">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trashButton">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;